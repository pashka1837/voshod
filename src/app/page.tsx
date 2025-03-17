import { Products } from "@/components/Products/Products";
import { fetchProducts } from "@/lib/apiReq";
import { Box, Stack } from "@mui/material";
import { Metadata } from "next";
import { ProductsPage } from "./components/ProductsPage";

export const metadata: Metadata = {
  title: "Products | Sunrise Store",
};

export default async function Home() {
  const res = (await fetchProducts(null)) as string;
  const resData = JSON.parse(res) as FetchRes<ProductType[]>;
  if (!resData.success) return null;

  return <ProductsPage initProducts={resData.data} />;
}
