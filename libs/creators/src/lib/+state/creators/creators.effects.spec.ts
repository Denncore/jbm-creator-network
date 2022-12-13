import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CreatorsActions from './creators.actions';
import { CreatorsEffects } from './creators.effects';

describe('CreatorsEffects', () => {
  let actions: Observable<Action>;
  let effects: CreatorsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CreatorsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CreatorsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CreatorsActions.initCreators() });

      const expected = hot('-a-|', {
        a: CreatorsActions.loadCreatorsSuccess({ creators: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
