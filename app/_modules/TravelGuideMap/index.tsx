import React, { FC } from "react";
import classnames from "classnames/bind";
import { LeafletMap, SectionHeader } from "@/app/_components";
import { Coordinates, Location } from "@/app/_types";
import styles from "./TravelGuideMap.module.scss";

const cx = classnames.bind(styles);

interface TravelGuideMapProps {
  heading: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };
  locations: Location[];
  mapCenter: Coordinates;
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
      <SectionHeader {...heading} />
    </div>
    <div className={cx("travel-guide-map__map")}>
      <LeafletMap
        center={[mapCenter.latitude, mapCenter.longitude]}
        zoom={mapZoom}
        locations={locations}
      />
    </div>
  </section>
);

export default TravelGuideMap;
