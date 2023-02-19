import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CreatorsState, selectCreator} from '@jbm-creator-network/creators';
import {Store} from '@ngrx/store';
import {Observable, switchMap} from 'rxjs';
import {CreatorsEntity} from "@jbm-creator-network/model";


@Component({
  selector: 'jbm-creator-network-creator-description',
  templateUrl: './creator-description.component.html',
  styleUrls: ['./creator-description.component.css']
})
export class CreatorDescriptionComponent {
  creator$: Observable<CreatorsEntity | undefined>

  constructor(private route: ActivatedRoute, private store: Store<CreatorsState>) {
    this.creator$ = this.route.params.pipe(
      switchMap( (params) => store.select(selectCreator(params['id'])))
    );
  }
}
