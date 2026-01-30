"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  //! تحديث الفلاتر في URL
  const updateFilter = useCallback(
    (filterName: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      if (value && value !== "all") {
        params.set(filterName, value);
      } else {
        params.delete(filterName);
      }

      // إعادة تعيين الصفحة عند تغيير الفلتر
      params.delete("page");

      const queryString = params.toString();
      const newUrl = queryString ? `?${queryString}` : "/";

      router.push(newUrl, { scroll: false });
    },
    [router, searchParams],
  );
  //! الحصول على قيمة فلتر معينة من URL
  const getFilterValue = useCallback(
    (filterName: string) => {
      return searchParams.get(filterName) || undefined;
    },
    [searchParams],
  );

  //! مسح جميع الفلاتر وإعادة التوجيه إلى الصفحة الرئيسية
  const clearFilters = useCallback((options?: { keepQuery?: boolean }) => {
   const params = new URLSearchParams();

    if (options?.keepQuery) {
      const q = searchParams.get("q");
      if (q) params.set("q", q);
    }

    const queryString = params.toString();
    router.push(queryString ? `/?${queryString}` : "/");
}, [router, searchParams]);

  return {
    updateFilter,
    getFilterValue,
    clearFilters,
    searchParams,
  };
};
