"use client";

import { MSelect } from "@/components/shared/MSelect";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { serviceTypesWithoutAll, syCitiesWithoutAll } from "@/data";
import { Send } from "lucide-react";
import { Activity, useState } from "react";
import { useForm } from "react-hook-form";
import SuccessAddCard from "./SuccessAddCard";
import RHFField from "@/components/shared/RHFField";
import { addServiceSchema, AddServiceSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const AddServicesForm = () => {
  const form = useForm<AddServiceSchema>({
    resolver: zodResolver(addServiceSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "pharmacy",
      city: "damascus",
      district: "",
      phone: "",
    },
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // onSubmit handler
  const onSubmit = async (data: AddServiceSchema) => {
    try {
      console.log(data);
      await new Promise((r) => setTimeout(r, 800));
      setIsSubmitted(true);
    } catch (e) {
      // handle error
      console.log(e);
    }
  };
  return (
    <div>
    
      <Activity mode={isSubmitted ? "hidden" : "visible"}>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
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
                  placeholder="اختر الفئة"
                  options={serviceTypesWithoutAll}
                  icon={true}
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
                {form.formState.isSubmitting
                  ? "جاري الإرسال..."
                  : "إرسال الخدمة"}
              </span>
            </Button>
          </div>
        </form>
      </Activity>

      <Activity mode={!isSubmitted ? "hidden" : "visible"}>
        <SuccessAddCard />
      </Activity>
    </div>
  );
};

export default AddServicesForm;
