"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import { FooterProps } from "@/app/_types";
import CustomIcon, { IconName } from "../CustomIcon";
import { MenuList, Typography } from "@/app/_components";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const FooterClient: FC<FooterProps> = ({
  light = true,
  menuDataPrimary,
  menuDataSecondary,
  frontPageID,
  options: { logo, copyright_name },
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className={cx("footer", { "footer--dark": !light })}>
      <div className={cx("footer__top")}>
        <div className={cx("footer__logo")}>
          <Link href="/" passHref>
            {logo && (
              <Image
                src={logo.url}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            )}
          </Link>
        </div>

        <ul className={cx("footer__links")}>
          {menuDataPrimary && menuDataPrimary.length > 0 && (
            <MenuList data={menuDataPrimary} frontPageID={1} />
          )}
        </ul>

        <ul className={cx("footer__secondary-menu")}>
          {menuDataSecondary && menuDataSecondary.length > 0 && (
            <MenuList frontPageID={1} data={menuDataSecondary} />
          )}
        </ul>
      </div>

      <div
        className={cx("footer__copyright", {
          "footer__copyright--dark": !light,
        })}
      >
        <Typography variant="p2" color="white">
          &copy; {`${year} `} {copyright_name}
        </Typography>
      </div>
    </footer>
  );
};

export default FooterClient;
