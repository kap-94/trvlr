// hooks/useDestinationSearch.ts
import { useCallback, useState } from "react";
import debounce from "lodash/debounce";
import { createTripService } from "@/app/_services";
import { TripCardView } from "@/app/_types";

export interface DestinationItem {
  id: string;
  label: string;
  subtitle?: string;
  type: "location" | "country" | "region" | "trip";
  value: string;
  relevance?: number;
  href?: string;
}

export const useDestinationSearch = () => {
  const [items, setItems] = useState<DestinationItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const tripService = createTripService();

  const searchDestinations = useCallback(
    debounce(async (inputValue: string) => {
      if (!inputValue) {
        setItems([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await tripService.queryTrips();
        const trips = response.items;
        const searchTerm = inputValue.toLowerCase();
        const results: DestinationItem[] = [];

        // Procesar cada trip
        trips.forEach((trip: TripCardView) => {
          // Buscar en título y descripción del trip
          const titleMatch = trip.title.toLowerCase().includes(searchTerm);
          const descriptionMatch = trip.description
            ?.toLowerCase()
            .includes(searchTerm);
          const subtitleMatch = trip.subtitle
            ?.toLowerCase()
            .includes(searchTerm);

          if (titleMatch || descriptionMatch || subtitleMatch) {
            results.push({
              id: `trip-${trip.id}`,
              label: trip.title,
              subtitle: trip.subtitle || trip.description,
              type: "trip",
              value: trip.title,

              href: `/trips/${trip.slug}`, // Usará la navegación de Next.js

              relevance: titleMatch ? 100 : subtitleMatch ? 90 : 50,
            });
          }

          // Buscar en países
          trip.countries?.forEach((country) => {
            if (country.name.toLowerCase().includes(searchTerm)) {
              results.push({
                id: `country-${country.name}`,
                label: country.name,
                type: "country",
                value: country.name,
                relevance: 80,
              });
            }
          });

          // Buscar en categorías si es relevante
          trip.category?.forEach((category) => {
            const categoryName = category.toLowerCase();
            if (categoryName.includes(searchTerm)) {
              results.push({
                id: `category-${category}`,
                label: category,
                type: "region",
                value: category,
                relevance: 60,
              });
            }
          });
        });

        // Eliminar duplicados basados en id
        const uniqueResults = Array.from(
          new Map(results.map((item) => [item.id, item])).values()
        );

        // Ordenar por relevancia y coincidencia exacta
        const sorted = uniqueResults.sort((a, b) => {
          // Primero por coincidencia exacta
          const exactMatchA = a.label.toLowerCase() === searchTerm;
          const exactMatchB = b.label.toLowerCase() === searchTerm;
          if (exactMatchA && !exactMatchB) return -1;
          if (!exactMatchA && exactMatchB) return 1;

          // Luego por relevancia
          const relevanceDiff = (b.relevance || 0) - (a.relevance || 0);
          if (relevanceDiff !== 0) return relevanceDiff;

          // Finalmente por tipo
          const typeOrder = {
            trip: 0,
            country: 1,
            region: 2,
          };
          return (
            (typeOrder[a.type as keyof typeof typeOrder] || 99) -
            (typeOrder[b.type as keyof typeof typeOrder] || 99)
          );
        });

        setItems(sorted.slice(0, 8));
      } catch (error) {
        console.error("Error searching destinations:", error);
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [tripService]
  );

  return {
    items,
    isLoading,
    searchDestinations,
  };
};
