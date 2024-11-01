import React from "react";
import classNames from "classnames/bind";
import { kepler, raleway } from "@/app/_fonts";
import {
  TypographyColor,
  TypographyProps,
  TypographyVariant,
} from "./interfaces";
import styles from "./Typography.module.scss";

const cx = classNames.bind(styles);

export const colorMapping: { [key in TypographyColor]: string } = {
  inherit: "inherit",
  initial: "#3A4069",
  primary: "#2a2f53",
  secondary: "222222",
  accent: "#747995",
  white: "#fdfdff",
  black: "#2c3e50",
  success: "#d2d4e1",
  warning: "#65656A",
  error: "#FF0000",
};

export const Typography: React.FC<
  TypographyProps & { fontFamily?: "raleway" | "kepler" }
> = ({
  align = "inherit",
  children,
  className = "",
  color,
  fontWeight,
  gutterBottom = false,
  paragraph = false,
  style,
  textTransform = "none",
  variant = "p1",
  fontFamily,
}) => {
  const componentMapping: {
    [key in TypographyVariant]: keyof JSX.IntrinsicElements;
  } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    p1: "p",
    p2: "p",
    p3: "p",
    button: "span",
    overline: "span",
  };

  // Mapeo de fuentes según el variant
  const fontMapping: { [key in TypographyVariant]: string } = {
    h1: kepler.className,
    h2: kepler.className,
    h3: kepler.className,
    h4: kepler.className,
    h5: raleway.className,
    p1: raleway.className,
    p2: raleway.className,
    p3: raleway.className,
    button: raleway.className,
    overline: raleway.className,
  };

  // Selecciona la fuente basada en el prop `fontFamily` o en el mapeo por defecto
  const selectedFontFamily = fontFamily
    ? fontFamily === "raleway"
      ? raleway.className
      : kepler.className
    : fontMapping[variant];

  const Component = componentMapping[variant];

  const componentClasses = cx(
    "typography",
    `typography--${variant}`,
    className,
    selectedFontFamily
  );

  const customStyle: React.CSSProperties = {
    color: color ? colorMapping[color] : undefined,
    display: paragraph ? "block" : undefined,
    marginBottom: gutterBottom ? "0.35em" : undefined,
    textAlign: align,
    textTransform,
    fontWeight,
    ...style,
  };

  return (
    <Component
      className={componentClasses}
      style={customStyle}
      // onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Typography;
