import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Plus } from "lucide-react";
import { servicesStatsCards } from "@/data";
import StatsCards from "@/components/admin/cards/statsCards";
import ServicesTabs from "@/components/admin/ServicesTabs";
import FilterBarAdmin from "@/components/admin/shared/FilterBarAdmin";
import ServicesTable from "@/components/admin/ServicesTable";
import MPagination from "@/components/shared/MPagination";

export default function ServicesPage() {
  // بيانات وهمية للخدمات
  const services = [
    {
      id: 1,
      title: "عيادة الدكتور أحمد",
      category: "HOSPITAL",
      status: "VERIFIED",
      location: "دمشق",
      dateAdded: "2026-01-15",
    },
    {
      id: 2,
      title: "مدرسة الأمل",
      category: "EDUCATION",
      status: "PENDING",
      location: "حلب",
      dateAdded: "2026-01-10",
    },
    {
      id: 3,
      title: "مطعم الرحمة",
      category: "PHARMACY",
      status: "ARCHIVED",
      location: "حمص",
      dateAdded: "2026-01-05",
    },
    {
      id: 4,
      title: "مركز الطوارئ الطبي",
      category: "EMERGENCY",
      status: "REJECTED",
      location: "اللاذقية",
      dateAdded: "2026-01-12",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* رأس الصفحة */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <FileText className="h-8 w-8 text-blue-500" />
          إدارة الخدمات
        </h1>
        <p className="text-muted-foreground text-lg">
          إدارة ومراجعة الخدمات المسجلة في منصة سَنَد
        </p>
      </div>

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {servicesStatsCards.map((stat, index) => (
          <StatsCards key={index} {...stat} />
        ))}
      </div>
      <Separator className="my-8" />

      <ServicesTabs />
      {/* شريط البحث والفلترة */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <FilterBarAdmin />
      </div>

      {/* قسم جميع الخدمات */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">جميع الخدمات</h2>
        <ServicesTable services={services} />
        {/* Pagination */}
              <div className="mt-4 flex justify-center">
                <MPagination />
              </div>
      </div>

      {/* رسالة فارغة إذا لم تكن هناك خدمات */}
      {services.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">لا توجد خدمات مسجلة</h3>
          <p className="text-muted-foreground mb-4">
            ابدأ بإضافة خدمات جديدة للمنصة
          </p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            إضافة خدمة جديدة
          </Button>
        </div>
      )}
    </div>
  );
}
