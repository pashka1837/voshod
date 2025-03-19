"use client";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { CartAction } from "../CartAction/CartAction";
import { memo } from "react";

type ProductProps = {
  product: ProductType;
  cartQnt: number;
};

export const Product = memo(function Product({
  product,
  cartQnt,
}: ProductProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "var(--mui-palette-primary-main)",
        height: "180px",
        maxWidth: { xs: "380px", sm: "200px" },
        minWidth: "180px",
        width: "100%",
      }}
    >
      <Link href={`/${product.id}`} passHref legacyBehavior>
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
              <Typography color="success" variant="body1">
                $ {product.price}
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Typography variant="subtitle2">Popular: </Typography>
              <Typography color="success" variant="body1">
                {`${product.popular}`}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions>
        <CartAction
          prodId={product.id}
          price={product.price}
          cartQnt={cartQnt}
        />
      </CardActions>
    </Card>
  );
});
