"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { SingleProduct } from "../SingleProduct/SingleProduct";
import { useCartStore } from "@/store/CartProvider";

type ProductsProps = {
  initProducts: ProductType[];
};

export function Products({ initProducts }: ProductsProps) {
  const [products, setProducts] = useState(initProducts);
  const cart = useCartStore((st) => st.cart);
  return (
    <Box
      sx={{
        p: { xs: 2, md: 3, xl: 6 },
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(175px,200px))`,
        justifyContent: "center",
        justifyItems: "center",
        gap: { xs: "20px" },
      }}
    >
      {products.map((p) => {
        const itemInCart = cart.find((prod) => prod.id === p.id);
        return (
          <SingleProduct
            cartQnt={itemInCart?.qty || 0}
            product={p}
            key={p.id}
          />
        );
      })}
    </Box>
  );
}
