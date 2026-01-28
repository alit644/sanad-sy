/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Edit2, Heart, Share2 } from "lucide-react";
import { notify } from "@/utils/notify";
import { useFingerprint } from "@/components/FingerprintProvider";
import { confirmServiceAction } from "@/actions/servicesAction";
import { useState, useTransition } from "react";
import { ReportDialog } from "@/components/ReportDialog";
interface IActionButtons {
  placeId: string;
  title: string;
  description: string;
}
const ActionButtons = ({ title, description, placeId }: IActionButtons) => {
  const [isPending, startTransition] = useTransition();
  const [reportOpen, setReportOpen] = useState<boolean>(false);

  const sanadId = useFingerprint();
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
    setReportOpen(true);
    
  };
  const handleConfirm = async () => {
    try {
      startTransition(async () => {
        const result = await confirmServiceAction(placeId, sanadId as string);
        if (result.success) {
          notify("تم تأكيد الخدمة", "success", {
            description: "شكراً لك!",
            style: {
              fontSize: "15px",
            },
            descriptionClassName: "text-[#16a34a]!",
          });
        } else {
          notify("حدث خطأ أثناء تأكيد الخدمة", "error", {
            description: result.message || "يرجى المحاولة مرة أخرى",
            style: {
              fontSize: "15px",
            },
            descriptionClassName: "text-[#ef4444]!",
          });
        }
      });
    } catch (error: any) {
      notify("حدث خطأ أثناء تأكيد الخدمة", "error", {
        description: error.message || "يرجى المحاولة مرة أخرى",
        style: {
          fontSize: "15px",
        },
        descriptionClassName: "text-[#ef4444]!",
      });
    }
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
          disabled={isPending}
        >
          <Heart className="w-5 h-5" />
          <span className="text-sm">
            {isPending ? "جاري التأكيد..." : "تأكيد المعلومات"}
          </span>
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
        <ReportDialog
          open={reportOpen}
          onOpenChange={setReportOpen}
          placeTitle={title}
          sanadId={sanadId as string}
          placeId={placeId}
        />
      </div>
      <br />
    </div>
  );
};

export default ActionButtons;
