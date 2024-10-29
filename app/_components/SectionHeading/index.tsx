// components/SectionHeading.tsx
import React from "react";
import classNames from "classnames/bind";
import { Typography } from "@/app/_components";
import styles from "./SectionHeading.module.scss";

const cx = classNames.bind(styles);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  align?: "left" | "center" | "right"; // Nueva propiedad para controlar la alineación
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  eyebrow,
  className = "",
  align = "center", // Valor por defecto "center"
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
      <Typography variant="h1" className={cx("section-heading__title")}>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="p1"
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
