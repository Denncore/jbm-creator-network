import {Component, Input} from '@angular/core';
import {SocialCount} from "@jbm-creator-network/model";

@Component({
  selector: 'jbm-creator-network-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() image?: string = '';
  @Input() name = 'NAME OF CREATOR';
  @Input() tag = '@tag_creator';
  @Input() socialCounts: SocialCount[] = [];
}
