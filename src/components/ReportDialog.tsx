/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { MSelect } from "@/components/shared/MSelect";
import { Button } from "./ui/button";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reportServiceSchema, ReportServiceSchema } from "@/utils/schema";
import { Field, FieldError, FieldGroup } from "./ui/field";
import { notify } from "@/utils/notify";
import { reportServiceAction } from "@/actions/servicesAction";
import { ReportReason } from "@/generated/prisma/browser";

const REPORT_REASONS = [
  { value: "WRONG_PHONE", label: "رقم هاتف خاطئ" },
  { value: "CLOSED", label: "المكان مغلق" },
  { value: "NOT_FOUND", label: "المكان غير موجود" },
  { value: "SPAM", label: "محتوى مزعج" },
  { value: "OTHER", label: "أخرى" },
];

interface ReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  placeTitle: string;
  placeId: string;
  sanadId: string;
}

export function ReportDialog({
  open,
  onOpenChange,
  placeTitle,
  placeId,
  sanadId,
}: ReportDialogProps) {
  const form = useForm<ReportServiceSchema>({
    resolver: zodResolver(reportServiceSchema),
    defaultValues: {
      report: "",
    },
  });

  const onSubmit = async (data: ReportServiceSchema) => {
    try {
      const result = await reportServiceAction(
        placeId,
        sanadId,
        data.report as ReportReason,
      );
      if (result.success) {
          notify("تم إرسال البلاغ", "success", {
            description: "شكراً لتعاونك معنا!",
            style: {
              fontSize: "15px",
            },
            descriptionClassName: "text-[#16a34a]!",
          });
        } else {
          notify("حدث خطأ أثناء إرسال البلاغ", "error", {
            description: result.message || "يرجى المحاولة مرة أخرى",
            style: {
              fontSize: "15px",
            },
            descriptionClassName: "text-[#ef4444]!",
          });
        }
      form.reset();
      onOpenChange(false);
    } catch (error: any) {
      notify("حدث خطأ", "error", {
        description: error?.message || "فشل إرسال البلاغ، حاول مرة أخرى",
        style: {
          fontSize: "15px",
        },
        descriptionClassName: "text-[#ef4444]!",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent dir="rtl">
        <DialogHeader className="mt-5">
          <DialogTitle>إبلاغ عن المكان</DialogTitle>
          <DialogDescription>{placeTitle}</DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="space-y-4">
              <Controller
                name="report"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <MSelect
                      name="report"
                      value={field.value}
                      onValueChange={field.onChange}
                      disabled={form.formState.isSubmitting}
                      placeholder="اختر سبب الإبلاغ"
                      options={REPORT_REASONS}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </FieldGroup>
        </form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" disabled={form.formState.isSubmitting}>
              الغاء
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant="error_outline"
            disabled={form.formState.isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
          >
            {form.formState.isSubmitting ? "جاري الإرسال..." : "تقديم البلاغ"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
