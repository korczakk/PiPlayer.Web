import { Component, Input, OnInit } from '@angular/core';
import { ContentMusic } from 'src/app/Model/ContentMusic';

@Component({
  selector: 'app-net-radio-item',
  templateUrl: './net-radio-item.component.html',
  styleUrls: ['./net-radio-item.component.scss', '../commonStyles.scss']
})
export class NetRadioItemComponent  {
  @Input() content: ContentMusic;
}
