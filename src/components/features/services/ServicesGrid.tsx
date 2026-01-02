import { getAllServicesAction } from "@/actions/servicesAction";
import ServiceCard from "@/components/cards/ServiceCard";
import EmptyState from "@/components/shared/EmptyState";
import ErrorState from "@/components/shared/ErrorState";
import MPagination from "@/components/shared/MPagination";

const ServicesGrid = async () => {
  const data = await getAllServicesAction();

  if (!data.success) return <ErrorState message={data.message} />;

  if ((data.data?.length ?? 0) === 0) return <EmptyState />;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        {data?.data?.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <MPagination />
      </div>
    </>
  );
};

export default ServicesGrid;
