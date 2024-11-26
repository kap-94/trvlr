// src/types/trip/pricing.types.ts
export interface PriceTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface SeasonalPricing {
  season: string;
  startDate: string;
  endDate: string;
  multiplier: number;
}

export interface PricingDetails {
  basePrice: {
    amount: number;
    currency: string;
  };
  tiers?: PriceTier[];
  seasonalPricing?: SeasonalPricing[];
  discounts: {
    size: number;
    discount: number;
  }[];
  additionalFees?: {
    name: string;
    amount: number;
    description: string;
    optional: boolean;
  }[];
  cancellationPolicy?: {
    freeCancellationPeriod: number;
    refundSchedule: {
      daysBeforeStart: number;
      refundPercentage: number;
    }[];
  };
}
