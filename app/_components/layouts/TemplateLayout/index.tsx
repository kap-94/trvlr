import { FC } from "react";
import classNames from "classnames/bind";
import { LayoutProps } from "../interfaces";
import styles from "./TemplateLayout.module.scss";

const cx = classNames.bind(styles);

export const TemplateLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={cx("layout")}>
      <main className={cx("main")}>{children}</main>
    </div>
  );
};
