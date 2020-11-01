import { ActionContext } from 'vuex';

/* eslint no-param-reassign: 0 */

const toArray = (obj: IsomorphicObject): FilterOption[] => Object.keys(obj)
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
  selectedAirlines: [],
  selectedOptions: [],
};

export default {
  namespaced: true,
  state,
  getters: {
    airlinesRaw: (localState: FiltersState): IsomorphicObject => localState.airlines,
    airlinesArray: (localState: FiltersState): FilterOption[] => toArray(localState.airlines),
    optionsRaw: (localState: FiltersState): IsomorphicObject => localState.options,
    optionsArray: (localState: FiltersState): FilterOption[] => toArray(localState.options),
    selectedAirlines: (localState: FiltersState): string[] => localState.selectedAirlines,
    selectedOptions: (localState: FiltersState): string[] => localState.selectedOptions,
  },
  actions: {
    init({ commit }: ActionContext<FiltersState, RootState>, airlines: IsomorphicObject) {
      commit('SET_AIRLINES', airlines);
    },
    selectAirlines({ commit }: ActionContext<FiltersState, RootState>, list: string[]) {
      commit('SELECT_AIRLINES', list);
    },
    selectOptions({ commit }: ActionContext<FiltersState, RootState>, list: string[]) {
      commit('SELECT_OPTIONS', list);
    },
  },
  mutations: {
    SET_AIRLINES(localState: FiltersState, airlines: IsomorphicObject) {
      localState.airlines = {
        ALL: 'Все',
        ...airlines,
      };
    },
    SELECT_AIRLINES(localState: FiltersState, airlines: string[]) {
      localState.selectedAirlines = airlines;
    },
    SELECT_OPTIONS(localState: FiltersState, options: string[]) {
      localState.selectedOptions = options;
    },
  },
};
