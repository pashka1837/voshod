"use client";

import { useWaitLocalSt } from "@/lib/hooks";
import { useCartStore } from "@/store/CartProvider";
import { memo } from "react";
import { CartBtn } from "./CartBtn";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type CartActionProps = {
  prodId: string;
  price: number;
  cartQnt: number;
};

export const CartAction = memo(function CartAction({
  prodId,
  price,
  cartQnt,
}: CartActionProps) {
  const load = useWaitLocalSt();
  const addProdCart = useCartStore((st) => st.addProdCart);
  const removeProdCart = useCartStore((st) => st.removeProdCart);
  const changeQnt = useCartStore((st) => st.changeQnt);

  function addToCart() {
    addProdCart({ id: prodId, price, qty: 1 });
  }

  function changeCartQnt(add: boolean = true) {
    if (add) changeQnt({ id: prodId, price, qty: cartQnt + 1 });
    else {
      if (cartQnt === 1) removeProdCart(prodId);
      else changeQnt({ id: prodId, price, qty: cartQnt - 1 });
    }
  }

  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent={"center"}
      justifyItems={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {cartQnt ? (
        <>
          <CartBtn handleClick={changeCartQnt} desc="+1" />
          <Typography
            variant="h6"
            color="primary"
            width={"50%"}
            textAlign={"center"}
          >
            {cartQnt}
          </Typography>
          <CartBtn
            handleClick={() => changeCartQnt(false)}
            desc={cartQnt > 1 ? "-1" : "Remove"}
          />
        </>
      ) : (
        <CartBtn isLoading={load} handleClick={addToCart} desc="Add to cart" />
      )}
    </Stack>
  );
});
