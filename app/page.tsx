import { LayoutVariantsGridItem, TripCardView } from "@/app/_types";
import {
  createBlogService,
  createStaticContentService,
  createTripService,
  ServiceError,
} from "@/app/_services";
import { Slide } from "@/app/_modules/HeroVideo/HeroServer";
import { BlogPreview, FeaturedTrips, HeroVideo, TravelGrid } from "./_modules";
import { SearchCard } from "@/app/_components";

export default async function Home() {
  try {
    const blogService = createBlogService();
    const tripService = createTripService();
    const staticContentService = createStaticContentService();

    const heroSlides: Slide[] = await staticContentService.getHeroSlides();
    const featuredTrips: TripCardView[] = await tripService.getFeaturedTrips();
    const layoutItems: LayoutVariantsGridItem[] =
      await staticContentService.getLayoutItems();
    const featuredPosts = await blogService.getFeaturedPosts();
    const latestPosts = await blogService.getLatestPosts();

    return (
      <>
        <HeroVideo slidesData={heroSlides}>
          <SearchCard />
        </HeroVideo>

        <FeaturedTrips trips={featuredTrips} />

        <TravelGrid items={layoutItems} variant="variant2" />

        <BlogPreview featuredPosts={featuredPosts} latestPosts={latestPosts} />

        {/* <TravelGrid items={layoutItems} variant="variant2" /> */}

        {/* <CardSlider
            eyebrow="News & updates"
            title="The Hotest Trips"
            isCentered={true}
            showButtons="none"
          /> */}
      </>
    );
  } catch (error) {
    if (error instanceof ServiceError) {
      console.error(`Service error: ${error.message}, Code: ${error.code}`);
    }
    // Manejo de error apropiado
    return false;
  }
}
