// components/BlogPreview.tsx

import React from "react";
import classnames from "classnames/bind";
import { blogData } from "@/app/_lib/data";
import {
  BlogListCard,
  Button,
  FeaturedBlogCard,
  SectionHeading,
  Typography,
} from "@/app/_components";
import styles from "./BlogPreview.module.scss";

const cx = classnames.bind(styles);

const BlogPreview: React.FC = () => {
  const featuredPosts = blogData
    .filter((post) => post.type === "featured")
    .slice(0, 2);
  const listPosts = blogData.filter((post) => post.type === "list").slice(0, 6);

  return (
    <section className={cx("blog-preview")}>
      <SectionHeading
        title="Trending Now"
        subtitle="Discover the latest blog posts"
        className={cx("blog-preview__heading")}
      />

      <div className={cx("blog-preview__content")}>
        <div
          className={cx("blog-preview__column", "blog-preview__column--left")}
        >
          {featuredPosts.map((post) => (
            <FeaturedBlogCard
              key={post.id}
              imageSrc={post.imageSrc}
              eyebrow={post.eyebrow || ""}
              title={post.title}
              subtitle={post.subtitle}
              link={post.link}
            />
          ))}
        </div>

        <div
          className={cx("blog-preview__column", "blog-preview__column--right")}
        >
          <Typography variant="h2" className={cx("blog-preview__subheading")}>
            Latest Blogs
          </Typography>
          <div className={cx("blog-preview__list")}>
            {listPosts.map((post) => (
              <BlogListCard
                key={post.id}
                imageSrc={post.imageSrc}
                title={post.title}
                subtitle={post.subtitle}
                link={post.link}
              />
            ))}
          </div>

          <Button variant="link-dark" href="/">
            See all the articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
