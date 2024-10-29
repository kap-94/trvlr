"use client";
import { FC, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import { Typography } from "@/app/_components";
import styles from "./DestinationDropdown.module.scss";

const cx = classNames.bind(styles);

interface DestinationDropdownProps {
  regions: { label: string; image: string }[];
  onSelectRegion: (region: string) => void;
  onCloseDropdown: () => void; // Nueva prop para cerrar el dropdown
}

export const DestinationDropdown: FC<DestinationDropdownProps> = ({
  regions,
  onSelectRegion,
  onCloseDropdown, // Recibimos la nueva prop
}) => {
  useEffect(() => {
    // Función para cerrar el dropdown al hacer scroll
    const handleScroll = () => {
      onCloseDropdown();
    };

    // Escuchar el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onCloseDropdown]);

  return (
    <div className={cx("dropdown")}>
      <Typography variant="h5" align="left" className={cx("dropdown__title")}>
        Search by Region
      </Typography>

      <div className={cx("dropdown__grid")}>
        {regions.map((region, index) => (
          <div
            key={index}
            className={cx("dropdown__item")}
            onClick={() => onSelectRegion(region.label)}
          >
            <Image
              src={region.image}
              alt={region.label}
              className={cx("dropdown__image")}
              height="68"
              width="120"
            />
            <Typography
              variant="p2"
              color="black"
              align="left"
              fontWeight={600}
              className={cx("dropdown__label")}
            >
              {region.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationDropdown;
