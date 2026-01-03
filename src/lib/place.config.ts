import { syCities } from "@/data";
import { PlaceStatus, PlaceType } from "@/generated/prisma/enums";
//!  Place type config
export const PLACE_TYPE_CONFIG = {
  [PlaceType.PHARMACY]: {
    label: "صيدلية",
    badge: "PHARMACY",
  },
  [PlaceType.HOSPITAL]: {
    label: "مشفى",
    badge: "HOSPITAL",
  },
  [PlaceType.NGO]: {
    label: "منظمة",
    badge: "NGO",
  },
  [PlaceType.EMERGENCY]: {
    label: "طوارئ",
    badge: "destructive",
  },
  [PlaceType.EDUCATION]: {
    label: "تعليم",
    badge: "EDUCATION",
  },
  [PlaceType.OTHER]: {
    label: "آخر",
    badge: "OTHER",
  },
} as const;

export const getPlaceTypeLabel = (type: PlaceType) =>
  PLACE_TYPE_CONFIG[type].label;

export const getPlaceTypeBadge = (type: PlaceType) =>
  PLACE_TYPE_CONFIG[type].badge;

//! Place status config
export const PLACE_STATUS_CONFIG = {
  [PlaceStatus.VERIFIED]: {
    label: "",
    badge: "verified",
  },
  [PlaceStatus.PENDING]: {
    label: "قيد المراجعة",
    badge: "pending",
  },
  [PlaceStatus.ARCHIVED]: {
    label: "مرفوض",
    badge: "pending",
  },
} as const;

export const getPlaceStatusLabel = (status: PlaceStatus) =>
  PLACE_STATUS_CONFIG[status].label;

export const getPlaceStatusBadge = (status: PlaceStatus) =>
  PLACE_STATUS_CONFIG[status].badge;

//!  Place city config

export const getCityLabel = (cityValue: string) => {
  const city = syCities.find((c) => c.value === cityValue);
  return city ? city.label : cityValue;
};
