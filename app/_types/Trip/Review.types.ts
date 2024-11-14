// src/types/trip/review.types.ts
import { Image } from "@/app/_types";

interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Review extends BaseEntity {
  tripId?: string;
  authorName: string;
  userId?: string;
  rating: number;
  title: string;
  content: string;
  images?: Image[];
  tags?: string[];
  helpfulVotes?: number;
  verifiedPurchase?: boolean;
  response?: {
    content: string;
    timestamp: string;
    authorType: "owner" | "manager" | "guide";
  };
  categories?: {
    value: number;
    category: "value" | "service" | "location" | "cleanliness" | "accuracy";
  }[];
}
