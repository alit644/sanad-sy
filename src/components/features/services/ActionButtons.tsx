"use client";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Edit2, Heart, Share2 } from "lucide-react";
import { notify } from "@/utils/notify";
import { useFingerprint } from "@/components/FingerprintProvider";
interface IActionButtons {
  title: string;
  description: string;
}
const ActionButtons = ({ title, description }: IActionButtons) => {
  const sanadId = useFingerprint();
  // 29bb0ac8a66cb074bc09dd0297539901
  const handleShare = async () => {
    try {
      await navigator.share({
        title: title,
        text: description,
        url: window.location.href,
      });
    } catch {
      navigator.clipboard.writeText(window.location.href);
      notify("تم نسخ الرابط", "success", {
        description: "يمكنك الآن مشاركة الرابط مع الآخرين",
        style: {
          fontSize: "15px",
        },
        descriptionClassName: "text-[#16a34a]!",
      });
    }
  };

  const handleReport = () => {
    notify("تم استلام البلاغ", "error", {
      description: "سنراجع المعلومات في أقرب وقت",
      style: {
        fontSize: "15px",
      },
      descriptionClassName: "text-[#ef4444]!",
    });
  };
  const handleConfirm = () => {
    notify("شكراً لتأكيدك! 🤍", "success", {
      description: "مساهمتك تساعد مجتمعنا على البقاء دقيقاً",
      style: {
        fontSize: "15px",
      },
      descriptionClassName: "text-[#16a34a]!",
    });
  };
  return (
    <div className="p-4 md:p-8 animate-fade-up">
      <h3 className="text-lg font-semibold text-foreground mb-4">المساهمة</h3>
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="verified"
          title="تأكيد المعلومات"
          aria-label="تأكيد المعلومات"
          className="flex-col h-auto py-4 gap-2"
          onClick={handleConfirm}
        >
          <Heart className="w-5 h-5" />
          <span className="text-sm">تأكيد المعلومات</span>
        </Button>

        <Button
          variant="secondary"
          title="اقتراح تعديل"
          aria-label="اقتراح تعديل"
          className="flex-col h-auto py-4 gap-2"
          // onClick={onSuggestEdit}
        >
          <Edit2 className="w-5 h-5" />
          <span className="text-sm">اقتراح تعديل</span>
        </Button>

        <Button
          variant="secondary"
          title="مشاركة"
          aria-label="مشاركة"
          className="flex-col h-auto py-4 gap-2"
          onClick={handleShare}
        >
          <Share2 className="w-5 h-5" />
          <span className="text-sm">مشاركة</span>
        </Button>

        <Button
          variant="error_outline"
          title="إبلاغ عن خطأ"
          aria-label="إبلاغ عن خطأ"
          className="flex-col h-auto py-4 gap-2"
          onClick={handleReport}
        >
          <AlertTriangle className="w-5 h-5" />
          <span className="text-sm">إبلاغ عن خطأ</span>
        </Button>
      </div>
      sanadID : {sanadId}
    </div>
  );
};

export default ActionButtons;
