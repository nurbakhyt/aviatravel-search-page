import Vue from 'vue';
import Vuex from 'vuex';
import filters from '@/store/filters';
import flights from '@/store/flights';

Vue.use(Vuex);

const state: RootState = {};

export default new Vuex.Store({
  state,
  mutations: {
  },
  actions: {
  },
  modules: {
    filters,
    flights,
  },
});
