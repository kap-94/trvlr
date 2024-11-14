import React from "react";
import classNames from "classnames/bind";
import { LayoutVariantsGridItem } from "@/app/_types";
import { SectionHeader, LayoutVariantsGrid } from "@/app/_components";
import styles from "./TravelGrid.module.scss";

const cx = classNames.bind(styles);

interface TravelGridProps {
  items: LayoutVariantsGridItem[];
  variant: "variant1" | "variant2" | "variant3";
}

const TravelGrid: React.FC<TravelGridProps> = ({ items, variant }) => {
  return (
    <section className={cx("travel-grid")}>
      <SectionHeader
        title="When Night Falls"
        subtitle="Discover the enchanting transformation of city streets at night"
        className={cx("travel-grid__heading")}
      />

      <div className={cx("travel-grid__content")}>
        <LayoutVariantsGrid items={items} variant={variant} />
      </div>
    </section>
  );
};

export default TravelGrid;
