import { CreatorsEntity } from './creators.models';
import {
  creatorsAdapter,
  CreatorsPartialState,
  initialCreatorsState,
} from './creators.reducer';
import * as CreatorsSelectors from './creators.selectors';

describe('Creators Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCreatorsId = (it: CreatorsEntity) => it.id;
  const createCreatorsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CreatorsEntity);

  let state: CreatorsPartialState;

  beforeEach(() => {
    state = {
      creators: creatorsAdapter.setAll(
        [
          createCreatorsEntity('PRODUCT-AAA'),
          createCreatorsEntity('PRODUCT-BBB'),
          createCreatorsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCreatorsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Creators Selectors', () => {
    it('selectAllCreators() should return the list of Creators', () => {
      const results = CreatorsSelectors.selectAllCreators(state);
      const selId = getCreatorsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = CreatorsSelectors.selectEntity(state) as CreatorsEntity;
      const selId = getCreatorsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectCreatorsLoaded() should return the current "loaded" status', () => {
      const result = CreatorsSelectors.selectCreatorsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectCreatorsError() should return the current "error" state', () => {
      const result = CreatorsSelectors.selectCreatorsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
