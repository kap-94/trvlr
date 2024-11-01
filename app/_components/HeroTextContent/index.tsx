import React from "react";
import { Button, Typography } from "@/app/_components";
import classnames from "classnames/bind";
import styles from "./HeroTextContent.module.scss";

const cx = classnames.bind(styles);

interface HeroTextContentProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
}

const HeroTextContent: React.FC<HeroTextContentProps> = ({
  eyebrow,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <div className={cx("hero-text-content")}>
      {eyebrow && (
        <Typography
          variant="h5"
          color="white"
          className={cx("hero-text-content__eyebrow")}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        variant="h1"
        color="white"
        className={cx("hero-text-content__title")}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="h5"
          color="white"
          className={cx("hero-text-content__subtitle")}
        >
          {subtitle}
        </Typography>
      )}

      {buttonText && (
        <Button className={cx("hero-text-content__button")}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default HeroTextContent;
