export function createRes(
  data: unknown,
  timing: number = 1000
): Promise<string> {
  return new Promise((res) => {
    setTimeout(() => {
      res(JSON.stringify(data));
    }, timing);
  });
}

export function getSortQuery(sort: SortState | null) {
  if (!sort) return null;
  for (const key in sort) {
    if (sort[key as keyof SortState]) {
      return {
        key: key as keyof SortState,
        value: sort[key as keyof SortState] as SortDirection,
      };
    }
  }
  return null;
}

export function getParams(searchParams: { [key: string]: string | undefined }) {
  const paramsSort = JSON.parse(
    searchParams["sort"] || "null"
  ) as SortState | null;
  const paramsFilter = JSON.parse(
    searchParams["filter"] || "null"
  ) as FilterState | null;

  return {
    paramsSort,
    paramsFilter,
  };
}

export function getDataSorted(dataAr: ProductType[], sortBy: SortQuery | null) {
  if (!sortBy) return dataAr;
  switch (sortBy.key) {
    case "byPrice":
      return dataAr.sort((a, b) => {
        if (sortBy.value === "ASC") return a.price - b.price;
        return b.price - a.price;
      });
    case "byName":
      return dataAr.sort((a, b) => {
        if (sortBy.value === "DESC") return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
      });
    default:
      return dataAr;
  }
}

export function getDataFiltered(
  dataAr: ProductType[],
  filter: FilterState | null
) {
  if (!filter) return dataAr;
  for (const key in filter) {
    switch (key) {
      case "isPopular":
        if (filter[key]) dataAr = dataAr.filter((d) => d.popular);
      case "priceMin":
        dataAr = dataAr.filter((d) => d.price >= filter["priceMin"]);
      case "priceMax":
        dataAr = dataAr.filter((d) => d.price <= filter["priceMax"]);
      default:
        break;
    }
  }
  return dataAr;
}
