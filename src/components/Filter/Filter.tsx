"use client";

import { Dispatch, memo, SetStateAction } from "react";
import { MySlider } from "./MySlider";
import { FilterPopular } from "./FilterPopular";
import { ManagmentWrapper } from "../ManagmentWrap";
import { initFilter } from "@/constants";
import { ClearMngBtn } from "../ClearMngBtn";

type FilterProps = {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
};

export const Filter = memo(function Filter({ filter, setFilter }: FilterProps) {
  const isStateChanged = JSON.stringify(initFilter) !== JSON.stringify(filter);

  function handleClear() {
    setFilter(initFilter);
  }

  return (
    <ManagmentWrapper>
      <MySlider filter={filter} setFilter={setFilter} />
      <FilterPopular filter={filter} setFilter={setFilter} />

      <ClearMngBtn
        isShow={isStateChanged}
        handleClear={handleClear}
        title="Clear filters"
      />
    </ManagmentWrapper>
  );
});
