"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";

const ServicesTabs = () => {
  const router = useRouter();
  const params = useSearchParams();

  const status = params.get("status") ?? "pending";

  return (
    <Tabs
    
      value={status}
      onValueChange={(value) =>
        router.push(`/admin/services?status=${value}`, { scroll: false })
      }
    >
      <TabsList  className="w-full justify-start mb-4">
        <TabsTrigger value="pending">معلّقة </TabsTrigger>
        <TabsTrigger value="active">نشطة </TabsTrigger>
        <TabsTrigger value="all">الكل </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ServicesTabs;
