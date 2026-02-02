"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

const ServicesTabs = ({status}: {status:string}) => {
  const router = useRouter();


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
