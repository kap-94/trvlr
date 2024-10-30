import React from "react";
import classNames from "classnames/bind";
import { Typography } from "@/app/_components";
import { TypographyVariant } from "../Typography/interfaces";
import styles from "./SectionHeading.module.scss";

const cx = classNames.bind(styles);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  align?: "left" | "center" | "right";
  titleVariant?: TypographyVariant; // Nueva propiedad para la variante del título
  subtitleVariant?: TypographyVariant; // Nueva propiedad para la variante del subtítulo
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
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
      className={cx("section-heading", className, `section-heading--${align}`)}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          fontWeight={700}
          className={cx("section-heading__eyebrow")}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant={titleVariant}
        className={cx("section-heading__title")}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant={subtitleVariant}
          className={cx("section-heading__subtitle")}
          fontWeight={500}
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default SectionHeading;
