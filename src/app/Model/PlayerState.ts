import { PlayerStateEnum } from './PlayerStateEnum';

export interface ServerPlayerState {
  state: PlayerStateEnum;
  fileName?: string;
  duration?: number;
  title?: string;
}
