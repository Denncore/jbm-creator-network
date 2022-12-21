import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CreatorsState,
  selectCreator
} from '@jbm-creator-network/creators';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'jbm-creator-network-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  creatorName$?: Observable<string | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<CreatorsState>
  ) {}

  ngOnInit(): void {
    this.creatorName$ = this.route.params.pipe(
      switchMap(params => this.store.select(selectCreator(params['id']))),
      map(creator => creator?.name)
    );
  }
}
