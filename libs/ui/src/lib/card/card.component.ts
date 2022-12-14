import { Component, Input } from '@angular/core';

export enum Social {
  TWITCH = 'twitch',
  TIKTOK = 'tiktok',
  YOUTUBE = 'youtube',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
}

export interface SocialCount {
  social: Social;
  count: number;
  link: string;
}

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
