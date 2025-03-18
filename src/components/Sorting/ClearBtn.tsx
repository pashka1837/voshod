"use client";

import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type ClearBtnProps = {
  setSort: Dispatch<SetStateAction<SortState>>;
  sort: SortState;
};

export function ClearBtn({ setSort, sort }: ClearBtnProps) {
  if (!sort.byName && !sort.byPrice) return null;
  return (
    <Button onClick={() => setSort({ byName: "", byPrice: "" })}>Clear</Button>
  );
}
