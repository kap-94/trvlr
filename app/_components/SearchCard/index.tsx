"use client";
// SearchCard.tsx
import { FC } from "react";
import classNames from "classnames/bind";
import { Button, SearchTripsForm, Typography } from "@/app/_components";
import styles from "./SearchCard.module.scss";

const cx = classNames.bind(styles);

export const SearchCard: FC = () => {
  const handleSubmit = (values: any) => {
    console.log("Form data:", values);
    // Handle search logic and redirect to results here
  };

  return (
    <div className={cx("search-card")}>
      <Typography
        variant="h1"
        align="center"
        color="white"
        className={cx("search-card__title")}
      >
        Discover Your Next Adventure
      </Typography>
      <Typography
        variant="h4"
        fontWeight={600}
        align="center"
        color="white"
        className={cx("search-card__subtitle")}
      >
        Find personalized travel guides for every type of traveler.
      </Typography>
      <Typography
        variant="p1"
        fontWeight={600}
        align="center"
        color="white"
        className={cx("search-card__description")}
      >
        Whether you prefer exploring through our guide menu or searching for a
        customized experience, we're here to help you plan the perfect trip.
      </Typography>

      <div className={cx("search-card__trips-form")}>
        <SearchTripsForm onSubmit={handleSubmit} />
      </div>

      <div className={cx("search-card__cta")}>
        {/* <Typography variant="p1" fontWeight={600} align="center" color="white">
          Prefer browsing our guides?
        </Typography> */}
        <Button
          variant="link-light"
          href="/"
          target="_self"
          className={cx("search-card__button")}
        >
          Explore Guides
        </Button>
      </div>
    </div>
  );
};

export default SearchCard;
