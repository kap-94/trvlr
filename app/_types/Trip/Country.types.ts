// Types for country-related data structures

/**
 * Represents a basic country reference
 */
export interface CountryReference {
  id: number;
  name: string;
  slug: string;
}

/**
 * Represents a complete country entity
 */
export interface Country extends CountryReference {
  code: string; // ISO country code (e.g., "US", "ES")
  phoneCode?: string; // International calling code (e.g., "+1", "+34")
  currency?: {
    code: string; // ISO currency code (e.g., "USD", "EUR")
    symbol: string; // Currency symbol (e.g., "$", "€")
    name: string; // Currency name (e.g., "US Dollar", "Euro")
  };
  languages?: Language[]; // Official languages
  flag?: string; // Flag emoji or URL
  active?: boolean; // Whether the country is active in the system
  metadata?: CountryMetadata;
}

/**
 * Represents a language entity
 */
export interface Language {
  code: string; // ISO language code (e.g., "en", "es")
  name: string; // Language name (e.g., "English", "Spanish")
  native?: string; // Native name (e.g., "English", "Español")
  primary?: boolean; // Whether it's the primary language
}

/**
 * Additional metadata for countries
 */
export interface CountryMetadata {
  continent?: string;
  region?: string;
  capital?: string;
  timezone?: string;
  population?: number;
  area?: number; // in km²
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

/**
 * Parameters for querying countries
 */
export interface CountryQueryParams {
  search?: string; // Search by name or code
  continent?: string;
  region?: string;
  language?: string;
  active?: boolean;
  sort?: "name" | "population" | "area";
  order?: "asc" | "desc";
  limit?: number;
  offset?: number;
}

/**
 * Response format for country queries
 */
export interface CountryQueryResponse {
  items: Country[];
  metadata: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

/**
 * Country creation/update payload
 */
export interface CountryPayload {
  name: string;
  slug: string;
  code: string;
  phoneCode?: string;
  currency?: {
    code: string;
    symbol: string;
    name: string;
  };
  languages?: Omit<Language, "name">[];
  flag?: string;
  active?: boolean;
  metadata?: Partial<CountryMetadata>;
}

/**
 * Response for country operations
 */
export interface CountryResponse {
  data: Country;
  message: string;
  success: boolean;
}

/**
 * Country validation errors
 */
export interface CountryValidationErrors {
  name?: string[];
  slug?: string[];
  code?: string[];
  phoneCode?: string[];
  currency?: {
    code?: string[];
    symbol?: string[];
    name?: string[];
  };
  languages?: {
    code?: string[];
    primary?: string[];
  }[];
  metadata?: {
    continent?: string[];
    region?: string[];
    coordinates?: {
      latitude?: string[];
      longitude?: string[];
    };
  };
}

/**
 * Type guard to check if an object is a Country
 */
export function isCountry(obj: any): obj is Country {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.slug === "string" &&
    typeof obj.code === "string"
  );
}

/**
 * Country sort options type
 */
export type CountrySortOptions = {
  field: keyof Country | keyof CountryMetadata;
  direction: "asc" | "desc";
};

/**
 * Country filter options type
 */
export type CountryFilterOptions = {
  continent?: string[];
  region?: string[];
  language?: string[];
  active?: boolean;
  population?: {
    min?: number;
    max?: number;
  };
  area?: {
    min?: number;
    max?: number;
  };
};
