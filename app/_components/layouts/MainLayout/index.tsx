import { FC } from "react";
import classNames from "classnames/bind";
import Head from "next/head";
import { LayoutProps } from "../interfaces";
import styles from "./MainLayout.module.scss";

const cx = classNames.bind(styles);

export const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={cx("layout")}>
      <Head>
        <title>Title</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cx("main")}>{children}</main>
    </div>
  );
};
