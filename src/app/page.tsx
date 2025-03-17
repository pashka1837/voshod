"use client";

import { useCartStore } from "@/store/CartProvider";
import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const store = useCartStore((st) => st);
  const [d, setD] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((d) => {
        {
          console.log(d);
          setD(d.products);
        }
      });
  }, []);
  return (
    <div>
      {d.length &&
        d.map((pro) => (
          <Stack direction={"row"} spacing={2} key={pro.id}>
            <h2>{pro.name}</h2>
            <button
              onClick={() => {
                if (store)
                  store.addProdCart({
                    id: pro.id,
                    price: Number(pro.price),
                    qty: 1,
                  });
              }}
            >
              add
            </button>
            <button
              onClick={() => {
                if (store) store.removeProdCart(pro.id);
              }}
            >
              rem
            </button>
          </Stack>
        ))}
    </div>
  );
}
