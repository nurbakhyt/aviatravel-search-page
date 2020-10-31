
declare type Flight = {
  id: string;
};

declare type FilterOption = {
  code: string;
  value: string;
};

declare type IsomorphicObject = {
  [propName: string]: string;
};

declare type FlightsState = {
  items: Flight[];
};

declare type FiltersState = {
  airlines: IsomorphicObject,
  options: IsomorphicObject,
};

declare type RootState = {
  [propName: string]: any,
};
