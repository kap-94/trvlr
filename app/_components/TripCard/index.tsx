// TripCard.tsx
import { FC } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { TripCardView } from "@/app/_types";
import { Typography } from "@/app/_components";
import styles from "./TripCard.module.scss";

// TripCard.tsx
interface TripCardProps {
  data: TripCardView;
  className?: string;
  isPriority?: boolean; // Añadimos esta prop
}

const cx = classNames.bind(styles);

const imageSizes = [
  "(min-width: 1200px) 340px", // 1440px / 4 - gaps ~= 340px
  "(min-width: 992px) 33vw", // 3 columnas
  "(min-width: 768px) 50vw", // 2 columnas
  "calc(100vw - 48px)", // 1 columna - padding horizontal
].join(", ");

export const TripCard: FC<TripCardProps> = ({
  data,
  className,
  isPriority = false,
}) => {
  const { title, subtitle, rating, pricing, coverImage, slug } = data;

  return (
    <Link href={`/trips/${slug}`}>
      <article className={cx("trip-card", className)}>
        <div className={cx("trip-card__image-container")}>
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            sizes={imageSizes}
            priority={isPriority}
            className={cx("trip-card__image")}
          />
        </div>

        <div className={cx("trip-card__content")}>
          <Typography variant="h5" className={cx("trip-card__title")}>
            {title}
          </Typography>

          <Typography variant="p2" className={cx("trip-card__description")}>
            {subtitle}
          </Typography>

          <div className={cx("trip-card__footer")}>
            <div className={cx("trip-card__rating")}>
              <Star className={cx("trip-card__rating-icon")} />
              <Typography
                variant="p2"
                fontWeight={600}
                className={cx("trip-card__rating-value")}
              >
                {rating.average.toFixed(1)}
              </Typography>
            </div>

            <Typography
              variant="p1"
              fontWeight={700}
              className={cx("trip-card__price")}
            >
              ${pricing?.basePrice.amount.toLocaleString()}
            </Typography>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TripCard;
