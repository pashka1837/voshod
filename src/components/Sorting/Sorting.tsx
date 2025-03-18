"use cleint";

import { nameSort, priceSort } from "@/constants";
import { Dispatch, SetStateAction } from "react";
import { SortingSelect } from "./SortingSelect";
import Stack from "@mui/material/Stack";
import { SelectChangeEvent } from "@mui/material/Select";
import { ClearBtn } from "./ClearBtn";

type SortProps = {
  sort: SortState;
  setSort: Dispatch<SetStateAction<SortState>>;
};

export function Sorting({ sort, setSort }: SortProps) {
  function handleSortByName(event: SelectChangeEvent) {
    setSort({ byPrice: "", byName: event.target.value as SortDirection });
  }

  function handleSortByPrice(event: SelectChangeEvent) {
    setSort({ byName: "", byPrice: event.target.value as SortDirection });
  }
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={"flex-start"}
      spacing={2}
      sx={{ width: "100%" }}
    >
      <SortingSelect
        value={sort.byName}
        label="Sort by name"
        labelId="byName"
        sortVals={nameSort}
        onChangeFn={handleSortByName}
      />
      <SortingSelect
        value={sort.byPrice}
        label="Sort by price"
        labelId="byPrice"
        sortVals={priceSort}
        onChangeFn={handleSortByPrice}
      />
      <ClearBtn setSort={setSort} sort={sort} />
    </Stack>
  );
}
