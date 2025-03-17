import { useWaitLocalSt } from "@/lib/hooks";
import { useCartStore } from "@/store/CartProvider";
import { Button, Stack, Typography } from "@mui/material";
import { memo } from "react";

type CartBtnsProps = {
  prodId: string;
  price: number;
  cartQnt: number;
};

export const CartBtns = memo(function CartBtns({
  prodId,
  price,
  cartQnt,
}: CartBtnsProps) {
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
          <Button
            variant="outlined"
            onClick={() => changeCartQnt()}
            sx={{ width: "100%" }}
          >
            +1
          </Button>
          <Typography
            variant="h6"
            color="primary"
            width={"50%"}
            textAlign={"center"}
          >
            {cartQnt}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => changeCartQnt(false)}
            sx={{ width: "100%" }}
          >
            {cartQnt > 1 ? "-1" : "Remove"}
          </Button>
        </>
      ) : (
        <Button
          loading={load}
          variant="outlined"
          onClick={addToCart}
          sx={{ width: "100%" }}
        >
          Add to Cart
        </Button>
      )}
    </Stack>
  );
});
