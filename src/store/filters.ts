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
}

export default {
  namespaced: true,
  state,
  getters: {
    airlinesRaw: (state: FiltersState) => state.airlines,
    airlinesArray: (state: FiltersState) => transformToOptions(state.airlines),
    optionsRaw: (state: FiltersState) => state.options,
    optionsArray: (state: FiltersState) => transformToOptions(state.options),
  },
  actions: {
    async load({ commit }: ActionContext<FiltersState, RootState>) {
      const airlines: IsomorphicObject = await loadAirlines();

      commit('SET_AIRLINES', airlines);
    },
  },
  mutations: {
    SET_AIRLINES(state: FiltersState, airlines: IsomorphicObject) {
      state.airlines = {
        ...state.airlines,
        ...airlines,
      };
    },
  },
};
