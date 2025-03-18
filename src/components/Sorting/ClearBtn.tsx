"use client";

import { initSort } from "@/constants";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type ClearBtnProps = {
  setSort: Dispatch<SetStateAction<SortState>>;
  sort: SortState;
};

export function ClearBtn({ setSort, sort }: ClearBtnProps) {
  if (!sort.byName && !sort.byPrice) return null;
  return (
    <Button
      fullWidth
      sx={{ minWidth: "100px", maxWidth: { sm: "286px" } }}
      size="small"
      onClick={() => setSort(initSort)}
    >
      Clear sorting
    </Button>
  );
}
