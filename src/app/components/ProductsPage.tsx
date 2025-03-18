"use client";

import { ProdManagment } from "@/components/ProdManagment";
import { Products } from "@/components/Products/Products";
import { initFilter, initSort } from "@/constants";
import { fetchProducts } from "@/lib/apiReq";
import { getSortQuery } from "@/utils/utils";
import { Box, Stack, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState, useTransition } from "react";

type ProductsPageProps = {
  initProducts: ProductType[];
};

export function ProductsPage({ initProducts }: ProductsPageProps) {
  const [initLoad, setInitLoad] = useState(true);
  const [products, setProducts] = useState(initProducts);

  const [sort, setSort] = useState<SortState>(initSort);
  const [filter, setFilter] = useState<FilterState>(initFilter);

  const [isPending, startTrans] = useTransition();

  useEffect(() => {
    if (initLoad) {
      setInitLoad(false);
      return;
    }
    const sortBy = getSortQuery(sort);
    startTrans(async () => {
      const res = (await fetchProducts(sortBy)) as string;
      const resData = JSON.parse(res) as FetchRes<ProductType[]>;
      if (resData.success) startTrans(() => setProducts(resData.data));
    });
  }, [sort]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: { xs: 3, md: 4, xl: 6 },
        gap: "40px",
      }}
    >
      <ProdManagment
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={4}
        width={"100%"}
      >
        {isPending && <CircularProgress />}
        {products.length ? (
          <Products products={products} />
        ) : (
          <Typography variant="h5">No products found</Typography>
        )}
      </Stack>
    </Box>
  );
}
