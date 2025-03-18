export const nameSort: SortingValues[] = [
  {
    value: "DESC",
    name: "A-Z",
  },
  {
    value: "ASC",
    name: "Z-A",
  },
];

export const priceSort: SortingValues[] = [
  {
    value: "DESC",
    name: "Higher first",
  },
  {
    value: "ASC",
    name: "Lower first",
  },
];

export const initFilter: FilterState = {
  priceMin: 1000,
  priceMax: 30000,
  isPopular: false,
};

export const initSort: SortState = {
  byPrice: "",
  byName: "",
};

export const priceRangeMarks = [
  { value: initFilter.priceMin, label: `${initFilter.priceMin}$` },
  { value: initFilter.priceMax, label: `${initFilter.priceMax}$` },
];
