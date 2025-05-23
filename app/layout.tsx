import type { Metadata } from "next";
import classnames from "classnames/bind";
import "@/app/_styles/globals.scss";
import { raleway } from "@/app/_fonts";
import { Header, Footer } from "@/app/_components";
import styles from "./layout.module.scss";

const cx = classnames.bind(styles);

export const metadata: Metadata = {
  title: "Trvlr",
  description: "A web page for those who want to explore the world",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vbj3fhz.css" />
      </head>
      <body className={cx(raleway.className, "layout")}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
