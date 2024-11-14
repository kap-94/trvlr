"use client";
import React, { FC } from "react";
import dynamic from "next/dynamic";
import classnames from "classnames/bind";
import { Location } from "@/app/_types";
import "./popup.scss";
import styles from "./LeafletMap.module.scss";

const cx = classnames.bind(styles);

// Cargamos el mapa dinámicamente sin SSR
const MapWithNoSSR = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className={cx("leaflet-map__loading")}>Loading map...</div>
  ),
});

interface LeafletMapProps {
  center: [number, number];
  zoom: number;
  locations: Location[];
}

const LeafletMap: FC<LeafletMapProps> = (props) => (
  <div className={cx("leaflet-map")}>
    <MapWithNoSSR {...props} />
  </div>
);

export default LeafletMap;
