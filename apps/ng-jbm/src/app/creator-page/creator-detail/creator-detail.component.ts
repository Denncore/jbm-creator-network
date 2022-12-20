import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {CreatorsEntity, CreatorsState, selectCreator, selectEntity} from "@jbm-creator-network/creators";
import {Store} from "@ngrx/store";

@Component({
  selector: 'jbm-creator-network-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.css'],
})
export class CreatorDetailComponent {
  creator$: Observable<CreatorsEntity | undefined>
  constructor(private route: ActivatedRoute, private store: Store<CreatorsState>) {
    this.creator$ = this.route.params.pipe(
      switchMap( (params) => store.select(selectCreator(params['id'])))
    );
  }
}
