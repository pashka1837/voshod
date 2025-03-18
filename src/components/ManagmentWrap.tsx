import { Stack } from "@mui/material";
import { memo, ReactNode } from "react";

type ManagmentWrapperProps = {
  children: ReactNode;
};

export const ManagmentWrapper = memo(function ManagmentWrapper({
  children,
}: ManagmentWrapperProps) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row", md: "column" }}
      justifyContent={"flex-start"}
      alignItems={"center"}
      spacing={2}
      sx={{ width: "100%" }}
    >
      {children}
    </Stack>
  );
});
