"use client";
import { FC, useState, useEffect } from "react";
import classNames from "classnames/bind";
import { TripCardView } from "@/app/_types";
import { TripCard, TripFilters } from "@/app/_components";
import styles from "./TripGrid.module.scss";

const cx = classNames.bind(styles);

interface TripGridProps {
  className?: string;
  trips: TripCardView[];
}

export const TripGrid: FC<TripGridProps> = ({ trips, className }) => {
  const [filteredTrips, setFilteredTrips] = useState<TripCardView[]>(trips);

  // Actualizar filteredTrips cuando cambian los trips
  useEffect(() => {
    setFilteredTrips(trips);
  }, [trips]);

  return (
    <section className={cx("trip-grid", className)}>
      <TripFilters trips={trips} onFiltersChange={setFilteredTrips} />

      <div className={cx("trip-grid__container")}>
        {filteredTrips.map((trip, index) => (
          <div key={trip.id} className={cx("trip-grid__item")}>
            <TripCard data={trip} isPriority={index < 4} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TripGrid;
