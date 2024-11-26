// src/types/trip/location.types.ts
import { Country, Image, Link } from "@/app/_types";

interface BaseEntity {
  id: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
  altitude?: number;
}

export interface Location extends BaseEntity {
  name: string;
  type: "city" | "region" | "country" | "landmark" | "nature";
  excerpt: string;
  coordinates: Coordinates;
  country: Country;
  link?: Link;
  image?: Image;
}
// export interface Address {
//   street?: string;
//   city: string;
//   state?: string;
//   country: string;
//   postalCode?: string;
//   formattedAddress: string;
// }

// export interface LocationWeather {
//   seasonal: string;
//   bestTimeToVisit: string[];
//   temperature: {
//     summer: { min: number; max: number };
//     winter: { min: number; max: number };
//     unit: "C" | "F";
//   };
//   rainfall: {
//     annual: number;
//     unit: "mm" | "inches";
//   };
// }

// export interface LocationAccessibility {
//   nearestAirport?: string;
//   distanceFromAirport?: number;
//   publicTransport: boolean;
//   roadAccess: boolean;
//   terrainDifficulty: "easy" | "moderate" | "difficult";
// }

// export interface Location extends BaseEntity {
//   name: string;
//   type: "city" | "region" | "country" | "landmark" | "nature";
//   excerpt: string;
//   coordinates: Coordinates;
//   country: Country;
//   address?: Address;
//   timezone?: string;
//   weather?: LocationWeather;
//   accessibility?: LocationAccessibility;
//   images?: Image[];
//   mapData?: {
//     zoomLevel: number;
//     bounds?: {
//       northeast: Coordinates;
//       southwest: Coordinates;
//     };
//   };
//   localInfo?: {
//     language: string[];
//     currency: string;
//     emergencyContacts: {
//       police: string;
//       ambulance: string;
//       firestation?: string;
//     };
//   };
// }
