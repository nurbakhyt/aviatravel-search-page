import * as data from '@/data/results.json';

export const loadAirlines: () => Promise<IsomorphicObject> = () => Promise.resolve(data.airlines);

export const loadFlights: () => Promise<Flight[]> = () => Promise.resolve(data.flights);
