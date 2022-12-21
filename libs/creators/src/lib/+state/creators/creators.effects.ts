import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CreatorService } from '../../creator.service';

import * as CreatorsActions from './creators.actions';

@Injectable()
export class CreatorsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreatorsActions.initCreators),
      switchMap(() => {
        return this.creatorService.getCreators().pipe(
          map(entities => {
            return CreatorsActions.loadCreatorsSuccess({ creators: entities });
          }),
          catchError(error =>
            of(CreatorsActions.loadCreatorsFailure({ error }))
          )
        );
      })
    )
  );

  constructor(private creatorService: CreatorService) {}
}
