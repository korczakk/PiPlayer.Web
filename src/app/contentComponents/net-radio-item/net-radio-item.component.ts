import { Component, Input, OnInit } from '@angular/core';
import { ContentMusic } from 'src/app/Model/ContentMusic';
import { BaseContentComponent } from '../baseContentComponent';

@Component({
  selector: 'app-net-radio-item',
  templateUrl: './net-radio-item.component.html',
  styleUrls: ['./net-radio-item.component.scss', '../commonStyles.scss']
})
export class NetRadioItemComponent extends BaseContentComponent {
}
