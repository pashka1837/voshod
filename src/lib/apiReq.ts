"use server";

import { products } from "@/db/db";
import { createRes, getDataSorted } from "@/utils/utils";

export async function fetchProducts(sortBy: SortQuery | null) {
  const sortedData = getDataSorted(products, sortBy);
  const res: FetchRes<ProductType[]> = {
    data: sortedData,
    success: true,
  };

  return createRes(res);
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
