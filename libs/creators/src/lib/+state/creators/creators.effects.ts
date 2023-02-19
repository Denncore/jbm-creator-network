import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';

import * as CreatorsActions from './creators.actions';
import {CreatorService} from "@jbm-creator-network/api";

@Injectable()
export class CreatorsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreatorsActions.initCreators),
      switchMap(() => {
        return this.creatorService.getCreators().pipe(
          map(creators => {
            return CreatorsActions.loadCreatorsSuccess({creators});
          }),
          catchError(error =>
            of(CreatorsActions.loadCreatorsFailure({error}))
          )
        );
      })
    )
  );

  constructor(private creatorService: CreatorService) {}
}
