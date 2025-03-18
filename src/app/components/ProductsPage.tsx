"use client";

import { ProdManagment } from "@/components/ProdManagment";
import { Products } from "@/components/Products/Products";
import { initFilter, initSort } from "@/constants";
import { fetchProductsCached } from "@/lib/apiReq";
import { Box, Stack, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

type ProductsPageProps = {
  initProducts: ProductType[];
  paramsSort: SortState | null;
  paramsFilter: FilterState | null;
};

export function ProductsPage({
  initProducts,
  paramsSort,
  paramsFilter,
}: ProductsPageProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const [initLoad, setInitLoad] = useState(true);
  const [products, setProducts] = useState(initProducts);

  const [sort, setSort] = useState<SortState>(paramsSort || initSort);
  const [filter, setFilter] = useState<FilterState>(paramsFilter || initFilter);

  const [isPending, startTrans] = useTransition();

  useEffect(() => {
    if (initLoad) {
      setInitLoad(false);
      return;
    }
    startTrans(async () => {
      const res = (await fetchProductsCached(sort, filter)) as string;
      const resData = JSON.parse(res) as FetchRes<ProductType[]>;
      startTrans(() => {
        params.set("sort", JSON.stringify(sort));
        params.set("filter", JSON.stringify(filter));
        replace(`${pathname}?${params.toString()}`);
        if (resData.success) setProducts(resData.data);
      });
    });
  }, [sort, filter]);

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
