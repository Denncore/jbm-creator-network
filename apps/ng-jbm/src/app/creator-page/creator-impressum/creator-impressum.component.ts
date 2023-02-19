import {Component} from '@angular/core';
import {Observable, switchMap} from 'rxjs';
import {CreatorsState, selectCreator,} from '@jbm-creator-network/creators';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {CreatorsEntity} from "@jbm-creator-network/model";

@Component({
  selector: 'jbm-creator-network-creator-impressum',
  templateUrl: './creator-impressum.component.html',
  styleUrls: ['./creator-impressum.component.css'],
})
export class CreatorImpressumComponent {
  creator$?: Observable<CreatorsEntity | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<CreatorsState>
  ) {
    if (this.route.parent?.paramMap) {
      this.creator$ = this.route.parent?.paramMap.pipe(
        switchMap(params =>
          store.select(selectCreator(params.get('id') as string))
        )
      );
    }
  }
}
