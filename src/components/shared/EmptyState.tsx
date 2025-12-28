import { Plus, Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="animate-fade-up flex flex-col items-center justify-center py-16 px-4 text-center ">
      <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <Search className="h-10 w-10 text-muted-foreground" />
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-2">
        لم يتم العثور على نتائج
      </h3>

      <p className="text-muted-foreground max-w-sm mb-6">
        لا توجد خدمات مطابقة حاليًا، يمكنك المساعدة بإضافة خدمة 🤍{" "}
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="outline">مسح الفلاتر</Button>
        <Button asChild aria-label=" إضافة خدمة جديدة">
          <Link href={'/add-services'}>
            <Plus className="h-4 w-4 mr-2" />
            إضافة خدمة جديدة
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
