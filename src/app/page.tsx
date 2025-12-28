import { GridBackgroundDemo } from "@/components/HeroGridBg";
import FilterBar from "@/components/FilterBar";
import ServiceCard from "@/components/cards/ServiceCard";
import { testServices } from "@/data";
import MPagination from "@/components/shared/MPagination";
import EmptyState from "@/components/shared/EmptyState";

export default function Home() {
  return (
    <div className="min-h-screen" >
      <main>
        <GridBackgroundDemo />
        {/* Main Content + Filter-Bar */}
        <section className=" container mx-auto my-8 px-4 md:px-0">
          <FilterBar />
          {/* Service cards will be rendered here */}
          {testServices.length > 0 ? (
            // Render services when they exist
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                {testServices.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-4 flex justify-center">
                <MPagination />
              </div>
            </>
          ) : (
            // Show empty state when no services
            <div className="col-span-full flex justify-center">
              <EmptyState />
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
// components
// -cards
// -features
// -admain
// -services
// -shared
// -ui
