/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { ok, fail, ApiResponse } from "@/lib/api-response";
import prisma from "@/utils/db";
import { addServiceSchema, AddServiceSchema } from "@/utils/schema";
import { Service } from "@/utils/types";
import { revalidatePath, } from "next/cache";

//! Add service action for server-side processing
export const addServiceAction = async (
  data: AddServiceSchema
): Promise<ApiResponse<null>> => {
  try {
    const validated = addServiceSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        message:
          JSON.stringify(
            validated.error.issues.map((issue: any) => issue.message)
          ) || "البيانات المدخلة غير صحيحة",
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
    revalidatePath("/");
    return ok(null, "تم إضافة الخدمة بنجاح! سيتم مراجعتها قريبًا.");
  } catch (error: any) {
    console.error("Error in addServiceAction:", error);
    return fail(
      error.message || "حدث خطأ أثناء إضافة الخدمة، يرجى المحاولة لاحقاً"
    );
  }
};
//! Get all services action for server-side processing
export const getAllServicesAction = async (): Promise<
  ApiResponse<Service[]>
> => {
  try {
    const services = await prisma.place.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        area: true,
        addressText: true,
        phone: true,
        hours: true,
        city: true,
        status: true,
        type: true,
      },
      take: 10,
    });

    return ok(services as Service[], "تم جلب جميع الخدمات بنجاح!");
  } catch (error: any) {
    console.error("Error in getAllServicesAction:", error);
    return fail("حدث خطأ أثناء جلب جميع الخدمات، يرجى المحاولة لاحقاً");
  }
};
