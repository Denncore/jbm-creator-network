import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { of } from 'rxjs';

import * as CreatorsActions from './creators.actions';
import * as CreatorsFeature from './creators.reducer';

@Injectable()
export class CreatorsEffects {
  private actions$ = inject(Actions);

  /*

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreatorsActions.initCreators),
      fetch({
        run: () => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return of(CreatorsActions.loadCreatorsSuccess({ creators: [] }));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return o f(CreatorsActions.loadCreatorsFailure({ error }));
        },
      })
    )
  );
  */
}
