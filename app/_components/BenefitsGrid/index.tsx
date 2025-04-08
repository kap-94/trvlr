import React from "react";
import classNames from "classnames/bind";
import styles from "./BenefitsGrid.module.scss";
import { Typography } from "@/app/_components";
import CustomIcon, { IconName } from "@/app/_components/CustomIcon";

const cx = classNames.bind(styles);

interface BenefitItem {
  title: string;
  description: string;
  icon: IconName;
}

interface BenefitsGridProps {
  benefits: BenefitItem[];
  className?: string;
}

const BenefitsGrid: React.FC<BenefitsGridProps> = ({ benefits, className }) => {
  return (
    <div className={cx("benefits-grid", className)}>
      <Typography
        variant="h3"
        align="center"
        className={cx("benefits-grid__title")}
      >
        Benefits of Travel
      </Typography>

      <div className={cx("benefits-grid__container")}>
        {benefits.map((benefit, index) => (
          <div key={index} className={cx("benefits-grid__item")}>
            <div className={cx("benefits-grid__icon")}>
              <CustomIcon
                icon={benefit.icon}
                width={48}
                height={48}
                // color="#286457" // Using the primary color from your example
              />
            </div>
            <Typography
              variant="h4"
              className={cx("benefits-grid__item-title")}
            >
              {benefit.title}
            </Typography>
            <Typography
              variant="p2"
              className={cx("benefits-grid__item-description")}
            >
              {benefit.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsGrid;
