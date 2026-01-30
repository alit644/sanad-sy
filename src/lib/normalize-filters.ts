import { IFilters } from "@/utils/types";

/**
 * Normalize a given value to be usable in the filter.
 * If the value is undefined, null or starts with "all-", return undefined.
 * Otherwise, return the trimmed string value.
 * @param {unknown} value The value to be normalized.
 * @returns {string | undefined} The normalized value or undefined if it can't be used.
 */
const normalizeValue = (value?: unknown): string | undefined => {
  if (!value) return undefined;

  const v = value.toString().trim();

  if (!v || v.startsWith("all-")) return undefined;

  return v;
};

/**
 * Normalize the given filters to be usable in the filter.
 * It will return an object with the same keys as the given filters, but with the values
 * normalized according to the following rules:
 * - If the value is undefined, null or starts with "all-", return undefined.
 * - Otherwise, return the trimmed string value.
 * @param {IFILTERs} rawFilters The filters to be normalized.
 */
export const normalizeFilters = (rawFilters: IFilters) => {
  return {
    q: normalizeValue(rawFilters.q),
    city: normalizeValue(rawFilters.city),
    types: normalizeValue(rawFilters.types),
    status: normalizeValue(rawFilters.status),
  };
};
