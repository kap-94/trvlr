import React from "react";
import classNames from "classnames/bind";
import { Typography } from "@/app/_components";
import { TypographyVariant } from "../Typography/interfaces";
import styles from "./SectionHeader.module.scss";

const cx = classNames.bind(styles);

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  align?: "left" | "center" | "right";
  titleVariant?: TypographyVariant;
  subtitleVariant?: TypographyVariant;
  style?:
    | "minimal"
    | "accent"
    | "stack"
    | "gradient"
    | "dots"
    | "split"
    | "bracket"
    | "layered"
    | "minimal-plus"
    | "corner"
    | "corner-stack"
    | "geometric-frames"
    | "layered-corners"
    | "modern-grid"
    | "floating-elements"
    | "dynamic-lines"
    | "stacked-layers"
    | "geometric-minimal";
  accentColor?: string; // Para personalizar el color de acento
  gradientColors?: {
    start: string;
    end: string;
  };
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  eyebrow,
  className = "",
  align = "center",
  titleVariant = "h2",
  subtitleVariant = "p1",
  style,
  accentColor,
  gradientColors,
}) => {
  const headerStyle = {
    "--accent-color": accentColor,
    "--gradient-start": gradientColors?.start,
    "--gradient-end": gradientColors?.end,
  } as React.CSSProperties;

  return (
    <div
      className={cx(
        "section-header",
        `section-header--${align}`,
        style && `section-header--style-${style}`,
        className
      )}
      style={headerStyle}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          fontWeight={700}
          className={cx("section-header__eyebrow")}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant={titleVariant}
        className={cx("section-header__title")}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant={subtitleVariant}
          className={cx("section-header__subtitle")}
          fontWeight={500}
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default SectionHeader;
