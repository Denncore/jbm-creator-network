import { Component } from '@angular/core';
import { Social, SocialCount } from '@jbm-creator-network/ui';

@Component({
  selector: 'jbm-creator-network-creator-overview',
  templateUrl: './creator-overview.component.html',
  styleUrls: ['./creator-overview.component.css']
})
export class CreatorOverviewComponent {

  socialCounts: SocialCount[] = [
   {social: Social.TWITCH, count: 300000},
   {social: Social.TIKTOK, count: 8},
   {social: Social.FACEBOOK, count: 285372},
   {social: Social.INSTAGRAM, count: 49000},
   {social: Social.TWITTER, count: 999},
   {social: Social.YOUTUBE, count: 999999}
  ]
}
