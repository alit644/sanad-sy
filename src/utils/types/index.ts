import { Prisma } from "@/generated/prisma/browser";
import { PlaceStatus, PlaceType } from "@/generated/prisma/enums";
import { PLACE_STATUS_CONFIG, PLACE_TYPE_CONFIG } from "@/lib/place.config";
//! Place type key type
export type PlaceTypeKey = keyof typeof PLACE_TYPE_CONFIG;
export type PlaceTypeLabel = (typeof PLACE_TYPE_CONFIG)[PlaceTypeKey]["label"];
export type PlaceTypeBadge = (typeof PLACE_TYPE_CONFIG)[PlaceTypeKey]["badge"];
//! Place status key type
export type PlaceStatusKey = keyof typeof PLACE_STATUS_CONFIG;
export type PlaceStatusLabel =
  (typeof PLACE_STATUS_CONFIG)[PlaceStatusKey]["label"];
export type PlaceStatusBadge =
  (typeof PLACE_STATUS_CONFIG)[PlaceStatusKey]["badge"];

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface Service {
  id: string;
  title: string;
  area: string | null;
  addressText: string | null;
  phone: string | null;
  hours: string | null;
  city: string;
  status: PlaceStatus;
  type: PlaceType;
}

export type ServiceById = Prisma.PlaceGetPayload<{
  select: {
    id: true;
    title: true;
    area: true;
    addressText: true;
    phone: true;
    hours: true;
    city: true;
    status: true;
    type: true;
    description: true;
    confirmCountCached: true;
    scoreCached: true;
  };
}>;
