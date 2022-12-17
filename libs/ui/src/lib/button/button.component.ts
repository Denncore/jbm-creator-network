import { Component, Input } from '@angular/core';

@Component({
  selector: 'jbm-creator-network-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {

  @Input() transparent = false;
  @Input() withoutIcon = false;
  @Input() disabled = false;
}
