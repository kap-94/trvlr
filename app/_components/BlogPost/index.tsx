// blog-post/BlogPost.tsx
import React from "react";
import classNames from "classnames/bind";
import styles from "./BlogPost.module.scss";
import Image from "next/image";
import Link from "next/link";
import Typography from "../Typography";

const cx = classNames.bind(styles);

interface ContentSection {
  title: string;
  body: string;
  image?: string;
  link?: { href: string; label: string };
  order: number;
}

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  coverImage: string;
  introduction: string;
  content: ContentSection[];
  highlights: string[];
  gallery: string[];
  tags: string[];
  relatedPosts: Array<{ id: string; title: string; href: string }>;
  readTime: number;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  author,
  date,
  coverImage,
  introduction,
  content,
  highlights,
  gallery,
  tags,
  relatedPosts,
  readTime,
}) => {
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
            src={coverImage}
            alt={title}
            className={cx("blog-post__image")}
            fill
            priority
          />
        </div>

        <div className={cx("blog-post__meta")}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="h5">
            By {author} | {new Date(date).toLocaleDateString()} | {readTime} min
            read
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
          {highlights.map((point, index) => (
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
                  src={section.image}
                  alt={section.title}
                  fill
                  className={cx("blog-post__content-image")}
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
      <section className={cx("blog-post__gallery")}>
        <Typography variant="h2">Gallery</Typography>
        <div className={cx("blog-post__gallery-grid")}>
          {gallery.map((image, index) => (
            <div className={cx("blog-post__gallery-image-container")}>
              <Image
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className={cx("blog-post__gallery-image")}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Tags */}
      <div className={cx("blog-post__tags")}>
        {tags.map((tag) => (
          <Typography variant="p2" key={tag} className={cx("blog-post__tag")}>
            #{tag}
          </Typography>
        ))}
      </div>

      {/* Related Posts */}
      <div className={cx("blog-post__related-posts")}>
        <Typography variant="h2">Related Posts</Typography>
        <ul>
          {relatedPosts.map((post) => (
            <li key={post.id}>
              <Link href={post.href}>
                <Typography variant="p1" fontWeight={400}>
                  {post.title}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Comment Section */}
      {/* <section className={cx("blog-post__comments")}>
        <Typography variant="h3">Leave a Comment</Typography>
        <form>
          <textarea placeholder="Write your comment..." rows={5} />
          <button type="submit">Post Comment</button>
        </form>
      </section> */}
    </article>
  );
};

export default BlogPost;
