import { ActionContext } from 'vuex';
import { loadFlights } from '@/data/load';

const state: FlightsState = {
  items: [],
};

export default {
  namespaced: true,
  state,
  getters: {
    items: (state: FlightsState): Flight[] => state.items,
  },
  actions: {
    async load({ commit }: ActionContext<FlightsState, RootState>) {
      const flights: Flight[] = await loadFlights();

      commit('SET_FLIGHTS', flights);
    },
  },
  mutations: {
    SET_FLIGHTS(state: FlightsState, items: Flight[]) {
      state.items = items;
    },
  },
};
