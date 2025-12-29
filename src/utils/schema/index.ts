import z from "zod";

export const addServiceSchema = z.object({
  title: z
    .string({ error: "يجب تحديد اسم الخدمة" })
    .trim()
    .min(3, "اسم الخدمة يجب أن يكون على الأقل 3 أحرف")
    .max(60, "اسم الخدمة يجب أن يكون على الأكثر 60 أحرف"),
  district: z
    .string({ error: "قم بكتابة عنوان المنطقة" })
    .trim()
    .min(5, " اسم المنطقة يجب أن يكون على الأقل 5 أحرف")
    .max(90, "اسم المنطقة يجب أن يكون على الأكثر 90 أحرف"),
  phone: z
    .string({ error: "يجب تحديد رقم هاتف" })
    .trim()
    .regex(
      /^09\d{8}$/,
      "يجب أن يكون رقم هاتف سوري صالح يبدأ بـ 09 ويتكون من 10 أرقام"
    ),
  hours: z
    .string()
    .trim()
    .min(2, "مثال: 9 صباحاً - 5 مساءً")
    .max(20, "عدد الساعات يجب أن يكون على الأكثر 20 أحرف")
    .optional(),
  description: z
    .string({ error: "من فضلك قم بكتابة وصف للخدمة" })
    .trim()
    .min(8, "وصف الخدمة يجب أن يكون على الأقل 8 أحرف")
    .max(250, "وصف الخدمة يجب أن يكون على الأكثر 250 أحرف")
    ,
  category: z.string({ error: "يجب أن تحدد نوع الخدمة" }),
  city: z.string({ error: "يجب أن تحدد المدينة" }),
});

export type AddServiceSchema = z.infer<typeof addServiceSchema>;
