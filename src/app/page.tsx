import { GridBackgroundDemo } from "@/components/HeroGridBg";
import FilterBar from "@/components/FilterBar";
import { Suspense } from "react";
import ServicesGrid from "@/components/features/services/ServicesGrid";
import ServicesSkeleton from "@/components/features/services/ServicesSkeleton";
export const revalidate = 180;
export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <GridBackgroundDemo />
        {/* Main Content + Filter-Bar */}

        <section className=" container mx-auto my-8 px-4 md:px-0">
          <FilterBar />
          {/* Service cards will be rendered here */}
          <Suspense fallback={<ServicesSkeleton />}>
            <ServicesGrid />
          </Suspense>
        </section>

        {/* Error State */}
      </main>
    </div>
  );
}
