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
  titleVariant?: TypographyVariant; // Nueva propiedad para la variante del título
  subtitleVariant?: TypographyVariant; // Nueva propiedad para la variante del subtítulo
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  eyebrow,
  className = "",
  align = "center",
  titleVariant = "h2", // Valor por defecto "h2" para el título
  subtitleVariant = "p1", // Valor por defecto "p1" para el subtítulo
}) => {
  return (
    <div
      className={cx("section-header", className, `section-header--${align}`)}
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
