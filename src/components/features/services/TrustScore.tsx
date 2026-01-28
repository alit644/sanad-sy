/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { getTrustBadge } from "@/lib/place.config";
import { ShieldCheck, TrendingUp } from "lucide-react";
interface ITrustScore {
  confirmCountCached:number,
  trustScore:number,
}
const TrustScore = ({ confirmCountCached,trustScore }: ITrustScore) => {
  const trust = getTrustBadge(trustScore);

  return (
    <div className="p-4 md:p-8 animate-fade-up">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-primary" />
        مؤشرات الثقة
      </h3>
      <div className="space-y-4">
        {/* Trust Score Gauge */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">مستوى الثقة</span>
            <Badge variant={trust.variant as any}>
              {trust.label}
            </Badge>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full ${"bg-[#2EB88A]"} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${trustScore}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-2xl font-bold text-foreground">{trustScore}</span>
            <span className="text-sm text-muted-foreground self-end">/100</span>
          </div>
        </div>
        {/* /* Community Confirmations */}
        <div className="flex items-center justify-between py-3 border-t border-border/50">
          <div className="flex items-center gap-2">
            <span className="text-xl">🤍</span>
            <span className="text-sm text-muted-foreground">
              تأكيدات المجتمع
            </span>
          </div>
          <span className="text-lg font-semibold text-foreground">{confirmCountCached}</span>
        </div>

        {/* AI Review Badge  */}

        <div className="flex items-center gap-3 py-3 px-4 bg-primary/5 rounded-xl border border-primary/20">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg">🧠</span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              تمت المراجعة بواسطة Sanad AI
            </p>
            <p className="text-xs text-muted-foreground">
              تم التحقق من المعلومات آلياً
            </p>
          </div>
        </div>
        {/* Trend Indicator */}
        <div className="flex items-center gap-2 text-sm text-[#2EB88A]">
          <TrendingUp className="w-4 h-4" />
          <span>ارتفع الموثوقية بنسبة 12% هذا الشهر</span>
        </div>
      </div>
    </div>
  );
};

export default TrustScore;
