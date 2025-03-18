"use client";

import Box from "@mui/material/Box";
import { Dispatch, SetStateAction } from "react";

type FilterProps = {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
};

export function Filter({ filter, setFilter }: FilterProps) {
  return (
    <Box
      sx={{
        display: "flex",
        direction: "column",
        width: "100%",
        maxWidth: { xs: "100%", md: "200px" },
      }}
    >
      Filter
    </Box>
  );
}
