import localFont from "next/font/local";

export const generalSansFonts = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    {
      path: "./general-sans/GeneralSans-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./general-sans/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./general-sans/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./general-sans/GeneralSans-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./general-sans/GeneralSans-Semibold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./general-sans/GeneralSans-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});
