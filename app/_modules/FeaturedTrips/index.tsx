"use client";
import { FC } from "react";
import classnames from "classnames/bind";
import { featuredTripsData } from "@/app/_lib/data";
import { ResponsiveGrid, TripCard, SectionHeading } from "@/app/_components";
import styles from "./FeaturedTrips.module.scss";

const cx = classnames.bind(styles);

interface Props {
  title: string;
  subtitle: string;
}

const FeaturedTrips: FC<Props> = ({ title, subtitle }) => {
  return (
    <section className={cx("featured-trips")} id={"featured-trips"}>
      <SectionHeading
        title={title}
        subtitle="Discover handpicked journeys tailored for the ultimate travel experience."
        className={cx("featured-trips__heading")}
      />

      <div className={cx("featured-trips__content")}>
        <ResponsiveGrid columns={3}>
          {featuredTripsData.map((trip, id) => (
            <TripCard
              key={trip.title}
              className={id === 0 ? "featured-trips__first-item" : ""}
              data={trip}
            />
          ))}
        </ResponsiveGrid>
      </div>
    </section>
  );
};

export default FeaturedTrips;
