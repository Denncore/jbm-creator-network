import { Action } from '@ngrx/store';

import * as CreatorsActions from './creators.actions';
import { CreatorsEntity } from './creators.models';
import {
  CreatorsState,
  initialCreatorsState,
  creatorsReducer,
} from './creators.reducer';

describe('Creators Reducer', () => {
  const createCreatorsEntity = (id: string, name = ''): CreatorsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Creators actions', () => {
    it('loadCreatorsSuccess should return the list of known Creators', () => {
      const creators = [
        createCreatorsEntity('PRODUCT-AAA'),
        createCreatorsEntity('PRODUCT-zzz'),
      ];
      const action = CreatorsActions.loadCreatorsSuccess({ creators });

      const result: CreatorsState = creatorsReducer(
        initialCreatorsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = creatorsReducer(initialCreatorsState, action);

      expect(result).toBe(initialCreatorsState);
    });
  });
});
