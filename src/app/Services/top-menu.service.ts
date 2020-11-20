import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../Model/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class TopMenuService {

  menuSelection: BehaviorSubject<MenuItem> = new BehaviorSubject<MenuItem>(MenuItem.Files);
}
