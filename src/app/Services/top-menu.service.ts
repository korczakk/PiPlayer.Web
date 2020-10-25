import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../Model/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class TopMenuService {

  menuSevection: BehaviorSubject<MenuItem> = new BehaviorSubject<MenuItem>(MenuItem.Files);
}
