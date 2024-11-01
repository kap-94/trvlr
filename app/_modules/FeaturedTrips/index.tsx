import { FC } from "react";
import classnames from "classnames/bind";
import {
  ResponsiveGrid,
  FeaturedTripCard,
  SectionHeading,
} from "@/app/_components";
import styles from "./FeaturedTrips.module.scss";
import { TripCardData } from "@/app/_components/FeaturedTripCard";

const cx = classnames.bind(styles);

interface Props {
  trips: TripCardData[];
}

const FeaturedTrips: FC<Props> = ({ trips }) => {
  return (
    <section className={cx("featured-trips")} id={"featured-trips"}>
      <SectionHeading
        title={"The Hotest Trips"}
        subtitle="Discover the most amazing adventures, collect experiences for life."
        className={cx("featured-trips__heading")}
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
