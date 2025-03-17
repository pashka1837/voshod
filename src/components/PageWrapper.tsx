import Box from "@mui/material/Box";
import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: { xs: 2, md: 3, xl: 6 },
        gap: "40px",
      }}
    >
      {children}
    </Box>
  );
}
