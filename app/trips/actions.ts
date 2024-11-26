// app/trips/actions.ts
import { createTripService } from "@/app/_services";

export async function getTripsData(searchQuery?: string, page: number = 1) {
  const tripService = createTripService();

  try {
    const [trips] = await Promise.all([
      tripService.queryTrips({
        page,
        limit: 12,
        status: "published",
        order: "desc",
        sortBy: "date",
        search: searchQuery,
      }),
    ]);

    return {
      trips,
    };
  } catch (error) {
    console.error("Error fetching trip data:", error);
    throw error;
  }
}
