import {Component, Input} from '@angular/core';

@Component({
  selector: 'jbm-creator-network-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() darkSocialButtons = false;
}
