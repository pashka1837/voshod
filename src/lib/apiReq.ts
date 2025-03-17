"use server";

import { products } from "@/db/db";

export async function fetchProducts(q?: string) {
  return new Promise((res) => {
    setTimeout(() => {
      res(JSON.stringify({ products, success: true }));
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
