"use client";

import { FC } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Icon, { IconName } from "../CustomIcon";
import { Card, Typography } from "@/app/_components";
import { CardData } from "../Card/interfaces";
import styles from "./FeaturedTripCard.module.scss";

export interface TripCardData extends CardData {
  moreInfo: string;
  countries: string[];
}

interface TripCardProps {
  data: TripCardData;
  className?: string;
}

const categoryIcons: { [key: string]: IconName } = {
  adventure: "mountain",
  cultural: "museum",
  leisure: "beach",
  business: "briefcase",
  educational: "book",
  wellness: "spa",
  culinary: "restaurant",
  nature: "tree",
  waterSports: "surf",
  amusementParks: "rollercoaster",
  sailing: "boat",
  shopping: "shopping-cart",
  nightlife: "cocktail",
};

const cx = classNames.bind(styles);

export const FeaturedTripCard: FC<TripCardProps> = ({ data, className }) => {
  const { travelCategory, title, subtitle, moreInfo, countries } = data;

  const icon = categoryIcons[travelCategory];

  return (
    <Link href={`/trips/${data.id}`}>
      <Card data={data} className={cx("card", className)}>
        <Card.Header className={cx("card__header")}>
          <Card.Image
            title={title}
            subtitle={countries.join(", ")}
            fill
            className={cx("card__image")}
          />
          <div className={cx("card__icon-container")}>
            <Icon
              icon={icon}
              className={cx("card__icon")}
              height={20}
              width={20}
              color="white"
            />
          </div>

          <div className={cx("card__overlay")}>
            <Typography
              variant="h4"
              color="white"
              className={cx("card__overlay-title")}
            >
              {title}
            </Typography>

            {/* <Typography
              variant="p1"
              color="white"
              className={cx("card__overlay-subtitle")}
            >
              {subtitle}
            </Typography> */}

            {/* Añadir un divisor */}
            {/* <div className={cx("card__overlay-divider")} /> */}

            <Typography
              variant="p2"
              color="white"
              fontWeight={600}
              className={cx("card__overlay-info")}
            >
              {moreInfo}
            </Typography>
            <div className={cx("card__overlay-divider")} />

            <Typography
              variant="p2"
              fontWeight={600}
              color="white"
              className={cx("card__overlay-countries")}
            >
              {countries.join(", ")}
            </Typography>
          </div>
        </Card.Header>
      </Card>
    </Link>
  );
};

export default FeaturedTripCard;
