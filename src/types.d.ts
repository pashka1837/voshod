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

type SortDirection = "ASC" | "DESC";

type SortingValues = {
  value: SortDirection;
  name: string;
};

type SortState = {
  byPrice: SortDirection | "";
  byName: SortDirection | "";
};

type SortQuery = {
  key: keyof SortState;
  value: SortDirection;
};
