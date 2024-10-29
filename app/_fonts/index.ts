import { Raleway } from "next/font/google";
import localFont from "next/font/local";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const kepler = localFont({
  src: "./Kepler/Kepler-Std-Display_26108.ttf",
  display: "swap",
});
