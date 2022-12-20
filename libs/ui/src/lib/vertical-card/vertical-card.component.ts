import { Component, Input } from '@angular/core';
import { SocialCount } from '../card/card.component';

@Component({
  selector: 'jbm-creator-network-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css']
})
export class VerticalCardComponent {
  @Input() image = '';
  @Input() name = 'NAME OF CREATOR';
  @Input() tag = '@tag_creator';
  @Input() socialCounts: SocialCount[] = [];
  @Input() link?: string;
  @Input() withBackground = true;
}
