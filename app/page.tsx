import { BlogPreview, FeaturedTrips, HeroVideo, TravelGrid } from "./_modules";
import { SearchCard } from "@/app/_components";
import { layoutItems } from "./_lib/data";

const slidesData = [
  {
    video_url:
      // "https://cdn.pixabay.com/video/2020/01/25/31569-387675206.mp4",
      // "https://cdn.pixabay.com/video/2017/08/02/11087-228113789_large.mp4",
      // "https://cdn.pixabay.com/video/2023/08/12/175657-854054123_large.mp4",
      "https://cdn.pixabay.com/video/2024/10/18/236893_large.mp4",
    image: {
      url: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D",
      alt: "Travel Image",
    },
  },
];

export default function Home() {
  return (
    <div>
      <main>
        <HeroVideo slidesData={slidesData}>
          <SearchCard />
        </HeroVideo>

        <FeaturedTrips />

        <TravelGrid items={layoutItems} variant="variant1" />

        <BlogPreview />

        <TravelGrid items={layoutItems} variant="variant2" />

        {/* <CardSlider
          eyebrow="News & updates"
          title="The Hotest Trips"
          isCentered={true}
          showButtons="none"
        /> */}
      </main>
    </div>
  );
}
