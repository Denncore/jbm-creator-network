import { Component } from '@angular/core';
import { HeaderEntry } from 'libs/ui/src/lib/header/header.component';

@Component({
  selector: 'jbm-creator-network-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-jbm';
  headerEntries: HeaderEntry[] = [
    { name: 'HOME', link: '' },
    { name: 'CREATOR', link: '' },
    { name: 'LEISTUNGEN', link: '' },
    { name: 'TEAM', link: '' },
    { name: 'KONTAKT', link: '' },
  ];
}
