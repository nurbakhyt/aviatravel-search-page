
declare type Flight = {
  id: string;
  price: string;
  refundable: boolean;
  validating_carrier: string;
  itineraries: Array<Array<Itinerary>>;
};

declare type Itinerary = {
  stops: number;
  segments: Segment[];
  traveltime: number;
};

declare type Segment = {
  origin: string;
  dest: string;
  arr_time: string;
  dep_time: string;
  dest_code: string;
  origin_code: string;
};

declare type SegmentType = 'origin' | 'dest';

declare type DateTimeType = {
  date: string;
  time: string;
};

declare type FilterOption = {
  code: string;
  value: string;
};

declare type FilterType = 'options' | 'airlines';

declare type IsomorphicObject = {
  [propName: string]: string;
};

declare type FlightsState = {
  items: Flight[];
};

declare type FiltersState = {
  airlines: IsomorphicObject;
  options: IsomorphicObject;
  selectedAirlines: string[];
  selectedOptions: string[];
};

declare type RootState = {
  [propName: string]: any;
};
