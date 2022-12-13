import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CreatorsActions from './creators.actions';
import { CreatorsEntity } from './creators.models';

export const CREATORS_FEATURE_KEY = 'creators';

export interface CreatorsState extends EntityState<CreatorsEntity> {
  selectedId?: string | number; // which Creators record has been selected
  loaded: boolean; // has the Creators list been loaded
  error?: string | null; // last known error (if any)
}

export interface CreatorsPartialState {
  readonly [CREATORS_FEATURE_KEY]: CreatorsState;
}

export const creatorsAdapter: EntityAdapter<CreatorsEntity> =
  createEntityAdapter<CreatorsEntity>();

export const initialCreatorsState: CreatorsState =
  creatorsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialCreatorsState,
  on(CreatorsActions.initCreators, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CreatorsActions.loadCreatorsSuccess, (state, { creators }) =>
    creatorsAdapter.setAll(creators, { ...state, loaded: true })
  ),
  on(CreatorsActions.loadCreatorsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function creatorsReducer(
  state: CreatorsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
