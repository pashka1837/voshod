type CartProductType = {
  id: string;
  price: number;
  qty: number;
};

type ProductType = {
  id: string;
  name: string;
  price: number;
  popular: boolean;
};

type FetchRes<K> =
  | {
      success: true;
      products: K;
    }
  | {
      success: false;
      msg: string;
    };
