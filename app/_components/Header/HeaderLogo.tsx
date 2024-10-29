import Link from "next/link";
import Image from "next/image";
import classnames from "classnames/bind";
import styles from "./HeaderLogo.module.scss";

const cx = classnames.bind(styles);

interface Logo {
  href?: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface Logos {
  defaultLogo: Logo;
  light: Logo;
  lightMobile?: Logo;
  dark?: Logo;
}

interface HeaderLogoProps {
  data: Logos;
  closeMenu: () => void;
  variant: "default" | "scrolled";
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({
  data,
  closeMenu,
  variant,
}) => {
  const { defaultLogo, light, lightMobile } = data || {};

  return (
    <Link href="/" className={cx("logo")} onClick={closeMenu}>
      {/* Logo por defecto */}
      {defaultLogo && (
        <div className={cx("logo__image", "logo__default")}>
          <Image
            src={defaultLogo.url}
            alt={defaultLogo.alt}
            width={defaultLogo.width}
            height={defaultLogo.height}
            priority
          />
        </div>
      )}

      {lightMobile && (
        <div className={cx("logo__image", "logo__light--mobile")}>
          <Image
            src={lightMobile.url}
            alt={lightMobile.alt}
            width={lightMobile.width}
            height={lightMobile.height}
            priority
          />
        </div>
      )}

      {/* Logo en estado scrolled */}
      {light && (
        <div
          className={cx("logo__image", "logo__light", {
            "logo--visible": variant === "scrolled",
            "logo--hidden": variant !== "scrolled",
          })}
        >
          <Image
            src={light.url}
            alt={light.alt}
            width={light.width}
            height={light.height}
            priority
          />
        </div>
      )}
    </Link>
  );
};

export default HeaderLogo;
