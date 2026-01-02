import { Service } from "@/utils/types";

// Helper function to remove "all" option from arrays
const removeFirstItem = <T,>(array: T[]): T[] => array.slice(1);

// sy cities
export const syCities = [
  { value: "all-cities", label: "جميع المدن" },
  { value: "damascus", label: "دمشق" },
  { value: "damascus-countryside", label: "ريف دمشق" },
  { value: "aleppo", label: "حلب" },
  { value: "homs", label: "حمص" },
  { value: "latakia", label: "اللاذقية" },
  { value: "tartus", label: "طرطوس" },
  { value: "hama", label: "حماة" },
  { value: "deir-ez-zor", label: "دير الزور" },
  { value: "raqqa", label: "الرقة" },
  { value: "idlib", label: "إدلب" },
  { value: "daraa", label: "درعا" },
  { value: "quneitra", label: "القنيطرة" },
  { value: "as-suwayda", label: "السويداء" },
  { value: "hasakah", label: "الحسكة" },
];

export const syCitiesWithoutAll = removeFirstItem(syCities);


export const serviceStatus = [
  { value: "all-status", label: "جميع الحالات" },
  { value: "verified", label: "مأكد" },
  { value: "pending", label: "قيد المراجعة" },
  { value: "closed", label: "مغلق" },
];

