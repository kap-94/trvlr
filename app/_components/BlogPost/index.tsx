import React from "react";
import classNames from "classnames/bind";
import styles from "./BlogPost.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/_components";
import { BlogDetailView } from "@/app/_types";
import GalleryLightbox from "./GalleryLightbox";

const cx = classNames.bind(styles);

const BlogPost: React.FC<BlogDetailView> = (data) => {
  const {
    author,
    content,
    coverImage,
    gallery,
    highlights,
    introduction,
    publishDate,
    readTime,
    relatedPosts,
    tags,
    title,
  } = data;
  const sortedContent = [...content].sort((a, b) => a.order - b.order);

  return (
    <article className={cx("blog-post")}>
      {/* Breadcrumb */}
      <nav className={cx("blog-post__breadcrumb")}>
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / {title}
      </nav>

      {/* Header */}
      <header className={cx("blog-post__header")}>
        <div className={cx("blog-post__image-container")}>
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            className={cx("blog-post__image")}
            fill
            priority
            sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 800px) 800px, 704px"
          />
        </div>

        <div className={cx("blog-post__meta")}>
          <Typography variant="h1" className={cx("blog-post__title")}>
            {title}
          </Typography>
          <Typography variant="h5" style={{ marginLeft: "1px" }}>
            By {author.name} | {new Date(publishDate).toLocaleDateString()} |{" "}
            {readTime} min read
          </Typography>
        </div>
      </header>

      {/* Introduction */}
      <section className={cx("blog-post__introduction")}>
        <Typography variant="p1" fontWeight={400}>
          {introduction}
        </Typography>
      </section>

      {/* Highlights Section */}
      <section className={cx("blog-post__highlights")}>
        <Typography variant="h3">Key Takeaways</Typography>
        <ul>
          {highlights?.map((point, index) => (
            <li key={index}>
              <Typography variant="p1" fontWeight={400}>
                {point}
              </Typography>
            </li>
          ))}
        </ul>
      </section>

      {/* Content Sections */}
      <section className={cx("blog-post__content")}>
        {sortedContent.map((section, index) => (
          <div key={index} className={cx("blog-post__content-section")}>
            <Typography variant="h3">{section.title}</Typography>

            {section.image && (
              <div className={cx("blog-post__content-image-container")}>
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className={cx("blog-post__content-image")}
                  sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 800px) 800px, 704px"
                />
              </div>
            )}

            <Typography variant="p1" fontWeight={400}>
              {section.body}
            </Typography>

            {section.link && (
              <Link
                href={section.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="p1"
                  className={cx("blog-post__content-link")}
                >
                  {section.link.label}
                </Typography>
              </Link>
            )}
          </div>
        ))}
      </section>

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <GalleryLightbox
          images={gallery}
          className={cx("blog-post__gallery")}
        />
      )}

      {/* Tags */}
      {/* <div className={cx("blog-post__tags")}>
        {tags.map((tag) => (
          <Typography variant="p2" key={tag} className={cx("blog-post__tag")}>
            #{tag}
          </Typography>
        ))}
      </div> */}

      {/* Related Posts */}
      <div className={cx("blog-post__related-posts")}>
        <Typography variant="h3">Related Posts</Typography>
        <ul>
          {relatedPosts?.map((post) => (
            <li key={post.id}>
              <Link href={post.slug}>
                <Typography variant="p1" fontWeight={400}>
                  {post.title}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default BlogPost;
