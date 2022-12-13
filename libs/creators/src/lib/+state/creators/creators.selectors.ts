import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CREATORS_FEATURE_KEY,
  CreatorsState,
  creatorsAdapter,
} from './creators.reducer';

// Lookup the 'Creators' feature state managed by NgRx
export const selectCreatorsState =
  createFeatureSelector<CreatorsState>(CREATORS_FEATURE_KEY);

const { selectAll, selectEntities } = creatorsAdapter.getSelectors();

export const selectCreatorsLoaded = createSelector(
  selectCreatorsState,
  (state: CreatorsState) => state.loaded
);

export const selectCreatorsError = createSelector(
  selectCreatorsState,
  (state: CreatorsState) => state.error
);

export const selectAllCreators = createSelector(
  selectCreatorsState,
  (state: CreatorsState) => selectAll(state)
);

export const selectCreatorsEntities = createSelector(
  selectCreatorsState,
  (state: CreatorsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectCreatorsState,
  (state: CreatorsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectCreatorsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
