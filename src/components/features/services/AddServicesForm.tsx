/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MSelect } from "@/components/shared/MSelect";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { syCitiesWithoutAll } from "@/data";
import { Loader2, Send } from "lucide-react";
import { Activity, useState } from "react";
import { useForm } from "react-hook-form";
import SuccessAddCard from "./SuccessAddCard";
import RHFField from "@/components/shared/RHFField";
import { addServiceSchema, AddServiceSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { placeTypeOptionsWithoutAll } from "@/lib/constants";
import { addServiceAction } from "@/actions/servicesAction";
import { notify } from "@/utils/notify";
import { useFingerprint } from "@/components/FingerprintProvider";

const AddServicesForm = () => {
    const visitorId = useFingerprint();
// 29bb0ac8a66cb074bc09dd0297539901
  const form = useForm<AddServiceSchema>({
    resolver: zodResolver(addServiceSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "HOSPITAL",
      city: "damascus",
      district: "",
      phone: "",
    },
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // onSubmit handler
  const onSubmit = async (data: AddServiceSchema) => {
    try {
      const result = await addServiceAction(data);
      if (result.success) {
        notify(result.message || "تم إضافة الخدمة بنجاح!", "success");
        form.reset();
        setIsSubmitted(true);
      } else {
        notify(result.message || "حدث خطأ أثناء إضافة الخدمة، يرجى المحاولة لاحقاً", "error");
      }
    } catch (error: any) {
      // handle error
      console.error("Error in onSubmit:", error?.message || error);
    }
  };
  
  return (
    <div>
      <Activity mode={isSubmitted ? "hidden" : "visible"}>
        <form
          id="form-rhf-demo"
          onSubmit={form.handleSubmit(onSubmit)}
          className={
            form.formState.isSubmitting ? "opacity-80 pointer-events-none relative" : ""
          }
        >
          <FieldGroup>
            {/* Title */}

            <RHFField
              control={form.control}
              name="title"
              label="اسم الخدمة"
              description="لا تحتاج حساباً لمساعدة الآخرين"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  type="text"
                  id="title"
                  disabled={form.formState.isSubmitting}
                  aria-invalid={fieldState.invalid}
                  placeholder="مثال: عيادة طبية مجانية"
                  autoComplete="off"
                />
              )}
            />
            {/* City and District */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RHFField
                name="city"
                control={form.control}
                label="اختر المدينة"
                render={({ field }) => (
                  <MSelect
                    name="city"
                    value={field.value}
                    disabled={form.formState.isSubmitting}
                    onValueChange={field.onChange}
                    placeholder="اختر المدينة"
                    options={syCitiesWithoutAll}
                    icon={true}
                  />
                )}
              />
              <RHFField
                name="district"
                control={form.control}
                label="الحي / المنطقة"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    type="text"
                    id="district"
                    disabled={form.formState.isSubmitting}
                    aria-invalid={fieldState.invalid}
                    placeholder="مثال: شارع بغداد، بناء 12"
                    autoComplete="address-level2"
                  />
                )}
              />
            </div>
            {/* Category */}
            <RHFField
              name="category"
              control={form.control}
              label="اختر الفئة"
              render={({ field }) => (
                <MSelect
                  name="category"
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={form.formState.isSubmitting}
                  placeholder="اختر الفئة"
                  options={placeTypeOptionsWithoutAll}
                />
              )}
            />
            {/* Phone and Working Hours */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RHFField
                name="phone"
                control={form.control}
                label="رقم الهاتف"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    type="tel"
                    id="phone"
                    disabled={form.formState.isSubmitting}
                    aria-invalid={fieldState.invalid}
                    placeholder="09XXXXXXXX"
                    autoComplete="tel"
                  />
                )}
              />
              <RHFField
                name="hours"
                control={form.control}
                label="ساعات العمل"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    type="text"
                    id="hours"
                    disabled={form.formState.isSubmitting}
                    aria-invalid={fieldState.invalid}
                    placeholder="مثال: 9 صباحاً - 5 مساءً"
                    autoComplete="off"
                  />
                )}
              />
            </div>
            <RHFField
              name="description"
              control={form.control}
              label="وصف مختصر"
              description="مساهمتك قد توفر على شخص ما وقته"
              render={({ field, fieldState }) => (
                <Textarea
                  {...field}
                  id="description"
                  placeholder="وصف مختصر للخدمة..."
                  rows={6}
                  disabled={form.formState.isSubmitting}
                  className="min-h-24 resize-none"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
              )}
            />
          </FieldGroup>

          {/* Send Button */}
          <div className="pt-4">
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              size={"lg"}
              className="w-full group hover:scale-102"
              title=" إرسال الخدمة"
              aria-label=" إرسال الخدمة"
            >
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                {form.formState.isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    إرسال...
                  </span>
                ) : (
                  "إرسال الخدمة"
                )}
              </span>
            </Button>
          </div>
          {visitorId}
        </form>
       
      </Activity>

      <Activity mode={!isSubmitted ? "hidden" : "visible"}>
        <SuccessAddCard />
      </Activity>
    </div>
  );
};

export default AddServicesForm;
