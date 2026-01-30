import { GridBackgroundDemo } from "@/components/HeroGridBg";
import FilterBar from "@/components/FilterBar";
import { Suspense } from "react";
import ServicesGrid from "@/components/features/services/ServicesGrid";
import ServicesSkeleton from "@/components/features/services/ServicesSkeleton";
import HighlightText from "@/components/shared/HighlightText";
// export const revalidate = 180;
type TSearchParams = Promise<{
  q?: string;
  city?: string;
  types?: string;
  status?: string;
}>;

export default async function Home({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const filterV = {
    q: (await searchParams).q || "",
    city: (await searchParams).city || "",
    types: (await searchParams).types || "",
    status: (await searchParams).status || "",
  };
  return (
    <div className="min-h-screen">
      <main>
        <GridBackgroundDemo />
        {/* Main Content + Filter-Bar */}
        <section className=" container mx-auto my-8 px-4 md:px-0">
          <Suspense fallback={<div>جاري التحميل...</div>}>
            <FilterBar />
          </Suspense>
          <div className="my-4">
            <HighlightText text="مستشفى الفهد بدمشق" searchQuery="مستشفى " />
          </div>
          {/* Service cards will be rendered here */}
          <Suspense fallback={<ServicesSkeleton />}>
            <ServicesGrid {...filterV} />
          </Suspense>
        </section>

        {/* Error State */}
      </main>
    </div>
  );
}
