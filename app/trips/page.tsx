// app/trips/page.tsx
import { Suspense } from "react";
import { Metadata } from "next";
import classNames from "classnames/bind";
import { TripGrid } from "@/app/_modules";
import { Button, SectionHeader, Spinner, Typography } from "@/app/_components";
import { getTripsData } from "./actions";
import styles from "./TripsPage.module.scss";

const cx = classNames.bind(styles);

interface PageProps {
  searchParams: {
    search?: string;
    page?: string;
  };
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const search = searchParams?.search;

  return {
    title: search ? `Results for "${search}" - Trips` : "Explore our Trips",
    description: search
      ? `Browse trips matching "${search}" and find your next adventure`
      : "Discover amazing trips and destinations around the world",
  };
}

async function TripGridContent({
  searchQuery,
  page,
}: {
  searchQuery?: string;
  page?: number;
}) {
  const { trips } = await getTripsData(searchQuery, page);

  return (
    <div className={cx("trips-content")}>
      {/* Resultados de búsqueda */}
      {searchQuery && trips.items.length > 0 && (
        <div className={cx("search-results")}>
          <SectionHeader
            title={`Results for "${searchQuery}"`}
            subtitle={`Found ${trips.metadata.total} 
            ${trips.metadata.total === 1 ? "trip" : "trips"}`}
            className={cx("trips-page__header")}
          />
        </div>
      )}

      {/* Grid de viajes */}
      {trips.items.length > 0 ? (
        <TripGrid trips={trips.items} />
      ) : (
        <div className={cx("no-results")}>
          <Typography variant="h3" className={cx("no-results__title")}>
            No trips found
          </Typography>
          <Typography className={cx("no-results__text")}>
            Try adjusting your search criteria or explore our other destinations
          </Typography>

          <Button
            variant="link-dark"
            href="/trips"
            target="_self"
            className={cx("no-results__button")}
          >
            Explore Guides
          </Button>
        </div>
      )}

      {/* Paginación - Si la necesitas después */}
      {trips.metadata.totalPages > 1 && (
        <div className={cx("pagination-wrapper")}>
          {/* Aquí puedes añadir tu componente de paginación */}
        </div>
      )}
    </div>
  );
}

export default async function TripsPage({ searchParams }: PageProps) {
  const search = searchParams?.search;
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  return (
    <div className={cx("trips-page")}>
      {/* Título de la página - Solo se muestra si no hay búsqueda */}
      {!search && (
        <SectionHeader
          title={"Browse Our Collection of Travel Guides"}
          className={cx("trips-page__header")}
        />
      )}

      <Suspense
        fallback={
          <div className={cx("loading-wrapper")}>
            <Spinner />
          </div>
        }
        key={search}
      >
        <TripGridContent searchQuery={search} page={page} />
      </Suspense>
    </div>
  );
}
