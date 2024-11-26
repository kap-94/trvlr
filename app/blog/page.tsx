// app/blog/page.tsx
import { Suspense } from "react";
import { HeroTextContent, Spinner } from "@/app/_components";
import { BlogList, HeroVideo } from "@/app/_modules";
import { blogHeroSlide } from "@/app/_data";
import { getBlogData } from "./actions";

// Componente que maneja la carga de datos
async function BlogListContent() {
  const { categories, posts: postsResponse } = await getBlogData();

  return (
    <BlogList categories={categories} initialPosts={postsResponse.items} />
  );
}

export default function BlogListPage() {
  return (
    <>
      <HeroVideo slidesData={blogHeroSlide} contentPosition="bottom-left">
        <HeroTextContent
          eyebrow={"Tips, Hacks & Inspiration"}
          title={"The Ultimate Traveler's Blog"}
        />
      </HeroVideo>

      <Suspense fallback={<Spinner variant="page" />}>
        <BlogListContent />
      </Suspense>
    </>
  );
}
