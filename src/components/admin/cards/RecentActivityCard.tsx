import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "../../ui/card";

const RecentActivityCard = () => {
  return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <TrendingUp className="h-6 w-6" />
          النشاط الأخير
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">تم إضافة خدمة جديدة</p>
                  <p className="text-sm text-muted-foreground">منذ 2 ساعات</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">بلاغ جديد يتطلب مراجعة</p>
                  <p className="text-sm text-muted-foreground">منذ 4 ساعات</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">تم تحديث إعدادات النظام</p>
                  <p className="text-sm text-muted-foreground">منذ يوم واحد</p>
                </div>
              </div>
            </div>
            
          </CardContent>
        </Card>
      </div>
  );
}

export default RecentActivityCard;
