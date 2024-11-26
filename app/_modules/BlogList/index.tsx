"use client";

import React, { useMemo, useState } from "react";
import classNames from "classnames/bind";
import styles from "./BlogList.module.scss";
import { BlogCardView, Category } from "@/app/_types";
import { BlogCard, Typography } from "@/app/_components";

const cx = classNames.bind(styles);

interface FilterOption {
  id?: number;
  label: string;
  value: string;
}

interface BlogListProps {
  initialPosts: BlogCardView[];
  categories: Category[];
  className?: string;
}

interface BlogFiltersProps {
  categoryOptions: FilterOption[];
  onFilterChange: (category: FilterOption) => void;
  selected: FilterOption;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  categoryOptions,
  onFilterChange,
  selected,
}) => {
  return (
    <div className={cx("blog-filters")}>
      <div className={cx("blog-filters__container")}>
        <div className={cx("category-filters")}>
          {categoryOptions.map((category) => (
            <button
              key={category.value}
              onClick={() => onFilterChange(category)}
              className={cx("category-filters__tab")}
              role="tab"
              aria-selected={selected.value === category.value}
            >
              <Typography
                variant="h4"
                className={cx("category-filters__label")}
              >
                {category.label}
              </Typography>
              <div
                className={cx("category-filters__indicator", {
                  "category-filters__indicator--active":
                    selected.value === category.value,
                })}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlogList: React.FC<BlogListProps> = ({
  initialPosts,
  categories,
  className,
}) => {
  const [filteredPosts, setFilteredPosts] =
    useState<BlogCardView[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>({
    id: -1,
    label: "All",
    value: "all",
  });

  const categoryOptions = useMemo(
    () => [
      { id: -1, label: "All", value: "all" },
      ...categories.map(({ id, name, slug }) => ({
        id,
        label: name,
        value: slug,
      })),
    ],
    [categories]
  );

  const handleFilterChange = (category: FilterOption) => {
    setSelectedCategory(category);
    const isAllCategories = category.value === "all";

    if (isAllCategories) {
      setFilteredPosts(initialPosts);
      return;
    }

    const filtered = initialPosts.filter((post) =>
      post.categories.some((cat) => cat.slug === category.value)
    );

    setFilteredPosts(filtered);
  };

  return (
    <section className={cx("blog-list", className)}>
      <BlogFilters
        categoryOptions={categoryOptions}
        onFilterChange={handleFilterChange}
        selected={selectedCategory}
      />

      <div className={cx("blog-list__content")}>
        {filteredPosts.length > 0 ? (
          <ul className={cx("blog-list__grid")}>
            {filteredPosts.map((post) => (
              <li key={post.id} className={cx("blog-list__item")}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <div className={cx("blog-list__no-results")}>
            <p>No posts found matching the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
