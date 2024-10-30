import React, { FC } from "react";
import classnames from "classnames/bind";
import { LeafletMap, SectionHeading } from "@/app/_components";
import { Location } from "@/app/_components/LeafletMap";
import styles from "./TravelGuideMap.module.scss";

const cx = classnames.bind(styles);

interface TravelGuideMapProps {
  heading: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };
  locations: Location[];
  mapCenter: [number, number];
  mapZoom: number;
}

const TravelGuideMap: FC<TravelGuideMapProps> = ({
  heading,
  locations,
  mapCenter,
  mapZoom,
}) => (
  <section className={cx("travel-guide-map")}>
    <div className={cx("travel-guide-map__header")}>
      <SectionHeading {...heading} />
    </div>{" "}
    <div className={cx("travel-guide-map__map")}>
      <LeafletMap center={mapCenter} zoom={mapZoom} locations={locations} />
    </div>
  </section>
);

export default TravelGuideMap;
