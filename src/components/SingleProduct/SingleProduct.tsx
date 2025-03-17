"use client";

import { useCartStore } from "@/store/CartProvider";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { CartBtn } from "./CartBtn";

type SingleProductProps = {
  product: ProductType;
};

export function SingleProduct({ product }: SingleProductProps) {
  console.log("product", product.name);
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "var(--mui-palette-primary-main)",
        height: "170px",
        width: { xs: "175px", sm: "200px" },
      }}
    >
      <Link href={"/"} passHref legacyBehavior>
        <CardActionArea sx={{ height: "70%" }}>
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

            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Typography variant="subtitle2">Price: </Typography>
              <Typography variant="body1">$ {product.price}</Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions>
        <CartBtn prodId={product.id} price={product.price} />
      </CardActions>
    </Card>
  );
}
