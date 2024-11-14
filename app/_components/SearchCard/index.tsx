import { FC } from "react";
import classNames from "classnames/bind";
import {
  AnimatedText,
  Button,
  SearchForm,
  Typography,
} from "@/app/_components";
import styles from "./SearchCard.module.scss";

const cx = classNames.bind(styles);

export const SearchCard: FC = () => {
  return (
    <div className={cx("search-card")}>
      <div className={cx("search-card__title-wrapper")}>
        <Typography
          variant="h1"
          align="center"
          color="white"
          className={cx("search-card__title")}
        >
          <AnimatedText />
        </Typography>
      </div>
      <Typography
        variant="h4"
        fontWeight={600}
        align="center"
        color="white"
        className={cx("search-card__subtitle")}
      >
        Find travel guides for every type of traveler.
      </Typography>
      <Typography
        variant="p1"
        fontWeight={600}
        align="center"
        color="white"
        className={cx("search-card__description")}
      >
        Where would you like to go today?
      </Typography>

      <div className={cx("search-card__form")}>
        <SearchForm />
      </div>

      <div className={cx("search-card__cta")}>
        <Button
          variant="link-light"
          href="/trips"
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
