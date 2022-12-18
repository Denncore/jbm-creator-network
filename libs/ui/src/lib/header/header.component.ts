import { Component, Input } from '@angular/core';

export interface HeaderEntry {
  name: string;
  link: string;
}

@Component({
  selector: 'jbm-creator-network-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() showMobileMenu = false;

  @Input() headerEntries: HeaderEntry[] = [];
}
