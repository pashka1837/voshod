import { Products } from "@/components/Products/Products";
import { fetchProducts } from "@/lib/apiReq";
import { Box, Stack } from "@mui/material";
import { Metadata } from "next";
import { ProductsPage } from "./components/ProductsPage";

export const metadata: Metadata = {
  title: "Products | Sunrise Store",
};

export default async function Home() {
  const res: any = await fetchProducts(null);
  const data = JSON.parse(res) as FetchRes<ProductType[]>;
  if (!data.success) return null;
  console.log(data);

  return <ProductsPage initProducts={data.products} />;
}
