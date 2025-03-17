"use client";

import { Box } from "@mui/material";
import { Product } from "./Product";
import { useCartStore } from "@/store/CartProvider";

type ProductsProps = {
  products: ProductType[];
};

export function Products({ products }: ProductsProps) {
  const cart = useCartStore((st) => st.cart);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(175px,200px))`,
        justifyContent: "center",
        justifyItems: "center",
        gap: { xs: "20px" },
        width: "100%",
      }}
    >
      {products.map((p) => {
        const itemInCart = cart.find((prod) => prod.id === p.id);
        return (
          <Product cartQnt={itemInCart?.qty || 0} product={p} key={p.id} />
        );
      })}
    </Box>
  );
}
