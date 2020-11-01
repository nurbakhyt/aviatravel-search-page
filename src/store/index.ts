import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';
import filters from '@/store/filters';
import flights from '@/store/flights';
import loadAll from '@/data/load';

Vue.use(Vuex);

const state: RootState = {};

export default new Vuex.Store({
  state,
  mutations: {
  },
  actions: {
    async loadAll({ dispatch }: ActionContext<RootState, RootState>) {
      const { airlines, flights: flightsArray }: IsomorphicObject = await loadAll();

      await dispatch('filters/init', airlines);
      await dispatch('flights/init', flightsArray);
    },
  },
  modules: {
    filters,
    flights,
  },
});
