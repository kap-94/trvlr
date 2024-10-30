import React from "react";
import Link from "next/link";
import classnames from "classnames/bind";
import { Typography, ScrollImage } from "@/app/_components";
import styles from "./TravelGuideDescription.module.scss";

const cx = classnames.bind(styles);

interface TravelGuideData {
  title: string;
  subtitle: string;
  description: string;
  mainImageUrl: string;
  bestTimeToVisit: string;
  averageCost: string;
  currency: string;
  foodHighlights: string[];
  culture: string;
  transportation: string;
  visaInfo: string;
  safetyTips: string;
  author: string;
  authorLink: string;
  largeInspirationalText: string; // Nueva sección inspiradora tipo reportaje
}

interface TravelGuideDescriptionProps {
  data: TravelGuideData;
}

// Componente InfoRow definido dentro del mismo archivo
const InfoRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className={cx("travel-guide__info-row")}>
    <Typography variant="p1" className={cx("travel-guide__info-label")}>
      {label}
    </Typography>
    <Typography variant="p1" className={cx("travel-guide__info-value")}>
      {value}
    </Typography>
  </div>
);

const TravelGuideDescription: React.FC<TravelGuideDescriptionProps> = ({
  data,
}) => {
  const {
    title,
    subtitle,
    description,
    mainImageUrl,
    bestTimeToVisit,
    averageCost,
    currency,
    foodHighlights,
    culture,
    transportation,
    visaInfo,
    safetyTips,
    author,
    authorLink,
    largeInspirationalText,
  } = data;

  return (
    <section className={cx("travel-guide")}>
      <div className={cx("travel-guide__content")}>
        <div className={cx("travel-guide__text-content")}>
          <Typography variant="h1" className={cx("travel-guide__title")}>
            {title}
          </Typography>
          <Typography
            variant="h2"
            fontWeight={500}
            className={cx("travel-guide__subtitle")}
          >
            {subtitle}
          </Typography>
          <Typography variant="p1" className={cx("travel-guide__description")}>
            {description}
          </Typography>

          {/* Nueva sección inspiradora tipo reportaje */}
          <Typography
            variant="h3"
            className={cx("travel-guide__inspirational-text-heading")}
          >
            Discover the Magic of {title}
          </Typography>
          <Typography
            variant="p1"
            className={cx("travel-guide__inspirational-text")}
          >
            {largeInspirationalText}
          </Typography>

          <div className={cx("travel-guide__details")}>
            <Typography
              variant="h3"
              className={cx("travel-guide__section-heading")}
            >
              Key Information for Your Trip
            </Typography>

            <InfoRow label="Best time to visit:" value={bestTimeToVisit} />
            <InfoRow label="Average cost:" value={averageCost} />
            <InfoRow label="Currency:" value={currency} />

            <Typography
              variant="h3"
              className={cx("travel-guide__section-heading")}
            >
              Cultural Highlights
            </Typography>
            <Typography variant="p1" className={cx("travel-guide__culture")}>
              {culture}
            </Typography>

            <Typography
              variant="h3"
              className={cx("travel-guide__section-heading")}
            >
              Typical Food
            </Typography>
            <ul className={cx("travel-guide__food-list")}>
              {foodHighlights.map((food, index) => (
                <li key={index} className={cx("travel-guide__food-item")}>
                  <Typography variant="p1">{food}</Typography>
                </li>
              ))}
            </ul>

            <Typography
              variant="h3"
              className={cx("travel-guide__section-heading")}
            >
              Transportation & Accessibility
            </Typography>
            <Typography
              variant="p1"
              className={cx("travel-guide__transportation")}
            >
              {transportation}
            </Typography>

            <Typography
              variant="h3"
              className={cx("travel-guide__section-heading")}
            >
              Visa Information
            </Typography>
            <Typography variant="p1" className={cx("travel-guide__visa-info")}>
              {visaInfo}
            </Typography>

            <Typography
              variant="h3"
              className={cx("travel-guide__section-heading")}
            >
              Safety Tips
            </Typography>
            <Typography
              variant="p1"
              className={cx("travel-guide__safety-tips")}
            >
              {safetyTips}
            </Typography>
          </div>

          <div className={cx("travel-guide__author")}>
            <Typography variant="p1">
              Written by{" "}
              <Link
                href={authorLink}
                className={cx("travel-guide__author-link")}
              >
                {author}
              </Link>
            </Typography>
          </div>
        </div>

        <div className={cx("travel-guide__image")}>
          <ScrollImage src={mainImageUrl} alt={`Main image for ${title}`} />
        </div>
      </div>
    </section>
  );
};

export default TravelGuideDescription;
