import React from "react";
import classNames from "classnames/bind";
import styles from "./FeaturedCard.module.scss";
import { Typography } from "@/app/_components";

const cx = classNames.bind(styles);

interface FeaturedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={cx("feature-card")}>
      <div className={cx("feature-card__header")}>
        <div className={cx("feature-card__icon")}>{icon}</div>
        <Typography variant="p1" className={cx("feature-card__title")}>
          {title}
        </Typography>
      </div>
      <Typography variant="p2" className={cx("feature-card__description")}>
        {description}
      </Typography>
    </div>
  );
};

export default FeaturedCard;
