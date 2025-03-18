"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useCartStore } from "@/store/CartProvider";
import { CartAction } from "../CartAction/CartAction";

type SingleProductProps = {
  product: ProductType;
};

export function SingleProduct({ product }: SingleProductProps) {
  const cart = useCartStore((st) => st.cart);
  const itemInCart = cart.find((prod) => prod.id === product.id);
  const qnt = itemInCart?.qty || 0;

  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "var(--mui-palette-primary-main)",
        maxWidth: "300px",
      }}
    >
      <CardContent
        sx={{
          display: "grid",
          alignContent: "space-between",
          height: "100%",
        }}
      >
        <Typography
          variant="h6"
          color="primary"
          sx={{
            textWrap: "balance",
          }}
        >
          {product.name}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textWrap: "balance",
          }}
        >
          {product.desc}
        </Typography>

        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Typography variant="subtitle2">Price: </Typography>
          <Typography color="success" variant="body1">
            $ {product.price}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <CartAction prodId={product.id} price={product.price} cartQnt={qnt} />
      </CardActions>
    </Card>
  );
}
