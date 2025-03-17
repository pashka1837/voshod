import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/muiTheme";
import MirageServer from "@/mockServer/MirageJS";
import { CartStoreProvider } from "@/store/CartProvider";
import { NavBar } from "@/components/NavBar/NavBar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Sunrise Store",
  description: "Sunrise Super Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <MirageServer />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CartStoreProvider>
              <NavBar />
              {children}
            </CartStoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
