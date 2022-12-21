import { Component } from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {CreatorsEntity, CreatorsState, selectCreator} from "@jbm-creator-network/creators";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";

@Component({
  selector: 'jbm-creator-network-creator-impressum',
  templateUrl: './creator-impressum.component.html',
  styleUrls: ['./creator-impressum.component.css'],
})
export class CreatorImpressumComponent {
  creator$: Observable<CreatorsEntity | undefined>
  constructor(private route: ActivatedRoute, private store: Store<CreatorsState>) {
    this.creator$ = this.route.params.pipe(
      switchMap( (params) => store.select(selectCreator(params['id'])))
    );
  }
}
