import { Component } from '@angular/core';
import { CreatorsState } from '@jbm-creator-network/creators';
import { Store } from '@ngrx/store';
import { HeaderEntry } from 'libs/ui/src/lib/header/header.component';
import * as CreatorsActions from '@jbm-creator-network/creators';

@Component({
  selector: 'jbm-creator-network-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-jbm';
  headerEntries: HeaderEntry[] = [
    { name: 'HOME', link: '/start' },
    { name: 'CREATOR', link: '/creator' },
    { name: 'LEISTUNGEN', link: '/services' },
    { name: 'TEAM', link: '/team' },
    { name: 'KONTAKT', link: '/contact' },
  ];

  constructor(private store: Store<CreatorsState>) {
    this.store.dispatch(CreatorsActions.initCreators());
  }
}
