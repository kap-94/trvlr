"use client";

import { FC } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Icon, { IconName } from "../CustomIcon";
import { Card, Typography } from "@/app/_components";
import styles from "./FeaturedTripCard.module.scss";
import { TravelCategory, TripCardView } from "@/app/_types";

const cx = classNames.bind(styles);

interface TripCardProps {
  data: TripCardView;
  className?: string;
}

const categoryIcons: { [key in TravelCategory]: IconName } = {
  [TravelCategory.ADVENTURE]: "mountain",
  [TravelCategory.CULTURAL]: "museum",
  [TravelCategory.LUXURY]: "briefcase",
  [TravelCategory.ECOTOURISM]: "tree",
  [TravelCategory.WILDLIFE]: "tree",
  [TravelCategory.BEACH]: "beach",
  [TravelCategory.MOUNTAIN]: "mountain",
  [TravelCategory.URBAN]: "museum",
  [TravelCategory.RURAL]: "tree",
  [TravelCategory.FOOD_WINE]: "restaurant",
  [TravelCategory.WELLNESS]: "spa",
  [TravelCategory.EDUCATIONAL]: "book",
  [TravelCategory.PHOTOGRAPHY]: "museum",
  [TravelCategory.VOLUNTEER]: "briefcase",
  [TravelCategory.RELIGIOUS]: "museum",
  [TravelCategory.SPORTS]: "mountain",
  [TravelCategory.FESTIVAL]: "cocktail",
  [TravelCategory.CRUISE]: "boat",
};

export const FeaturedTripCard: FC<TripCardProps> = ({ data, className }) => {
  const { category, title, subtitle, description, countries } = data;
  const icon = categoryIcons[category[0]];

  // Extraer los nombres de los países y unirlos
  const countryNames = countries.map((country) => country.name).join(", ");

  // sizes basado en el ResponsiveGrid y los breakpoints:
  // - Por defecto (>1200px): el grid es de 3 columnas o el número especificado
  // - Entre 768px y 1200px: el grid es de 2 columnas
  // - <768px: el grid es de 1 columna
  const imageSizes = `
    (max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw
  `;

  return (
    <Link href={`/trips/${data.slug}`}>
      <Card data={data} className={cx("card", className)}>
        <Card.Header className={cx("card__header")}>
          <Card.Image
            title={title}
            subtitle={countryNames}
            fill
            sizes={imageSizes}
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
              variant="h5"
              color="white"
              className={cx("card__overlay-title")}
            >
              {title}
            </Typography>

            <Typography
              variant="p2"
              color="white"
              fontWeight={600}
              className={cx("card__overlay-info")}
            >
              {description}
            </Typography>
            <div className={cx("card__overlay-divider")} />

            <Typography
              variant="p2"
              fontWeight={600}
              color="white"
              className={cx("card__overlay-countries")}
            >
              {countryNames}
            </Typography>
          </div>
        </Card.Header>
      </Card>
    </Link>
  );
};

export default FeaturedTripCard;
