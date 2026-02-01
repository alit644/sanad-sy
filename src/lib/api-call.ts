/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/utils/db";
import { normalizeFilters } from "./normalize-filters";
import { IFilters, Service, ServiceById } from "@/utils/types";
import { PlaceStatus, PlaceType } from "@/generated/prisma/client";
import { cache } from "react";
import { ApiResponse, fail, ok } from "./api-response";
//lib/api-call.ts
export const getServicesCached = cache(
  async (filters: IFilters): Promise<ApiResponse<Service[]>> => {
    try {
      const normalizedFilters = normalizeFilters(filters);
      const where: any = {
        AND: [
          //! بحث نصي عام في العنوان، الوصف، والمنطقة
          normalizedFilters.q
            ? {
                OR: [
                  {
                    title: {
                      contains: normalizedFilters.q,
                      mode: "insensitive",
                    },
                  },
                  {
                    description: {
                      contains: normalizedFilters.q,
                      mode: "insensitive",
                    },
                  },
                  {
                    area: {
                      contains: normalizedFilters.q,
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : undefined,
          //! فلترة حسب المدينة، النوع، والحالة إذا تم توفيرها
          normalizedFilters.city
            ? { city: { equals: normalizedFilters.city } }
            : undefined,
          normalizedFilters.types
            ? { type: { equals: normalizedFilters.types as PlaceType } }
            : {},
          normalizedFilters.status
            ? { status: { equals: normalizedFilters.status as PlaceStatus } }
            : {},
        ].filter(Boolean),
      };
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
        where,
        take: 10,
      });
      return ok(services as Service[], "تم جلب جميع الخدمات بنجاح!");
    } catch (error: any) {
      console.error("Error in getAllServicesAction:", error);
      return fail("حدث خطأ أثناء جلب جميع الخدمات، يرجى المحاولة لاحقاً");
    }
  },
);
export const getServiceByIdCached = cache(
  async (id: string): Promise<ApiResponse<ServiceById>> => {
    try {
      const service = await prisma.place.findUnique({
        where: {
          id,
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
          description: true,
          confirmCountCached: true,
          scoreCached: true,
        },
      });
      if (!service) {
        return fail("الخدمة غير موجودة!");
      }
      return ok(service as ServiceById, "تم جلب الخدمة بنجاح!");
    } catch (error) {
      console.error("Error in getServiceByIdAction:", error);
      return fail("حدث خطأ أثناء جلب الخدمة، يرجى المحاولة لاحقاً");
    }
  },
);
