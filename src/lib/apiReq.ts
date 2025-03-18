"use server";

import { products } from "@/db/db";
import {
  createRes,
  getDataFiltered,
  getDataSorted,
  getSortQuery,
} from "@/utils/utils";
import { unstable_cache } from "next/cache";

export async function fetchProducts(
  sort: SortState | null,
  filter: FilterState | null
) {
  const sortBy = getSortQuery(sort);
  const sortedData = getDataSorted([...products], sortBy);
  const filteredData = getDataFiltered(sortedData, filter);
  const res: FetchRes<ProductType[]> = {
    data: filteredData,
    success: true,
  };

  return createRes(res, 2000);
}

export async function fetchProdById(id: string) {
  const product = products.find((p) => p.id === id);
  const res: FetchRes<ProductType> = product
    ? {
        success: true,
        data: product,
      }
    : {
        success: false,
        msg: "Product not found",
      };
  return createRes(res);
}

export const fetchProductsCached = unstable_cache(
  async (sort: SortState | null, filter: FilterState | null) =>
    await fetchProducts(sort, filter)
);
