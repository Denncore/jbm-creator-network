import {Component} from '@angular/core';
import {CreatorService} from '@jbm-creator-network/api';
import * as CreatorsActions from '@jbm-creator-network/creators';
import {CreatorsState, selectAllCreators} from '@jbm-creator-network/creators';
import {HeaderAutocompleteEntry, HeaderEntry} from '@jbm-creator-network/ui';
import {Store} from '@ngrx/store';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'jbm-creator-network-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-jbm';
  headerEntries: HeaderEntry[] = [
    {name: 'HOME', link: '/start'},
    { name: 'CREATOR', link: '/creator' },
    { name: 'KONTAKT', link: '/contact' },
  ];
  autoCompleteEntities$: Observable<HeaderAutocompleteEntry[]>;

  constructor(
    private store: Store<CreatorsState>,
    private twitchService: CreatorService
  ) {
    this.store.dispatch(CreatorsActions.initCreators());
    this.autoCompleteEntities$ = this.store.select(selectAllCreators).pipe(
      map(creators =>
        creators.map(
          creator =>
            ({
              id: creator.id,
              name: creator.name,
            } as HeaderAutocompleteEntry)
        )
      )
    );
  }
}
