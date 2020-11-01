import { ActionContext } from 'vuex';

/* eslint no-param-reassign: 0 */

const state: FlightsState = {
  allIds: [],
  byId: {},
  byAirlines: {},
  byOptions: {},
};

const intersection = (arr1: string[], arr2: string[]): string[] => arr1
  .filter((a: string): boolean => arr2.includes(a));

const reducer = (options: string[], map: IsomorphicObject) => options
  .reduce((ids: string[], al: string) => ([
    ...ids,
    ...map[al],
  ]), []);

const reducerOptions = (options: string[], map: IsomorphicObject) => options
  .reduce((ids: string[], option: string) => ([
    ...intersection(ids, map[option]),
  ]), map[options[0]]);

export default {
  namespaced: true,
  state,
  getters: {
    allIds: (localState: FlightsState): string[] => localState.allIds,
    filteredIds: (
      localState: FlightsState,
      getters: IsomorphicObject,
      rootState: RootState,
    ): string[] => {
      const { filters: { selectedAirlines } } = rootState;
      const { filters: { selectedOptions } } = rootState;

      let filteredIds = localState.allIds;

      if (selectedAirlines.length > 0) {
        filteredIds = intersection(
          filteredIds,
          reducer(selectedAirlines, localState.byAirlines)
        );
      }

      if (selectedOptions.length > 0) {
        filteredIds = intersection(
          filteredIds,
          reducerOptions(selectedOptions, localState.byOptions)
        );
      }

      return filteredIds;
    },
    byId: (localState: FlightsState): FlightsMap => localState.byId,
  },
  actions: {
    init({ commit, rootGetters }: ActionContext<FlightsState, RootState>, flights: Flight[]) {
      const allIds: string[] = [];

      const byId: FlightsMap = {};

      const byAirlines: IsomorphicObject = rootGetters['filters/airlinesArray']
        .reduce((map: IsomorphicObject, airline: FilterOption) => ({
          ...map,
          [airline.code]: [],
        }), {});

      const byOptions: IsomorphicObject = {
        onlyDirect: [],
        onlyWithBaggage: [],
        onlyReturnable: [],
      };

      flights.forEach((flight: Flight) => {
        allIds.push(flight.id);

        byId[flight.id] = flight;

        byAirlines[flight.validating_carrier].push(flight.id);

        if (!flight.services['0PC']) {
          byOptions.onlyWithBaggage.push(flight.id);
        }

        if (flight.itineraries[0][0].stops === 0) {
          byOptions.onlyDirect.push(flight.id);
        }

        if (flight.refundable) {
          byOptions.onlyReturnable.push(flight.id);
        }
      });

      commit('SET_FLIGHTS', {
        allIds,
        byId,
        byAirlines,
        byOptions,
      });
    },
  },
  mutations: {
    SET_FLIGHTS(
      localState: FlightsState,
      {
        allIds,
        byId,
        byAirlines,
        byOptions,
      }: {
        allIds: string[];
        byId: FlightsMap;
        byAirlines: IsomorphicObject;
        byOptions: IsomorphicObject;
      },
    ) {
      localState.allIds = allIds;
      localState.byId = byId;
      localState.byAirlines = byAirlines;
      localState.byOptions = byOptions;
    },
  },
};
