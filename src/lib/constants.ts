import { PlaceStatus, PlaceType } from "@/generated/prisma/enums";
import { SelectOption } from "@/utils/types";

const translatePlaceType = (type: PlaceType): string => {
  switch (type) {
    case PlaceType.HOSPITAL:
      return "مستشفى";
    case PlaceType.PHARMACY:
      return "صيدلية";
    case PlaceType.EMERGENCY:
      return "طوارئ";
    case PlaceType.NGO:
      return "منظمة";
    case PlaceType.EDUCATION:
      return "مدرسة أو جامعة";
    case PlaceType.OTHER:
      return "أخرى";
    default:
      return type;
  }
};
// ترجمة حالة المكان للعرض في القوائم - تستخدم في الفلاتر والعرض (الواجهة)
const translatePlaceStatus = (status: string): string => {
  switch (status) {
    case "PENDING":
      return "قيد المراجعة";
    case "VERIFIED":
      return "موثق";
    case "ARCHIVED":
      return "مؤرشف";
    default:
      return status;
  }
};

const placeTypeOptions: SelectOption[] = [
  { value: "all-types", label: "جميع الخدمات" }, // الخيار الخاص بالفلترة
  ...Object.values(PlaceType).map((type) => ({
    value: type,
    label: translatePlaceType(type as PlaceType),
  })),
];
const placeTypeOptionsWithoutAll: SelectOption[] = Object.values(PlaceType).map(
  (value) => ({
    value,
    label: translatePlaceType(value as PlaceType),
  })
);

const serviceStatusOptions: SelectOption[] = [
  { value: "all-status", label: "جميع الحالات" },
  ...Object.values(PlaceStatus).map((status) => ({
    value: status,
    label: translatePlaceStatus(status as PlaceStatus),
  })),
];

export { translatePlaceType, translatePlaceStatus, placeTypeOptions, placeTypeOptionsWithoutAll, serviceStatusOptions };
