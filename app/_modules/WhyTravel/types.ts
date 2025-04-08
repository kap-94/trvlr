import { IconName } from "@/app/_components/CustomIcon";

interface ContentSection {
  order: number;
  title: string;
  body: string;
  image?: any;
  link?: {
    href: string;
    label: string;
  };
}

interface Testimonial {
  name: string;
  location: string;
  avatar: any;
  text: string;
}

interface InspirationQuote {
  text: string;
  author: string;
}

interface BenefitItem {
  title: string;
  description: string;
  icon: IconName;
}

interface Statistic {
  value: string; // Could be a number with a symbol like 70% or 4.5M
  label: string;
}

interface RelatedTrip {
  id: number;
  title: string;
  description: string;
  slug: string;
  image?: any;
}

interface FAQ {
  question: string;
  answer: string;
}

interface CallToAction {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: any; // Added backgroundImage
}

// Updated RelatedTrip to match TripCardView structure
interface RelatedTrip {
  id: number;
  title: string;
  subtitle: string; // Changed from description
  slug: string;
  coverImage: any; // Changed from image
  rating: {
    average: number;
    count?: number;
  };
  pricing: {
    basePrice: {
      amount: number;
      currency?: string;
    };
  };
}

// Option 1: Export the interface directly
export interface WhyTravelPageData {
  title: string;
  subtitle: string;
  coverImage: any;
  introduction: string;
  benefits: BenefitItem[];
  inspirationQuotes: InspirationQuote[];
  sections: ContentSection[];
  testimonials: Testimonial[];
  statistics: Statistic[];
  relatedTrips: RelatedTrip[];
  faqs: FAQ[];
  callToAction: CallToAction;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

// Export the other types
export type {
  ContentSection,
  Testimonial,
  InspirationQuote,
  BenefitItem,
  Statistic,
  RelatedTrip,
  FAQ,
  CallToAction,
};
