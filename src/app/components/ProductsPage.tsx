"use client";

import { Filter } from "@/components/Filter/Filter";
import { PageWrapper } from "@/components/PageWrapper";
import { Products } from "@/components/Products/Products";
import { Sorting } from "@/components/Sorting/Sorting";
import { fetchProducts } from "@/lib/apiReq";
import { getSortQuery } from "@/utils/utils";
import { Box, Stack, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState, useTransition } from "react";

type ProductsPageProps = {
  initProducts: ProductType[];
};
const initSort: SortState = {
  byPrice: "",
  byName: "",
};

const initFilter: FilterState = {
  priceMax: null,
  priceMin: null,
  isPopular: false,
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
  }, [sort, filter]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: { xs: 3, md: 4, xl: 6 },
        gap: "20px",
      }}
    >
      <Filter setFilter={setFilter} filter={filter} />
      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={4}
        width={"100%"}
      >
        <Sorting sort={sort} setSort={setSort} />
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
