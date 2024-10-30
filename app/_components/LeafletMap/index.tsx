"use client";
import React, { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import classnames from "classnames/bind";
import { Button, Typography } from "@/app/_components";
import styles from "./LeafletMap.module.scss";
import "./popup.scss";
import Image from "next/image";

// Icono de marcador personalizado
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

// // Icono de marcador personalizado
// const customMarkerIcon = new L.Icon({
//   iconUrl:
//     "https://upload.wikimedia.org/wikipedia/commons/6/63/Map_marker_icon_%28blue%29.svg", // Icono SVG moderno
//   iconSize: [30, 40], // Ajusta el tamaño a lo que prefieras
//   iconAnchor: [15, 40], // Ajusta el punto de anclaje
//   popupAnchor: [0, -30], // Ajusta la posición del popup
// });

// Props más claros y concisos
export interface Location {
  id: number;
  slug?: string;
  title: string;
  excerpt?: string;
  latitude: string;
  longitude: string;
  buttonLink: {
    url: string;
    title: string;
  };
  image: {
    url: string;
    alt: string;
  };
}

interface LeafletMapProps {
  center: [number, number];
  zoom: number;
  locations: Location[];
}

const cx = classnames.bind(styles);

// Componente para desactivar el zoom con el scroll
const DisableScrollZoom = () => {
  const map = useMap();
  map.scrollWheelZoom.disable(); // Desactiva el zoom con scroll
  return null;
};

const LeafletMap: FC<LeafletMapProps> = ({ center, zoom, locations }) => (
  <div className={cx("leaflet-map")}>
    <MapContainer
      center={center}
      zoom={zoom}
      className={cx("leaflet-map__container")}
    >
      <DisableScrollZoom />
      <TileLayer
        // url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {locations.map((location) => (
        <Marker
          key={location.slug}
          position={[
            parseFloat(location.latitude),
            parseFloat(location.longitude),
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
                {location.title}
              </Typography>

              <div className={cx("popup-content__image-container")}>
                <Image
                  src={location.image.url}
                  fill
                  alt={location.image.alt}
                  className={cx("popup-content__image")}
                />
              </div>

              <Typography
                variant="p2"
                align="center"
                className={cx("popup-content__excerpt")}
              >
                {location.excerpt}
              </Typography>
              <Button
                variant="link-light"
                href={location.buttonLink.url}
                target="_blank"
                className={cx("popup-content__button")}
              >
                {location.buttonLink.title}
              </Button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);

export default LeafletMap;
