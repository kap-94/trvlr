// TripCard.tsx
import { FC } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/app/_components";
import { Star } from "lucide-react";
import styles from "./TripCard.module.scss";

export interface TripData {
  id: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  imageUrl: string;
}

interface TripCardProps {
  data: TripData;
  className?: string;
}

const cx = classNames.bind(styles);

export const TripCard: FC<TripCardProps> = ({ data, className }) => {
  const { id, title, description, rating, price, imageUrl } = data;

  return (
    <Link href={`/trips/${id}`}>
      <article className={cx("trip-card", className)}>
        <div className={cx("trip-card__image-container")}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={cx("trip-card__image")}
          />
        </div>

        <div className={cx("trip-card__content")}>
          <Typography variant="h4" className={cx("trip-card__title")}>
            {title}
          </Typography>

          <Typography variant="p2" className={cx("trip-card__description")}>
            {description}
          </Typography>

          <div className={cx("trip-card__footer")}>
            <div className={cx("trip-card__rating")}>
              <Star className={cx("trip-card__rating-icon")} />
              <Typography
                variant="p2"
                fontWeight={600}
                className={cx("trip-card__rating-value")}
              >
                {rating.toFixed(1)}
              </Typography>
            </div>

            <Typography
              variant="p1"
              fontWeight={700}
              className={cx("trip-card__price")}
            >
              ${price.toLocaleString()}
            </Typography>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TripCard;
