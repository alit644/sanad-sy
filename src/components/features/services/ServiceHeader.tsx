"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notify } from "@/utils/notify";
import { Check, Clock, Copy, FileText, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ServiceHeader = () => {
  const [copied, setCopied] = useState<boolean>(false);
  //! handle Copy Phone
  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+963 999 999 999");
    setCopied(true);
    notify("تم نسخ رقم الهاتف", "success");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="p-4 md:p-8 animate-fade-up">
      {/* Category & Freshness Row */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <Badge variant="pharmacy"> صيدلية</Badge>
        <Badge variant="verified">محدث حديثاً</Badge>
      </div>

      {/* Service Name */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
        صيدلية الأمل - خدمات طبية متكاملة
      </h1>

      {/* Location */}
      <div className="flex items-center gap-2 text-muted-foreground mb-6 ">
        <MapPin className="w-5 h-5 text-primary" />
        <span className="text-lg">دمشق • المزة</span>
      </div>

      {/* Phone */}
      <div className="flex items-center flex-wrap justify-between sm:flex-nowrap gap-4 p-4 bg-secondary/50 rounded-xl">
        <section className="flex items-center gap-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">رقم الهاتف</p>
        </section>
        <div className="flex items-center gap-2">
          <p
            className="text-xl font-semibold text-foreground tracking-wide"
            dir="ltr"
          >
            +963 999 999 999
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopyPhone}
            className="shrink-0"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
      {/* description */}
      <div className="my-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          وصف الخدمة
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-4">
          صيدلية الأمل تقدم خدمات صيدلانية شاملة للمجتمع منذ عام 2010. نوفر
          مجموعة واسعة من الأدوية والمستلزمات الطبية بأسعار معقولة. فريقنا من
          الصيادلة المؤهلين جاهز لتقديم الاستشارات الطبية المجانية.
        </p>
      </div>

      {/* Last Updated */}
      <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
        <Clock className="w-4 h-4" />
        آخر تحديث: منذ 3 أيام
      </p>
    </div>
  );
};

export default ServiceHeader;
