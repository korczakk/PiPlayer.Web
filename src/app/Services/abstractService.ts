import { ContentMusic } from '../Model/ContentMusic';

export abstract class MusicService {
  abstract getData(): Promise<ContentMusic[]>;
  abstract play();
  abstract setItemSelected(item: ContentMusic);
}
