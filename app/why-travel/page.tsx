import { Metadata } from "next";
import { createTravelService } from "../_services/travelService";
import WhyTravel from "../_modules/WhyTravel";
import { WhyTravelPageData } from "../_modules/WhyTravel/types";

// Optional: Configure revalidation time
export const revalidate = 3600; // revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const travelService = createTravelService();
  const pageData = await travelService.getWhyTravelPageData();

  return {
    title: `${pageData.title} | Travlr`,
    description:
      pageData.subtitle ||
      "Discover why travel is important for personal growth, cultural understanding, and life experiences.",
    openGraph: {
      title: pageData.title,
      description:
        pageData.subtitle ||
        "Discover why travel is important for personal growth, cultural understanding, and life experiences.",
      type: "website",
      images: pageData.coverImage
        ? [
            {
              url: pageData.coverImage.src,
              width: 1200,
              height: 630,
              alt: pageData.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description:
        pageData.subtitle ||
        "Discover why travel is important for personal growth, cultural understanding, and life experiences.",
      images: pageData.coverImage ? [pageData.coverImage.src] : [],
    },
  };
}

export default async function WhyTravelPage() {
  const travelService = createTravelService();

  try {
    const whyTravelData: WhyTravelPageData =
      await travelService.getWhyTravelPageData();

    return <WhyTravel {...whyTravelData} />;
  } catch (error) {
    console.error("Error loading Why Travel page data:", error);

    // Return a simple fallback component if data fails to load
    return (
      <div className="error-container">
        <h1>Why Travel</h1>
        <p>We're currently updating our content. Please check back soon!</p>
      </div>
    );
  }
}
