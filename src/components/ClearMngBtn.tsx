"use client";

import { Box, Button } from "@mui/material";

type ClearMngBtnProps = {
  handleClear(): void;
  title: string;
  isShow: boolean;
};

export function ClearMngBtn({ handleClear, title, isShow }: ClearMngBtnProps) {
  return (
    <>
      {isShow ? (
        <Button
          variant="outlined"
          fullWidth
          sx={{
            height: "40px",
            minWidth: "100px",
            maxWidth: { md: "296px" },
            width: { xs: "100%", sm: "287px", md: "100%" },
          }}
          size="small"
          onClick={handleClear}
        >
          {title}
        </Button>
      ) : (
        <Box
          sx={{
            display: { xs: "none", sm: "inline-flex", md: "none" },
            minWidth: "100px",
            maxWidth: { md: "296px" },
            width: { xs: "100%", sm: "314px", md: "100%" },
          }}
        ></Box>
      )}
    </>
  );
}
