import { BehaviorSubject } from 'rxjs';
import { ContentMusic } from '../Model/ContentMusic';
import { ServerPlayerState } from '../Model/playerState';

export abstract class MusicService {

  abstract serverPlayerState: BehaviorSubject<ServerPlayerState>;

  abstract getData(): Promise<ContentMusic[]>;
  abstract play();
  abstract setItemSelected(item: ContentMusic);
}
