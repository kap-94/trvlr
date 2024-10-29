"use client";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import CustomIcon, { IconName } from "../CustomIcon";
import { MenuList, Typography } from "@/app/_components";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

interface Icon {
  icon: string;
  alt: string;
  width: number;
  height: number;
}

interface Logo {
  url: string;
  alt: string;
  width: number;
  height: number;
}

interface SocialLink {
  site: string;
  icon: IconName;
  link: string;
}

interface FooterOptions {
  copyright_name: string;
  copyright_french: string;
  logo: Logo;
  social_links: SocialLink[];
}

export interface FooterProps {
  light?: boolean;
  footerMenuData: any[];
  frontPageID: string;
  options: FooterOptions;
}

const Footer: FC<FooterProps> = ({
  light = true,
  footerMenuData,
  frontPageID,
  options: { logo, social_links, copyright_name, copyright_french },
}) => {
  const year = new Date().getFullYear();

  // Render social links
  const socialLinks = social_links?.map((link, i) => (
    <Link key={i} href={link.link} target="_blank" rel="noreferrer">
      <CustomIcon icon={link.icon} width={24} height={24} color="white" />
    </Link>
  ));

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
          {footerMenuData.length > 0 && (
            <MenuList
              data={footerMenuData.map(({ icon, ...rest }) => rest)}
              frontPageID={1}
            />
          )}
        </ul>

        <ul className={cx("footer__icons")}>{socialLinks}</ul>
      </div>

      <div
        className={cx("footer__copyright", {
          "footer__copyright--dark": !light,
        })}
      >
        <Typography variant="p2" color="white">
          {" "}
          &copy; {`${year} `} {copyright_name}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
