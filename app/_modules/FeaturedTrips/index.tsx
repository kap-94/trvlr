import { FC } from "react";
import classnames from "classnames/bind";
import { TripCardView } from "@/app/_types";
import {
  ResponsiveGrid,
  FeaturedTripCard,
  SectionHeader,
} from "@/app/_components";
import styles from "./FeaturedTrips.module.scss";

const cx = classnames.bind(styles);

interface Props {
  trips: TripCardView[];
}

const FeaturedTrips: FC<Props> = ({ trips }) => {
  return (
    <section className={cx("featured-trips")} id={"featured-trips"}>
      <SectionHeader
        eyebrow="What's New"
        title={"The Hotest Trips"}
        subtitle="Discover the most amazing adventures, collect experiences for life."
        className={cx("featured-trips__heading")}
        style="corner-stack"
      />

      <div className={cx("featured-trips__content")}>
        <ResponsiveGrid columns={3}>
          {trips.map((trip, id) => (
            <FeaturedTripCard
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
