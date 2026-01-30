/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { ReportReason } from "@/generated/prisma/enums";
import { ok, fail, ApiResponse } from "@/lib/api-response";
import { computeScore } from "@/lib/score-clamp";
import prisma from "@/utils/db";
import { addServiceSchema, AddServiceSchema } from "@/utils/schema";
import { revalidatePath } from "next/cache";

//! Add service action for server-side processing
export const addServiceAction = async (
  data: AddServiceSchema,
): Promise<ApiResponse<null>> => {
  try {
    const validated = addServiceSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        message:
          JSON.stringify(
            validated.error.issues.map((issue: any) => issue.message),
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
      error.message || "حدث خطأ أثناء إضافة الخدمة، يرجى المحاولة لاحقاً",
    );
  }
};

//! Confirm service action for server-side processing
export const confirmServiceAction = async (
  placeId: string,
  sanadId: string,
): Promise<ApiResponse<null>> => {
  try {
    await prisma.$transaction(async (tx) => {
      try {
        await tx.confirmation.create({
          data: { placeId, sanadId },
        });
      } catch (e: any) {
        if (e?.code === "P2002") {
          throw new Error("DUPLICATE_CONFIRMATION");
        }
        throw e;
      }

      const updatedPlace = await tx.place.update({
        where: { id: placeId },
        data: {
          confirmCountCached: { increment: 1 },
        },
        select: {
          confirmCountCached: true,
          reportCountCached: true,
          phone: true,
          description: true,
          area: true,
          updatedAt: true,
        },
      });
      const newScore = computeScore(updatedPlace);
      await tx.place.update({
        where: { id: placeId },
        data: { scoreCached: newScore },
      });
    });
    revalidatePath(`/services-details/${placeId}`);
    return ok(null, "تم تأكيد الخدمة بنجاح!");
  } catch (error: any) {
    if (error?.message === "DUPLICATE_CONFIRMATION") {
      return fail("لقد قمت بتأكيد هذه الخدمة من قبل");
    }
    console.error("Error in confirmServiceAction:", error);
    return fail(
      error.message || "حدث خطأ أثناء تأكيد الخدمة، يرجى المحاولة لاحقاً",
    );
  }
};

//! Report service action for server-side processing
export const reportServiceAction = async (
  placeId: string,
  sanadId: string,
  reason: ReportReason,
): Promise<ApiResponse<null>> => {
  try {
    await prisma.$transaction(async (tx) => {
      try {
        await tx.report.create({
          data: { placeId, sanadId, reason },
        });
      } catch (e: any) {
        if (e?.code === "P2002") {
          throw new Error("DUPLICATE_REPORT");
        }
        throw e;
      }

      const updatedPlace = await tx.place.update({
        where: { id: placeId },
        data: {
          reportCountCached: { increment: 1 },
        },
        select: {
          confirmCountCached: true,
          reportCountCached: true,
          phone: true,
          description: true,
          area: true,
          updatedAt: true,
        },
      });
      const newScore = computeScore(updatedPlace);
      await tx.place.update({
        where: { id: placeId },
        data: { scoreCached: newScore },
      });
    });
    revalidatePath(`/services-details/${placeId}`);
    return ok(null, "تم إبلاغ عن الخدمة بنجاح!");
  } catch (error: any) {
    if (error?.message === "DUPLICATE_REPORT") {
      return fail("لقد قمت بلإبلاغ عن هذه الخدمة من قبل");
    }
    console.error("Error in confirmServiceAction:", error);
    return fail(
      error.message || "حدث خطأ أثناء تأكيد الخدمة، يرجى المحاولة لاحقاً",
    );
  }
};
