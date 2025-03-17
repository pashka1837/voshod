import { useWaitLocalSt } from "@/lib/hooks";
import { useCartStore } from "@/store/CartProvider";
import { Button, Stack } from "@mui/material";
import { useMemo } from "react";

type CartBtnProps = {
  prodId: string;
  price: number;
};

export function CartBtn({ prodId, price }: CartBtnProps) {
  console.log(prodId);
  const load = useWaitLocalSt();

  const { cart, addProdCart, removeProdCart, changeQnt } = useCartStore(
    (st) => st
  );

  const cartQnt = useMemo(() => {
    const itemInCart = cart.find((prod) => prod.id === prodId);
    return itemInCart?.qty || 0;
  }, [cart, prodId]);

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

  //   if (load) return <CircularProgress size={"10px"} color="primary" />;

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
      {/* {cartQnt ? (
        <>
          <Button onClick={() => changeCartQnt()}>+1</Button>
          <Button onClick={() => changeCartQnt(false)}>
            {cartQnt > 1 ? "-1" : "Remove"}
          </Button>
        </>
      ) : (
        <Button variant="outlined" onClick={addToCart}>
          Add to Cart
        </Button>
      )} */}
    </Stack>
  );
}
