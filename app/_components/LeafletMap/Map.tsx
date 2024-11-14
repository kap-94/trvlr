import React, { FC } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import classnames from "classnames/bind";
import { Location } from "@/app/_types";
import { Button, Typography } from "@/app/_components";
import Image from "next/image";
import styles from "./LeafletMap.module.scss";
import "leaflet/dist/leaflet.css";

const cx = classnames.bind(styles);

const customMarkerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapProps {
  center: [number, number];
  zoom: number;
  locations: Location[];
}

const truncateText = (text: string, maxLength: number = 20) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const DisableScrollZoom = () => {
  const map = useMap();
  map.scrollWheelZoom.disable();
  return null;
};

const Map: FC<MapProps> = ({ center, zoom, locations }) => (
  <MapContainer
    center={center}
    zoom={zoom}
    className={cx("leaflet-map__container")}
  >
    <DisableScrollZoom />
    <TileLayer
      url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />

    {locations.map((location) => (
      <Marker
        key={location.id}
        position={[
          location.coordinates.latitude,
          location.coordinates.longitude,
        ]}
        icon={customMarkerIcon}
      >
        <Popup>
          <div className={cx("popup-content")}>
            <Typography
              variant="h3"
              align="center"
              className={cx("popup-content__title")}
            >
              {truncateText(location.name)}
            </Typography>

            {location.image && (
              <div className={cx("popup-content__image-container")}>
                <Image
                  src={location.image.src || ""}
                  width={364}
                  height={182} // (16/9)
                  loading="lazy"
                  alt={location.image.alt}
                  className={cx("popup-content__image")}
                />
              </div>
            )}

            <Typography
              variant="p2"
              align="center"
              className={cx("popup-content__excerpt")}
            >
              {location.excerpt}
            </Typography>

            {location.link && (
              <Button
                variant="link-light"
                href={location.link.url}
                target="_blank"
                className={cx("popup-content__button")}
              >
                {location.link.title}
              </Button>
            )}
          </div>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default Map;
