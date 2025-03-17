import { AppBar } from "@mui/material";
import { Cart } from "../Cart/Cart";

export function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        height: "50px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Cart />
    </AppBar>
  );
}
