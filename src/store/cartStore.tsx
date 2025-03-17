import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

export type CartState = {
  cart: CartProductType[];
};

export type CartActions = {
  addProdCart: (newProd: CartProductType) => void;
  removeProdCart: (id: string) => void;
};

export type CartStore = CartState & CartActions;

export const createCartStore = () =>
  create<CartStore>()(
    persist(
      (set, get) => ({
        cart: get()?.cart || [],
        addProdCart: (newProd) => set({ cart: [...get().cart, newProd] }),

        removeProdCart: (remId) =>
          set({ cart: get().cart.filter((prod) => prod.id !== remId) }),
      }),
      {
        name: "productsCart",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
