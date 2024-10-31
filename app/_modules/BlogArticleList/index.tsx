"use client";
import { useState, useMemo } from "react";
import classNames from "classnames/bind";
import { Post } from "../../_components/BlogCard";
import { BlogCard, Dropdown } from "@/app/_components";
import styles from "./BlogArticleList.module.scss";

const cx = classNames.bind(styles);

// Optimized interfaces
export interface BaseEntity {
  id: number;
  name: string;
}

export interface Category extends BaseEntity {
  slug: string;
}

export interface Location extends BaseEntity {}

export interface Props {
  categories: Category[];
  posts: Post[];
  locations: Location[];
}

interface FilterOption {
  id?: number;
  label: string;
  value: string;
}

interface BlogFiltersProps {
  locationOptions: FilterOption[];
  categoryOptions: FilterOption[];
  onFilterChange: (location: FilterOption, category: FilterOption) => void;
}

export const BlogFilters = ({
  locationOptions,
  categoryOptions,
  onFilterChange,
}: BlogFiltersProps) => {
  console.log({ locationOptions });

  const [location, setLocation] = useState(locationOptions[0]);
  const [category, setCategory] = useState(categoryOptions[0]);

  const handleLocationChange = (newLocation: FilterOption) => {
    setLocation(newLocation);
    onFilterChange(newLocation, category);
  };

  const handleCategoryChange = (newCategory: FilterOption) => {
    setCategory(newCategory);
    onFilterChange(location, newCategory);
  };

  return (
    <div className={cx("blog-filters")}>
      <div className={cx("blog-filters__container")}>
        <div className={cx("blog-filters__content")}>
          <Dropdown
            selected={location}
            onSelectedChange={handleLocationChange}
            options={locationOptions}
          />
          <Dropdown
            selected={category}
            onSelectedChange={handleCategoryChange}
            options={categoryOptions}
          />
        </div>
      </div>
    </div>
  );
};

export const BlogArticleList = ({
  categories,
  locations,
  posts: initialPosts,
}: Props) => {
  const [posts, setPosts] = useState(initialPosts);

  // Memoize options to prevent unnecessary recalculations
  const locationOptions = useMemo(
    () => [
      { label: "Destination", value: "All" },
      ...locations.map(({ name }) => ({
        label: name,
        value: name,
      })),
    ],
    [locations]
  );

  const categoryOptions = useMemo(
    () => [
      { id: -1, label: "Category", value: "All" },
      ...categories.map(({ id, name }) => ({
        id,
        label: name,
        value: name,
      })),
    ],
    [categories]
  );

  const handleFilterChange = (
    location: FilterOption,
    category: FilterOption
  ) => {
    if (location.value === "All" && category.value === "All") {
      setPosts(initialPosts);
      return;
    }

    const filteredPosts = initialPosts.filter((post) => {
      const locationMatch =
        location.value === "All" ||
        post.location.some((loc) => loc.name === location.value);

      const categoryMatch =
        category.value === "All" ||
        post.categories.some((cat) => cat.id === category.id);

      return locationMatch && categoryMatch;
    });

    setPosts(filteredPosts);
  };

  return (
    <section className={cx("blog-list")}>
      <BlogFilters
        locationOptions={locationOptions}
        categoryOptions={categoryOptions}
        onFilterChange={handleFilterChange}
      />
      <div className={cx("blog-list__content")}>
        <ul className={cx("blog-list__grid")}>
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogArticleList;
