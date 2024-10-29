// components/FeaturedBlogCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames/bind";
import { Typography } from "@/app/_components";
import styles from "./FeaturedBlogCard.module.scss";

const cx = classnames.bind(styles);

interface FeaturedBlogCardProps {
  imageSrc: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  link: string;
}

const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({
  imageSrc,
  eyebrow,
  title,
  subtitle,
  link,
}) => {
  return (
    <Link href={link} className={cx("card")}>
      <div className={cx("card__image-wrapper")}>
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={cx("card__image")}
        />
      </div>
      <div className={cx("card__overlay")}>
        <div className={cx("card__text")}>
          <Typography variant="h5" color="white">
            {eyebrow}
          </Typography>
          <Typography variant="h3" color="white">
            {title}
          </Typography>
          <Typography variant="p1" color="white">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedBlogCard;
