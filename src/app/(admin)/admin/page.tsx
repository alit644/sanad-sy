import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Settings, Shield } from "lucide-react";
import { adminSections, statsCards } from "@/data";
import PendingReportsCard from "@/components/admin/cards/PendingReportsCard";
import AdminSectionCard from "@/components/admin/cards/AdminSectionCard";
import RecentActivityCard from "@/components/admin/cards/RecentActivityCard";
import StatsCards from "@/components/admin/cards/statsCards";

export default function AdminPage() {
  // بيانات وهمية للبلاغات المعلقة
  const pendingReports = [
    {
      id: 1,
      title: "بلاغ عن خدمة غير صحيحة",
      description: "تم الإبلاغ عن خدمة طبية غير موجودة",
      status: "pending",
      date: "2026-02-01",
      type: "service",
    },
    {
      id: 2,
      title: "بلاغ عن محتوى غير مناسب",
      description: "محتوى غير مناسب في وصف الخدمة",
      status: "pending",
      date: "2026-01-30",
      type: "content",
    },
    {
      id: 3,
      title: "بلاغ عن معلومات خاطئة",
      description: "معلومات الاتصال غير صحيحة",
      status: "pending",
      date: "2026-01-29",
      type: "info",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* رأس الصفحة */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          لوحة تحكم الإدارة
        </h1>
        <p className="text-muted-foreground text-lg">
          مرحباً بك في لوحة تحكم الإدارة - إدارة شاملة لمنصة سَنَد
        </p>
      </div>
      {/* الإحصائيات السريعة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      
       {statsCards.map((stat , index) => (
          <StatsCards key={index} {...stat} />
        ))}
      </div>
      <Separator className="my-8" />
      {/* قسم المراجعات المعلقة */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="h-6 w-6 text-orange-500" />
          <h2 className="text-2xl font-semibold">المراجعات المعلقة</h2>
          <Badge variant="secondary" className="ml-auto">
            {pendingReports.length} معلق
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pendingReports.map((report) => (
            <PendingReportsCard report={report} key={report.id} />
          ))}
        </div>
      </div>
      <Separator className="my-8" />
      {/* أقسام الإدارة الرئيسية  */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Settings className="h-6 w-6" />
          أقسام الإدارة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminSections.map((section, index) => (
            <AdminSectionCard key={index} section={section} />
          ))}
        </div>
      </div>
      {/* قسم النشاط الأخير */}
      <RecentActivityCard />
    </div>
  );
}
