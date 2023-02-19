import {createAction, props} from '@ngrx/store';
import {CreatorsEntity} from "@jbm-creator-network/model";

export const initCreators = createAction('[Creators Page] Init');

export const loadCreatorsSuccess = createAction(
  '[Creators/API] Load Creators Success',
  props<{ creators: CreatorsEntity[] }>()
);

export const loadCreatorsFailure = createAction(
  '[Creators/API] Load Creators Failure',
  props<{ error: any }>()
);
