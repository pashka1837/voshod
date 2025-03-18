"use client";

import { initFilter } from "@/constants";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type MySliderProps = {
  filter: FilterState;
  setFilter: Dispatch<SetStateAction<FilterState>>;
};

type PriceRangeType = Omit<FilterState, "isPopular">;

export function MySlider({ filter, setFilter }: MySliderProps) {
  const [priceRange, setPriceRange] = useState<PriceRangeType>({
    ...filter,
  });

  const debounceSetFilter = useDebouncedCallback(setFilter, 500);

  function handlePriceRange(event: Event, newValue: number | number[]) {
    if (!Array.isArray(newValue)) return;
    const newMin = newValue[0];
    const newMax = newValue[1];

    if (newMax - newMin <= 1000) return;
    setPriceRange({
      priceMin: newValue[0],
      priceMax: newValue[1],
    });

    debounceSetFilter({
      ...filter,
      priceMin: newValue[0],
      priceMax: newValue[1],
    });
  }

  function handleMaxPrice() {
    if (priceRange.priceMax === initFilter.priceMax) return;
    setPriceRange({ ...priceRange, priceMax: initFilter.priceMax });
    setFilter({ ...filter, priceMax: initFilter.priceMax });
  }

  function handleMinPrice() {
    if (priceRange.priceMin === initFilter.priceMin) return;
    setPriceRange({ ...priceRange, priceMin: initFilter.priceMin });

    setFilter({ ...filter, priceMin: initFilter.priceMin });
  }

  function valueToText(value: number) {
    return `${value}$`;
  }

  return (
    <Stack direction={"column"} sx={{ width: "100%" }}>
      <Typography variant="body1">Price range</Typography>
      <Slider
        sx={{
          maxWidth: { xs: "calc(100% - 20px)", md: "276px" },
          width: "100%",
          ml: "10px!important",
        }}
        onChange={handlePriceRange}
        aria-label="price range"
        min={initFilter.priceMin}
        max={initFilter.priceMax}
        step={100}
        valueLabelDisplay="auto"
        getAriaValueText={valueToText}
        value={[priceRange.priceMin, priceRange.priceMax]}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body2"
          onClick={handleMinPrice}
          sx={{ cursor: "pointer" }}
        >
          {initFilter.priceMin} $
        </Typography>
        <Typography
          variant="body2"
          onClick={handleMaxPrice}
          sx={{ cursor: "pointer" }}
        >
          {initFilter.priceMax} $
        </Typography>
      </Box>
    </Stack>
  );
}
