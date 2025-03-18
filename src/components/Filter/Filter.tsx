"use client";

import Box from "@mui/material/Box";
import { Dispatch, SetStateAction } from "react";
import { MySlider } from "./MySlider";
import { FilterPopular } from "./FilterPopular";

type FilterProps = {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
};

export function Filter({ filter, setFilter }: FilterProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "20px",
        maxWidth: { xs: "100%", md: "286px" },
      }}
    >
      <MySlider filter={filter} setFilter={setFilter} />
      <FilterPopular filter={filter} setFilter={setFilter} />
    </Box>
  );
}
