export function createRes(data: unknown, timing: number = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res(JSON.stringify(data));
    }, timing);
  });
}

export function getSortQuery(sort: SortState) {
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

export function getDataSorted(dataAr: ProductType[], sortBy: SortQuery | null) {
  switch (sortBy?.key) {
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
    case undefined:
      return dataAr;
    default:
      return dataAr;
  }
}
