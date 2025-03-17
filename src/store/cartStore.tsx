import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

export type CartState = {
  cart: CartProductType[];
};

export type CartActions = {
  addProdCart: (newProd: CartProductType) => void;
  removeProdCart: (id: string) => void;
  changeQnt: (newProd: CartProductType) => void;
};

export type CartStore = CartState & CartActions;

export const createCartStore = () =>
  create<CartStore>()(
    persist(
      (set, get) => ({
        cart: get()?.cart || [],
        addProdCart: (newProd) => {
          set({ cart: [...get().cart, newProd] });
        },
        changeQnt: (newProd) => {
          const curItemIndx = get().cart.findIndex(
            (prod) => prod.id === newProd.id
          );
          if (curItemIndx === -1) return;
          get().cart.splice(curItemIndx, 1, newProd);
          set({ cart: [...get().cart] });
        },
        removeProdCart: (remId) =>
          set({ cart: get().cart.filter((prod) => prod.id !== remId) }),
      }),
      {
        name: "productsCart",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
