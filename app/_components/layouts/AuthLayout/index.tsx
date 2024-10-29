import { FC } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import { AuthLayoutProps } from "../interfaces";
import styles from "./AuthLayout.module.scss";

const cx = classNames.bind(styles);

export const AuthLayout: FC<AuthLayoutProps> = ({ children, image }) => {
  return (
    <div className={cx("layout")}>
      <div className={cx("layout__left-column")}>
        <div className={cx("layout__image-container")}>
          <Image
            src={image?.url || ""}
            alt={image?.alt || ""}
            priority
            sizes="25vw"
            fill
          />
        </div>
      </div>

      <div className={cx("layout__right-column")}>{children}</div>
    </div>
  );
};
