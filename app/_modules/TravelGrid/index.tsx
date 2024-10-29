import React from "react";
import classNames from "classnames/bind";
import { SectionHeading, LayoutVariantsGrid } from "@/app/_components";
import { LayoutVariantsGridItem } from "@/app/_components/LayoutVariantsGrid";
import styles from "./TravelGrid.module.scss";

const cx = classNames.bind(styles);

interface TravelGridProps {
  items: LayoutVariantsGridItem[];
  variant: "variant1" | "variant2" | "variant3";
}

const TravelGrid: React.FC<TravelGridProps> = ({ items, variant }) => {
  return (
    <section className={cx("travel-categories")}>
      <SectionHeading
        title="Trending Now"
        subtitle="Discover the latest blog posts"
        className={cx("travel-categories__heading")}
      />

      <div className={cx("travel-categories__content")}>
        <LayoutVariantsGrid items={items} variant={variant} />
      </div>
    </section>
  );
};

export default TravelGrid;
