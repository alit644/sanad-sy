import { PlaceStatus, PlaceType } from "@/generated/prisma/enums";

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
