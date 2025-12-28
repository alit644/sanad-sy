/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MSelect } from "@/components/shared/MSelect";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { serviceTypesWithoutAll, syCitiesWithoutAll } from "@/data";
import { Send } from "lucide-react";
import { Activity, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SuccessAddCard from "./SuccessAddCard";

const AddServicesForm = () => {
  const form = useForm();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // onSubmit handler
  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
  };
  return (
    <div>
      {/* Refactor this */}
      <Activity mode={isSubmitted ? "hidden" : "visible"}>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Title */}
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="title">اسم الخدمة</FieldLabel>
                  <Input
                    {...field}
                    type="text"
                    id="title"
                    aria-invalid={fieldState.invalid}
                    placeholder="مثال: عيادة طبية مجانية"
                    autoComplete="off"
                  />
                  {/* {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )} */}
                  <FieldDescription className="flex items-center gap-2">
                    <span className="text-primary/70">•</span>
                    لا تحتاج حساباً لمساعدة الآخرين
                  </FieldDescription>
                </Field>
              )}
            />
            {/* City and District */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="city"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="city">اختر المدينة</FieldLabel>
                    <MSelect
                      name="city"
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="اختر المدينة"
                      options={syCitiesWithoutAll}
                      icon={true}
                    />

                    {/* {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )} */}
                  </Field>
                )}
              />
              <Controller
                name="district"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="district">الحي / المنطقة</FieldLabel>
                    <Input
                      {...field}
                      type="text"
                      id="district"
                      aria-invalid={fieldState.invalid}
                      placeholder="مثال: شارع بغداد، بناء 12"
                      autoComplete="off"
                    />
                    {/* {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )} */}
                  </Field>
                )}
              />
            </div>
            {/* Category */}
            <Controller
              name="category"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="category">الفئة</FieldLabel>
                  <MSelect
                    name="category"
                    value={field.value}
                    onValueChange={field.onChange}
                    placeholder="اختر الفئة"
                    options={serviceTypesWithoutAll}
                    icon={true}
                  />

                  {/* {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )} */}
                </Field>
              )}
            />
            {/* Phone and Working Hours */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="phone">رقم الهاتف</FieldLabel>
                    <Input
                      {...field}
                      type="tel"
                      id="phone"
                      aria-invalid={fieldState.invalid}
                      placeholder="09XXXXXXXX"
                      autoComplete="off"
                    />
                    {/* {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )} */}
                  </Field>
                )}
              />
              <Controller
                name="hours"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="hours">ساعات العمل</FieldLabel>
                    <Input
                      {...field}
                      type="text"
                      id="hours"
                      aria-invalid={fieldState.invalid}
                      placeholder="مثال: 9 صباحاً - 5 مساءً"
                      autoComplete="off"
                    />
                    {/* {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )} */}
                  </Field>
                )}
              />
            </div>
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="description">وصف مختصر</FieldLabel>
                  <Textarea
                    {...field}
                    id="description"
                    placeholder="صف الخدمة بإيجاز..."
                    rows={6}
                    className="min-h-24 resize-none"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldDescription className="flex items-center gap-2">
                    <span className="text-primary/70">•</span>
                    مساهمتك قد توفر على شخص ما وقته
                  </FieldDescription>
                  {/* {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )} */}
                </Field>
              )}
            />
          </FieldGroup>

          {/* Send Button */}
          <div className="pt-4">
            <Button
              type="submit"
              size={"lg"}
              className="w-full group hover:scale-102"
              title=" إرسال الخدمة"
              aria-label=" إرسال الخدمة"
            >
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                إرسال الخدمة
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
