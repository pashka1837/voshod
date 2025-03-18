"use cleint";

import { initSort, nameSort, priceSort } from "@/constants";
import { Dispatch, SetStateAction } from "react";
import { SortingSelect } from "./SortingSelect";
import { SelectChangeEvent } from "@mui/material/Select";
import { ManagmentWrapper } from "../ManagmentWrap";
import { ClearMngBtn } from "../ClearMngBtn";

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

  function handleClear() {
    setSort(initSort);
  }

  const isStateChanged = JSON.stringify(initSort) !== JSON.stringify(sort);

  return (
    <ManagmentWrapper>
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

      <ClearMngBtn
        isShow={isStateChanged}
        handleClear={handleClear}
        title="Clear sorting"
      />
    </ManagmentWrapper>
  );
}
