import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { webSocket, WebSocketSubject  } from 'rxjs/webSocket'
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { delayWhen, map, retry, retryWhen, tap } from 'rxjs/operators'
import { ServerPlayerState } from '../Model/playerState';
import { PlayerStateEnum } from '../Model/PlayerStateEnum'
import { ServerPlayerCommand } from '../Model/serverPlayerCommand';

@Injectable({
  providedIn: 'root'
})
export class WebSocketConnectionService {

  wsConnection: WebSocketSubject<any>;
  wsConnectionSubscription: Subscription;
  serverMessages = new BehaviorSubject<ServerPlayerState>({
    state: PlayerStateEnum.NotConnected
  });

  constructor() {
    this.connectWebSocket();

    this.wsConnectionSubscription = this.wsConnection.pipe(
      map(msg => {
        this.serverMessages.next(msg);
        console.log(msg);
      }),
      retryWhen(errors =>
        errors.pipe(
          delayWhen(_ => timer(3000))
        )
      ),
    ).subscribe();

  }

  ngOnDestroy(): void {
    this.wsConnection.complete();
    this.wsConnectionSubscription.unsubscribe();
  }

  sendCommand(command: ServerPlayerCommand) {
    this.wsConnection.next(command);
  }

  private connectWebSocket() {
    const wsUrl = environment.webSocketUrl;

    this.wsConnection = webSocket({
      url: wsUrl,
      closeObserver: {
        next: () => this.serverMessages.next({ state: PlayerStateEnum.NotConnected })
      },
      openObserver: {
        next: () => this.serverMessages.next({ state: PlayerStateEnum.WaitingForCommand })
      }
    });
  }
}
