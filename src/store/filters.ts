import { ActionContext } from 'vuex';
import { loadAirlines } from '@/data/load';

const transformToOptions = (obj: IsomorphicObject): FilterOption[] => Object.keys(obj)
  .reduce((arr: FilterOption[], key: string) => ([
    ...arr,
    {
      code: key,
      value: obj[key],
    },
  ]), []);

const state: FiltersState = {
  airlines: {
    ALL: 'Все',
  },
  options: {
    onlyDirect: 'Только прямые',
    onlyWithBaggage: 'Только с багажом',
    onlyReturnable: 'Только возвратные',
  },
};

export default {
  namespaced: true,
  state,
  getters: {
    airlinesRaw: (localState: FiltersState) => localState.airlines,
    airlinesArray: (localState: FiltersState) => transformToOptions(localState.airlines),
    optionsRaw: (localState: FiltersState) => localState.options,
    optionsArray: (localState: FiltersState) => transformToOptions(localState.options),
  },
  actions: {
    async load({ commit }: ActionContext<FiltersState, RootState>) {
      const airlines: IsomorphicObject = await loadAirlines();

      commit('SET_AIRLINES', airlines);
    },
  },
  mutations: {
    SET_AIRLINES(localState: FiltersState, airlines: IsomorphicObject) {
      // eslint-disable-next-line
      localState.airlines = {
        ...localState.airlines,
        ...airlines,
      };
    },
  },
};
