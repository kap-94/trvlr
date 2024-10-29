import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./SocialIcons.module.scss";
import * as icons from "./assets";

const cx = classNames.bind(styles);

type SocialIconOption = "facebook" | "twitter" | "instagram" | "tiktok";

interface SocialIcon {
  link: string;
  icon: string;
  alt: string;
}

interface SocialIconsProps {
  options: SocialIconOption[];
  className?: string;
  style?: React.CSSProperties;
}

const getIconData = (option: SocialIconOption): SocialIcon | null => {
  switch (option) {
    case "facebook":
      return {
        link: "https://www.facebook.com",
        icon: icons.FacebookIcon,
        alt: "Facebook",
      };
    case "twitter":
      return {
        link: "https://www.twitter.com",
        icon: icons.TwitterIcon,
        alt: "Twitter",
      };
    case "instagram":
      return {
        link: "https://www.instagram.com",
        icon: icons.InstagramIcon,
        alt: "Instagram",
      };
    case "tiktok":
      return {
        link: "https://www.tiktok.com",
        icon: icons.TiktokIcon,
        alt: "Tiktok",
      };
    default:
      console.warn(`Icon '${option}' does not exist.`);
      return null;
  }
};

export const SocialIcons: React.FC<SocialIconsProps> = ({
  options,
  className,
  style,
}) => {
  const filteredOptions: SocialIcon[] = options.flatMap(
    (option) => getIconData(option) ?? []
  );

  return (
    <div className={cx("social-icons", className)} style={style}>
      {filteredOptions?.map(({ link, icon, alt }) => (
        <a href={link} key={alt} target="_blank" rel="noopener noreferrer">
          <div className={cx("social-icons__icon")}>
            <Image src={icon} alt={alt} width={16} height={16} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
