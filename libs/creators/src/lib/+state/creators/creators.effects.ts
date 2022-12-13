import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CreatorsActions from './creators.actions';
import * as CreatorsFeature from './creators.reducer';

@Injectable()
export class CreatorsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreatorsActions.initCreators),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CreatorsActions.loadCreatorsSuccess({ creators: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CreatorsActions.loadCreatorsFailure({ error });
        },
      })
    )
  );
}
