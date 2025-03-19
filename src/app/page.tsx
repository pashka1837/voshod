import { fetchProductsCached } from "@/lib/apiReq";
import { Metadata } from "next";
import { ProductsPage } from "./components/ProductsPage";
import { getParams } from "@/utils/utils";
import Typography from "@mui/material/Typography";

export const metadata: Metadata = {
  title: "Products | Sunrise Store",
};

type HomeProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const sParams = await searchParams;
  const { paramsSort, paramsFilter } = getParams(sParams);
  const res = await fetchProductsCached(paramsSort, paramsFilter, 1000);

  const resData = JSON.parse(res) as FetchRes<ProductType[]>;
  if (!resData.success)
    return (
      <Typography color="danger" variant="h5">
        Some error happend
      </Typography>
    );

  return (
    <ProductsPage
      initProducts={resData.data}
      paramsFilter={paramsFilter}
      paramsSort={paramsSort}
    />
  );
}
