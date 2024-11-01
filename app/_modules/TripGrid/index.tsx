// src/components/TripGrid/TripGrid.tsx
"use client";

import { FC, useState } from "react";
import classNames from "classnames/bind";
import { TripData } from "@/app/_components/TripCard";
import { SectionHeading, TripCard, TripFilters } from "@/app/_components";
import styles from "./TripGrid.module.scss";

const cx = classNames.bind(styles);

interface TripGridProps {
  className?: string;
  trips: TripData[];
}

export const TripGrid: FC<TripGridProps> = ({ trips, className }) => {
  const [filteredTrips, setFilteredTrips] = useState<TripData[]>(trips);

  return (
    <section className={cx("trip-grid", className)}>
      <SectionHeading
        title={"Browse Our Collection of Travel Guides"}
        className={cx("trip-grid__heading")}
      />

      <TripFilters trips={trips} onFiltersChange={setFilteredTrips} />
      <div className={cx("trip-grid__container")}>
        {filteredTrips.map((trip) => (
          <div key={trip.id} className={cx("trip-grid__item")}>
            <TripCard data={trip} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TripGrid;
