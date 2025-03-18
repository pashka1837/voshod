"use client";

import { useWaitLocalSt } from "@/lib/hooks";
import { useCartStore } from "@/store/CartProvider";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Stack, Typography, CircularProgress } from "@mui/material";
import { useMemo } from "react";

export function Cart() {
  const load = useWaitLocalSt();

  const cart = useCartStore((st) => st.cart);
  const total = useMemo(() => {
    return cart.reduce((acc, curVal) => acc + curVal.price * curVal.qty, 0);
  }, [cart]);

  return (
    <>
      {load ? (
        <CircularProgress size={"20px"} color="warning" />
      ) : (
        <Stack direction={"row"} spacing={1}>
          <ShoppingCartOutlinedIcon />
          <Typography>$ {total}</Typography>
        </Stack>
      )}
    </>
  );
}
