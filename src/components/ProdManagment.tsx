import Divider from "@mui/material/Divider";
import { Filter } from "./Filter/Filter";
import { Sorting } from "./Sorting/Sorting";
import Box from "@mui/material/Box";
import { Dispatch, SetStateAction } from "react";

type ProdManagmentProps = {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
  sort: SortState;
  setSort: Dispatch<SetStateAction<SortState>>;
};

export function ProdManagment({
  filter,
  setFilter,
  sort,
  setSort,
}: ProdManagmentProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: { xs: "100%", md: "296px" },
        gap: "20px",
      }}
    >
      <Filter setFilter={setFilter} filter={filter} />
      <Divider sx={{ width: "100%" }} />
      <Sorting sort={sort} setSort={setSort} />
    </Box>
  );
}
