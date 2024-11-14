// components/BlogPreview.tsx

import React from "react";
import classnames from "classnames/bind";
import {
  BlogListCard,
  Button,
  FeaturedBlogCard,
  SectionHeader,
  Typography,
} from "@/app/_components";
import { BlogCardView } from "@/app/_types";
import styles from "./BlogPreview.module.scss";

const cx = classnames.bind(styles);

interface BlogPreviewProps {
  featuredPosts: BlogCardView[];
  latestPosts: BlogCardView[];
}

const BlogPreview: React.FC<BlogPreviewProps> = ({
  featuredPosts,
  latestPosts,
}) => {
  const nonFeaturedPosts = latestPosts
    .filter((post) => post.type !== "featured")
    .slice(0, 6);

  return (
    <section className={cx("blog-preview")}>
      <div className={cx("blog-preview__background")}></div>

      <SectionHeader
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
              link={post.slug}
              image={post.coverImage}
              // eyebrow={post.subtitle || ""}
              title={post.title}
              subtitle={post.subtitle || ""}
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
            {nonFeaturedPosts.map((post) => (
              <BlogListCard
                key={post.id}
                link={post.slug}
                image={post.coverImage}
                title={post.title}
                subtitle={post.subtitle || ""}
              />
            ))}
          </div>

          <Button variant="link-dark" target="_self" href="/blog">
            See all the articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
