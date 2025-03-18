type CartProductType = {
  id: string;
  price: number;
  qty: number;
};

type ProductType = {
  id: string;
  name: string;
  price: number;
  desc: string;
  popular: boolean;
};

type FetchRes<K> =
  | {
      success: true;
      data: K;
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

type FilterState = {
  isPopular: boolean;
  priceMin: number;
  priceMax: number;
};
