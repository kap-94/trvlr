import { Activity } from "./Activity.types";
import { Country, Image } from "@/app/_types";
import { Coordinates, Location } from "./Location.types";
import { PricingDetails } from "./Pricing.types";
import { Review } from "./Review.types";

export enum TravelCategory {
  ADVENTURE = "adventure",
  CULTURAL = "cultural",
  LUXURY = "luxury",
  ECOTOURISM = "ecotourism",
  WILDLIFE = "wildlife",
  BEACH = "beach",
  MOUNTAIN = "mountain",
  URBAN = "urban",
  RURAL = "rural",
  FOOD_WINE = "food_wine",
  WELLNESS = "wellness",
  EDUCATIONAL = "educational",
  PHOTOGRAPHY = "photography",
  VOLUNTEER = "volunteer",
  RELIGIOUS = "religious",
  SPORTS = "sports",
  FESTIVAL = "festival",
  CRUISE = "cruise",
}

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: "draft" | "published" | "archived";
  locale: string;
}

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: Image;
  structuredData?: Record<string, unknown>;
}

export interface AnalyticsData {
  views: number;
  uniqueViews: number;
  bookmarks: number;
  shares: number;
  clickThroughRate?: number;
  averageTimeOnPage?: number;
  conversionRate?: number;
}

interface Trip extends BaseEntity {
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  largeInspirationalText: string;
  category: TravelCategory[];
  countries: Country[];

  // Location Information
  mapZoom?: number;
  mainLocation: Location;
  additionalLocations: Location[];
  itinerary?: {
    day: number;
    location: Location;
    activities: Activity[];
    // accommodations?: Accommodation;
  }[];

  // Travel Details
  duration: {
    days: number;
    nights: number;
  };
  startDates: string[];
  endDates: string[];

  // Experience Details
  activities: Activity[];
  highlights: string[];
  included: string[];
  excluded: string[];

  // Cultural Information
  culturalNotes: {
    customs: string[];
    etiquette: string[];
    localPhrases: {
      original: string;
      pronunciation: string;
      translation: string;
    }[];
  };

  // Requirements & Preparation
  requirements: {
    visa: string[];
    vaccines: string[];
    insurance: string[];
    documents: string[];
    physical: string[];
  };

  // Pricing & Booking
  pricing: PricingDetails;
  availability: {
    startDate: string;
    endDate: string;
    spotsTotal: number;
    spotsRemaining: number;
  }[];

  // Media & Content
  media: {
    coverImage: Image;
    gallery?: Image[];
    videos?: {
      url: string;
      thumbnail: Image;
      title: string;
    }[];
    virtualTour?: string;
  };

  // Reviews & Ratings
  reviews: Review[];
  rating: {
    average: number;
    total: number;
    distribution: Record<number, number>;
  };

  // Additional Information
  faq: {
    question: string;
    answer: string;
    category: string;
  }[];

  // SEO & Analytics
  seo?: SEOData;
  analytics: AnalyticsData;

  // Related Content
  relatedTrips?: TripCardView[];
  suggestedTrips?: TripCardView[];
}

// Vista resumida para cards de viajes
interface TripCardView {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  category: TravelCategory[];
  countries: Pick<Country, "name">[];
  duration: {
    days: number;
    nights: number;
  };
  pricing?: PricingDetails;
  coverImage: Image;
  rating: {
    average: number;
    total: number;
  };
  availability?: {
    spotsRemaining: number;
    nextAvailableDate: string;
  };
  analytics?: {
    views: number;
    bookmarks: number;
  };
}

// Vista detallada para la página del viaje
interface TripDetailView {
  averageCost: number;
  bestTimeToVisit: string;
  coordinates: Coordinates;
  coverImage: Image;
  culture: string;
  currency: string;
  description: string;
  foodHighlights: string;
  id: string;
  images: Image[];
  largeInspirationalText: string;
  locations: Location[];
  mapZoom: number;
  price: number;
  rating: number;
  safetyTips: string;
  subtitle: string;
  title: string;
  visaInfo: string;
  relatedTrips: TripCardView[];
  suggestedTrips: TripCardView[];
}

interface TripQueryParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: "asc" | "desc";
  status?: string;
  category?: TravelCategory | TravelCategory[];
  location?: string | string[];
  minPrice?: number;
  maxPrice?: number;
  search?: string; // Añadimos el parámetro de búsqueda
}

export type { Trip, TripCardView, TripDetailView, TripQueryParams };
