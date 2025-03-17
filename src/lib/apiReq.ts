"use server";

import { products } from "@/db/db";
import { getDataSorted } from "@/utils/utils";

export async function fetchProducts(sortBy: SortQuery | null) {
  const sortedData = getDataSorted(products, sortBy);

  return new Promise((res) => {
    setTimeout(() => {
      res(JSON.stringify({ products: sortedData, success: true }));
    }, 1000);
  });
}

// export async function fetchProducts(query?: string) {
//   console.log("query", query);
//   try {
//     const res = await fetch(`${baseUrl}/products`);
//     if (!res.ok)
//       return {
//         message: "Network error, try again",
//         success: false,
//       };
//     const data = await res.json();
//     return {
//       success: true,
//       data,
//     };
//   } catch (e: any) {
//     console.error(e);
//     return {
//       message: "Some error, try again",
//       success: false,
//     };
//   }
// }
