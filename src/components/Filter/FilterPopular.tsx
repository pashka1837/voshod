"use client";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Dispatch, SetStateAction } from "react";

type FilterPopularProps = {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
};

export function FilterPopular({ filter, setFilter }: FilterPopularProps) {
  function handlePopularCheck(
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) {
    setFilter({ ...filter, isPopular: checked });
  }
  return (
    <FormControlLabel
      sx={{ width: "100%" }}
      control={
        <Checkbox checked={filter.isPopular} onChange={handlePopularCheck} />
      }
      label="Only popular"
    />
  );
}
