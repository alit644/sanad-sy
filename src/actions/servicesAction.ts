/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import prisma from "@/utils/db";
import { addServiceSchema, AddServiceSchema } from "@/utils/schema";

//! Add service action for server-side processing
export const addServiceAction = async (data: AddServiceSchema) => {
  try {
    const validated = addServiceSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        message: JSON.stringify(validated.error.issues.map((issue: any) => issue.message)) || "البيانات المدخلة غير صحيحة" ,
      };
    }
    await prisma.place.create({
      data: {
        title: data.title,
        area: data.district,
        phone: data.phone,
        hours: data.hours || undefined,
        description: data.description,
        city: data.city,
        type: data.category as any,
      },
    });

    return {
      success: true,
      message: "تم إضافة الخدمة بنجاح! سيتم مراجعتها قريبًا.",
      data: validated.data,
    };
  } catch (error: any) {
    console.error("Error in addServiceAction:", error);
    return {
      success: false,
      message:
        error.message || "حدث خطأ أثناء إضافة الخدمة، يرجى المحاولة لاحقاً",
    };
  }
};
