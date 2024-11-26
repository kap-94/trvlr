import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";
import { Typography } from "@/app/_components";
import { BlogCardView } from "@/app/_types";
import styles from "./BlogCard.module.scss";
const cx = classNames.bind(styles);

interface BlogCardProps {
  post: BlogCardView;
}

export const BlogCard: FC<BlogCardProps> = ({ post }) => {
  const { coverImage, title, author, excerpt, slug, publishDate } = post;

  const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/blog/posts/${slug}`} className={cx("blog-card__link")}>
      <div className={cx("blog-card__container")}>
        <div className={cx("blog-card__image-wrapper")}>
          <div className={cx("blog-card__image-container")}>
            {coverImage?.src && (
              <Image
                src={coverImage.src}
                alt={coverImage.alt || ""}
                className={cx("blog-card__image")}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 440px"
              />
            )}
          </div>
        </div>
        <div className={cx("blog-card__content")}>
          <div className={cx("blog-card__body")}>
            {title && (
              <Typography
                variant="h4"
                // fontWeight={600}
                // fontFamily="raleway"
                className={cx("blog-card__title")}
              >
                {title.replace("& ", "&")}
              </Typography>
            )}
            {excerpt && (
              <Typography
                variant="p1"
                // fontWeight={400}
                className={cx("blog-card__excerpt")}
              >
                {excerpt}
              </Typography>
            )}
          </div>
          <div className={cx("blog-card__footer")}>
            {author && author.name && (
              <Typography
                variant="p1"
                fontWeight={700}
                className={cx("blog-card__location")}
              >
                {author.name}
              </Typography>
            )}
            {publishDate && (
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
