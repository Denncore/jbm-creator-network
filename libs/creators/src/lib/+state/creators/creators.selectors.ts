import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CREATORS_FEATURE_KEY, creatorsAdapter, CreatorsState,} from './creators.reducer';
import {CreatorsEntity} from "@jbm-creator-network/model";

// Lookup the 'Creators' feature state managed by NgRx
export const selectCreatorsState =
  createFeatureSelector<CreatorsState>(CREATORS_FEATURE_KEY);

const {selectAll, selectEntities} = creatorsAdapter.getSelectors();

export const selectAllCreators = createSelector(selectCreatorsState, selectAll);
export const selectFirstCreators = (n: number) =>
  createSelector(
    selectAllCreators,
    (creatorEntities: CreatorsEntity[]) =>
    creatorEntities.filter((creator, idx) => idx < n)
  )

export const selectCreator = (id: string) =>
  createSelector(
    selectAllCreators,
    (creatorEntities: CreatorsEntity[]) =>
      creatorEntities.find((creator) => creator.id === id)
  )

export const selectCreatorsEntities = createSelector(
  selectCreatorsState,
  selectEntities
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
