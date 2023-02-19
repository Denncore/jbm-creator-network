import {Component} from '@angular/core';
import {CreatorsState, selectFirstCreators,} from '@jbm-creator-network/creators';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CreatorsEntity} from "@jbm-creator-network/model";

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
