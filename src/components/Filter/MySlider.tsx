"use client";

import { initFilter } from "@/constants";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";

type MySliderProps = {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
};

export function MySlider({ filter, setFilter }: MySliderProps) {
  function valueToText(value: number) {
    return `${value}$`;
  }

  function handlePriceRange(event: Event, newValue: number | number[]) {
    if (!Array.isArray(newValue)) return;
    console.log(newValue);
    const newMin = newValue[0];
    const newMax = newValue[1];

    if (newMax - newMin <= 1000) return;
    setFilter({ ...filter, priceMin: newValue[0], priceMax: newValue[1] });
  }
  return (
    <Stack direction={"column"} sx={{ maxWidth: "266px", width: "100%" }}>
      <Typography variant="body1">Price range</Typography>
      <Slider
        onChange={handlePriceRange}
        aria-label="price range"
        min={initFilter.priceMin}
        max={initFilter.priceMax}
        step={100}
        valueLabelDisplay="auto"
        getAriaValueText={valueToText}
        value={[filter.priceMin, filter.priceMax]}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body2"
          onClick={() =>
            setFilter({ ...filter, priceMin: initFilter.priceMin })
          }
          sx={{ cursor: "pointer" }}
        >
          {initFilter.priceMin} $
        </Typography>
        <Typography
          variant="body2"
          onClick={() =>
            setFilter({ ...filter, priceMax: initFilter.priceMax })
          }
          sx={{ cursor: "pointer" }}
        >
          {initFilter.priceMax} $
        </Typography>
      </Box>
    </Stack>
  );
}
