import { Component } from '@angular/core';
import {
  CreatorsEntity,
  CreatorsState,
  selectAllCreators,
} from '@jbm-creator-network/creators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'jbm-creator-network-creator-list',
  templateUrl: './creator-list.component.html',
  styleUrls: ['./creator-list.component.css'],
})
export class CreatorListComponent {
  creators$: Observable<CreatorsEntity[]>;

  constructor(private store: Store<CreatorsState>) {
    this.creators$ = this.store.select(selectAllCreators);
  }
}
