// src/lib/core/utils/sorting.ts
export interface SortConfig<T> {
  field: keyof T;
  direction: "asc" | "desc";
}

export function applySorting<T>(items: T[], config: SortConfig<T>): T[] {
  return [...items].sort((a, b) => {
    const aValue = a[config.field];
    const bValue = b[config.field];

    const comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;

    return config.direction === "asc" ? comparison : -comparison;
  });
}
