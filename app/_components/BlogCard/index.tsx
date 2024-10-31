import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";
import { Category, Location } from "@/app/_modules/BlogArticleList";
import { Typography } from "@/app/_components";
import styles from "./BlogCard.module.scss";

const cx = classNames.bind(styles);

export interface Post {
  id: number;
  title: string;
  subtitle: string;
  excerpt: string;
  location: Location[];
  slug: string;
  tags: string[];
  date: Date;
  categories: Category[];
  image: {
    url: string;
    alt: string;
  };
}

export const BlogCard = (post: Post) => {
  const { image, title, subtitle, excerpt, slug, date } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className={cx("blog-card__link")}>
      <div className={cx("blog-card__container")}>
        <div className={cx("blog-card__image-wrapper")}>
          <div className={cx("blog-card__image-container")}>
            {image?.url && (
              <Image
                src={image.url}
                alt={image.alt || ""}
                className={cx("blog-card__image")}
                fill
                sizes="(max-width: 976px) 30vw, 100%"
                style={{ objectFit: "cover" }}
                priority={false}
              />
            )}
          </div>
        </div>
        <div className={cx("blog-card__content")}>
          <div className={cx("blog-card__body")}>
            {title && (
              <Typography
                variant="h3"
                fontWeight={500}
                // fontFamily="raleway"
                className={cx("blog-card__title")}
              >
                {title.replace("& ", "&")}
              </Typography>
            )}
            {excerpt && (
              <Typography
                variant="p1"
                fontWeight={400}
                className={cx("blog-card__excerpt")}
              >
                {excerpt}
              </Typography>
            )}
          </div>
          <div className={cx("blog-card__footer")}>
            {subtitle && (
              <Typography
                variant="h5"
                fontWeight={600}
                className={cx("blog-card__location")}
              >
                {subtitle}
              </Typography>
            )}
            {date && (
              <Typography variant="p1" className={cx("blog-card__date")}>
                {formattedDate}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
