"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { Products } from "@/components/Products/Products";
import { Sorting } from "@/components/Sorting/Sorting";
import { fetchProducts } from "@/lib/apiReq";
import { getSortQuery } from "@/utils/utils";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState, useTransition } from "react";

type ProductsPageProps = {
  initProducts: ProductType[];
};

export function ProductsPage({ initProducts }: ProductsPageProps) {
  const [initLoad, setInitLoad] = useState(true);
  const [products, setProducts] = useState(initProducts);

  const [sort, setSort] = useState<SortState>({
    byPrice: "",
    byName: "",
  });

  const [isPending, startTrans] = useTransition();

  useEffect(() => {
    if (initLoad) {
      setInitLoad(false);
      return;
    }
    const sortBy = getSortQuery(sort);
    startTrans(async () => {
      const res = (await fetchProducts(sortBy)) as string;
      const data = JSON.parse(res) as FetchRes<ProductType[]>;
      if (data.success) startTrans(() => setProducts(data.products));
    });
  }, [sort.byName, sort.byPrice]);
  return (
    <PageWrapper>
      <Sorting sort={sort} setSort={setSort} />
      {isPending && <CircularProgress />}
      {products.length ? (
        <Products products={products} />
      ) : (
        <Typography variant="h5">No products found</Typography>
      )}
    </PageWrapper>
  );
}
