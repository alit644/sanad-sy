import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ServicesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="h-full">
          <CardContent>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Badges Skeleton */}
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <Skeleton className="h-5 w-16 rounded-full" />
                  <Skeleton className="h-5 w-20 rounded-full" />
                </div>

                {/* Title Skeleton */}
                <Skeleton className="h-6 w-3/4 mb-2 rounded-md" />

                {/* Location Skeleton */}
                <div className="flex items-center gap-1.5">
                  <Skeleton className="h-4 w-4 shrink-0 rounded-full" />
                  <Skeleton className="h-4 w-1/2 rounded-md" />
                </div>
              </div>

              {/* Phone Button Skeleton */}
              <div className="flex flex-col gap-2 shrink-0">
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>

            {/* Footer Button Skeleton */}
            <div className="mt-4 pt-4 border-t border-border">
              <Skeleton className="h-9 w-full rounded-md" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesSkeleton;
