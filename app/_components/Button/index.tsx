import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import Icon, { IconName } from "@/app/_components/CustomIcon";
import { Typography, Spinner } from "@/app/_components";
import styles from "./Button.module.scss";
import { LucideIcon, ArrowRight, Search, User } from "lucide-react";

const cx = classNames.bind(styles);

interface IconConfig {
  source: "custom" | "lucide";
  name: IconName | string;
}

export interface ButtonBaseProps {
  children: ReactNode;
  className?: string;
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  fullWidth?: boolean;
  icon?: IconConfig | IconName;
  onClick?: () => void;
  pill?: boolean;
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "accent" | "link";
  isLoading?: boolean;
}

interface LinkVariantProps extends ButtonBaseProps {
  variant: "link";
  href: string;
  target: "_blank" | "_self";
  isDisabled?: never;
}

interface NonLinkVariantProps extends ButtonBaseProps {
  variant?: "primary" | "secondary" | "accent";
  href?: undefined;
  target?: undefined;
  isDisabled?: boolean;
}

export type ButtonProps = LinkVariantProps | NonLinkVariantProps;

const LUCIDE_ICONS: { [key: string]: LucideIcon } = {
  search: Search,
  user: User,
};

const renderIcon = (
  iconProp: IconConfig | IconName | undefined,
  className: string,
  size: { height: number; width: number }
) => {
  if (!iconProp) return null;

  if (typeof iconProp === "string") {
    return (
      <Icon
        icon={iconProp as IconName}
        height={size.height}
        width={size.width}
        className={className}
      />
    );
  }

  if (iconProp.source === "lucide") {
    const LucideIconComponent = LUCIDE_ICONS[iconProp.name];
    return LucideIconComponent ? (
      <LucideIconComponent
        className={className}
        size={size.height}
        strokeWidth={2}
      />
    ) : null;
  }

  return (
    <Icon
      icon={iconProp.name as IconName}
      height={size.height}
      width={size.width}
      className={className}
    />
  );
};

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    size = "medium",
    type = "button",
    variant = "primary",
    children,
    className = "",
    isDisabled = false,
    fullWidth = false,
    icon,
    onClick,
    pill = false,
    style,
    elevation = 0,
    href,
    isLoading = false,
    target,
  }) => {
    const actualDisabled = isDisabled || isLoading;

    const buttonClasses = cx(
      "button",
      `button--${size}`,
      `button--${variant}`,
      `button--elevation-${elevation}`,
      {
        "button--full-width": fullWidth,
        "button--pill": pill,
        "button--loading": isLoading,
      },
      className
    );

    const iconSize =
      size === "small"
        ? { height: 14, width: 14 }
        : size === "large"
        ? { height: 20, width: 20 }
        : { height: 16, width: 16 };

    if (variant === "link" && href) {
      return (
        <a
          href={href}
          className={buttonClasses}
          style={style}
          target={target}
          rel="noopener noreferrer"
        >
          <Typography
            variant="p1"
            fontFamily="raleway"
            fontWeight={800}
            className={cx("button__text")}
          >
            {children}
          </Typography>
          {isLoading ? (
            <Spinner variant="button" className={cx("button__spinner")} />
          ) : (
            renderIcon(icon, cx("button__icon"), { height: 32, width: 32 })
          )}
        </a>
      );
    }

    return (
      <button
        type={type}
        className={buttonClasses}
        style={style}
        onClick={onClick}
        disabled={actualDisabled}
        aria-busy={isLoading}
      >
        <Typography
          variant="p1"
          fontFamily="raleway"
          fontWeight={700}
          className={cx("button__text")}
        >
          {children}
        </Typography>
        {isLoading ? (
          <Spinner variant="button" className={cx("button__spinner")} />
        ) : (
          renderIcon(icon, cx("button__icon"), iconSize)
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
