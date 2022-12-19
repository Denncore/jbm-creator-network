import { Component } from '@angular/core';
import {
  CreatorsEntity,
  CreatorsState,
  selectFirstCreators,
} from '@jbm-creator-network/creators';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'jbm-creator-network-creator-overview',
  templateUrl: './creator-overview.component.html',
  styleUrls: ['./creator-overview.component.css'],
})
export class CreatorOverviewComponent {
  creatorEntities: Observable<CreatorsEntity[]>;

  constructor(private store: Store<CreatorsState>) {
    this.creatorEntities = this.store.select(selectFirstCreators(4));
  }
}
