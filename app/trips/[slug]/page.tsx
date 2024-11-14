import classNames from "classnames/bind";
import { BlogCardView, TripDetailView } from "@/app/_types";
import { createBlogService, createTripService } from "@/app/_services";
import {
  BlogPreview,
  TravelGuideDescription,
  TravelGuideImages,
  TravelGuideMap,
} from "@/app/_modules";
import styles from "./TripPage.module.scss";

const cx = classNames.bind(styles);

interface PageProps {
  params: {
    slug: string;
  };
}

// Esta función se ejecuta en build time y genera las rutas estáticas
export async function generateStaticParams() {
  const tripService = createTripService();
  try {
    // Obtener todos los trips y extraer sus slugs
    const { items: trips } = await tripService.queryTrips({
      limit: 48,
      status: "published",
    });

    return trips.map((trip) => ({
      slug: trip.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Opcional: Genera metadatos estáticos para cada página
export async function generateMetadata({ params }: PageProps) {
  const tripService = createTripService();
  const trip = await tripService.getTripBySlug(params.slug);

  return {
    title: `${trip.title} | Travel Guide`,
    description: trip.description,
    openGraph: {
      title: trip.title,
      description: trip.description,
      images: [
        {
          url: trip.coverImage.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function TripPage({ params }: PageProps) {
  const tripService = createTripService();
  const blogService = createBlogService();

  const trip: TripDetailView = await tripService.getTripBySlug(params.slug);
  const featuredPosts: BlogCardView[] = await blogService.getFeaturedPosts();
  const latestPosts: BlogCardView[] = await blogService.getLatestPosts();

  const {
    averageCost,
    bestTimeToVisit,
    coordinates,
    coverImage,
    culture,
    currency,
    description,
    foodHighlights,
    id,
    images,
    largeInspirationalText,
    locations,
    mapZoom,
    price,
    rating,
    relatedTrips,
    safetyTips,
    subtitle,
    suggestedTrips,
    title,
    visaInfo,
  } = trip;

  const travelGuideData = {
    averageCost,
    bestTimeToVisit,
    coordinates,
    coverImage,
    culture,
    currency,
    description,
    foodHighlights,
    id,
    images,
    largeInspirationalText,
    locations,
    mapZoom,
    price,
    rating,
    relatedTrips,
    safetyTips,
    suggestedTrips,
    subtitle,
    title,
    visaInfo,
  };

  return (
    <div className={cx("trip-page")}>
      <TravelGuideImages
        title="Journey Photo Album"
        subtitle="A collection of moments that define the travel experience"
        images={images}
      />

      <TravelGuideDescription data={travelGuideData} />

      <TravelGuideMap
        heading={{
          title: "Explore " + title,
          subtitle: "Curated selection of must-visit locations",
        }}
        locations={locations}
        mapCenter={coordinates}
        mapZoom={mapZoom}
      />
      <BlogPreview featuredPosts={featuredPosts} latestPosts={latestPosts} />
    </div>
  );
}
