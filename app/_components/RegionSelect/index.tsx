"use client";
import { FC, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import { Typography } from "@/app/_components";
import styles from "./RegionSelect.module.scss";

const cx = classNames.bind(styles);

interface RegionSelectProps {
  regions: { label: string; image: string }[];
  onSelectRegion: (region: string) => void;
  onCloseDropdown: () => void;
  isSmall?: boolean;
  position: "top" | "bottom";
}

export const RegionSelect: FC<RegionSelectProps> = ({
  regions,
  onSelectRegion,
  onCloseDropdown,
  isSmall = false,
  position,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      onCloseDropdown();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onCloseDropdown]);

  return (
    <div
      role="listbox"
      aria-label="Select a region"
      tabIndex={-1}
      className={cx(
        "region-select",
        isSmall && "region-select--small",
        `region-select--${position}`
      )}
    >
      <Typography
        variant="h5"
        align="left"
        fontWeight={600}
        className={cx("region-select__title")}
      >
        Search by Region
      </Typography>

      <div className={cx("region-select__grid")}>
        {regions.map((region, index) => (
          <div
            key={index}
            role="option"
            aria-selected="false"
            className={cx("region-select__item")}
            onClick={() => onSelectRegion(region.label)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectRegion(region.label);
              }
            }}
            tabIndex={0}
          >
            <Image
              src={region.image}
              alt={region.label}
              className={cx("region-select__image")}
              height={74}
              width={128}
            />
            <Typography
              variant="p2"
              color="black"
              align="left"
              fontWeight={500}
              className={cx("region-select__label")}
            >
              {region.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionSelect;
