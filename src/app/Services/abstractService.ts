import { Observable } from 'rxjs';
import { ContentMusic } from '../Model/ContentMusic';

export abstract class MusicService {
  abstract getData(): Observable<ContentMusic[]>;
  abstract play();
}
