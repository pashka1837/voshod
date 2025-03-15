"use client";

import { useCartStore } from "@/store/CartProvider";
import { useEffect, useState } from "react";

export default function Home() {
  const { removeProdCart, addProdCart, cart } = useCartStore((st) => st);
  const [d, setD] = useState<any[]>([]);
  console.log("cart", cart);
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
          <div key={pro.id}>
            <h2>{pro.name}</h2>
            <button
              onClick={() => addProdCart({ id: pro.id, price: pro.price })}
            >
              add
            </button>
          </div>
        ))}
    </div>
  );
}
