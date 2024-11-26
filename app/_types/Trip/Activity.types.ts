// src/types/trip/activity.types.ts
import { Image } from "@/app/_types";
import { Review } from "./Review.types";

interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export enum ActivityCategory {
  ADVENTURE = "adventure",
  CULTURAL = "cultural",
  NATURE = "nature",
  RELAXATION = "relaxation",
  FOOD = "food",
  ENTERTAINMENT = "entertainment",
  EDUCATION = "education",
  SPORTS = "sports",
}

export enum DifficultyLevel {
  EASY = "easy",
  MODERATE = "moderate",
  CHALLENGING = "challenging",
  EXPERT = "expert",
}

export interface ActivitySchedule {
  duration: {
    value: number;
    unit: "minutes" | "hours" | "days";
  };
  availability?: {
    daysOfWeek: number[];
    timeSlots?: string[];
    seasonality?: string[];
  };
  requiredBookingNotice?: {
    value: number;
    unit: "hours" | "days";
  };
}

export interface ActivityRequirements {
  minimumAge?: number;
  maximumAge?: number;
  fitnessLevel?: "low" | "medium" | "high";
  requiredEquipment?: string[];
  providedEquipment?: string[];
  prerequisites?: string[];
}

export interface Activity extends BaseEntity {
  name: string;
  description: string;
  category?: ActivityCategory[];
  difficulty?: DifficultyLevel;
  location?: Location;
  schedule?: ActivitySchedule;
  pricing?: {
    basePrice: number;
    currency: string;
    pricePerPerson: boolean;
    groupDiscounts?: {
      minParticipants: number;
      discountPercentage: number;
    }[];
    includedServices: string[];
    excludedServices: string[];
  };
  requirements?: ActivityRequirements;
  capacity?: {
    minimum: number;
    maximum: number;
    availableSpots?: number;
  };
  cancellationPolicy?: {
    freeCancellationPeriod?: number;
    refundPolicy: string;
  };
  images?: Image[];
  guide?: {
    name: string;
    languages: string[];
    experience: number;
    certification?: string[];
  };
  reviews?: Review[];
  rating?: number;
  highlights?: string[];
  safetyMeasures?: string[];
  sustainabilityInfo?: {
    environmentalImpact: string;
    localCommunityBenefits: string;
    sustainablePractices: string[];
  };
}
