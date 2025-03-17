import { useWaitLocalSt } from "@/lib/hooks";
import { useCartStore } from "@/store/CartProvider";
import { Button, Stack } from "@mui/material";
import { memo } from "react";

type CartBtnProps = {
  prodId: string;
  price: number;
  cartQnt: number;
};

export const CartBtn = memo(function CartBtn({
  prodId,
  price,
  cartQnt,
}: CartBtnProps) {
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
      width={"100%"}
    >
      {cartQnt ? (
        <>
          <Button onClick={() => changeCartQnt()}>+1</Button>
          <Button onClick={() => changeCartQnt(false)}>
            {cartQnt > 1 ? "-1" : "Remove"}
          </Button>
        </>
      ) : (
        <Button loading={load} variant="outlined" onClick={addToCart}>
          Add to Cart
        </Button>
      )}
    </Stack>
  );
});
