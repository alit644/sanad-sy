"use client";
import { syCities } from "@/data";
import { MSelect } from "./shared/MSelect";
import { placeTypeOptions, serviceStatusOptions } from "@/lib/constants";
import { useFilter } from "@/hooks/useFilter";
import ResetFiltersButton from "./shared/ResetFiltersButton";

const FilterBar = () => {
  const { searchParams, updateFilter } = useFilter();
  // Handle Reset Filters

  return (
    <div className="flex gap-3 items-center justify-between border border-input p-4 rounded-md shadow-xs bg-white overflow-x-auto hide-scrollbar">
      <div className="flex items-center gap-3">
        <span className="whitespace-nowrap">فلترة حسب : </span>
        <MSelect
          name="all-cities"
          placeholder="اختر المدينة"
          options={syCities}
          icon={true}
          value={searchParams.get("city") || ""}
          onValueChange={(v) => updateFilter("city", v)}
        />
        <MSelect
          name="all-types"
          placeholder=" حدد الخدمة"
          options={placeTypeOptions}
          value={searchParams.get("types") || ""}
          onValueChange={(v) => updateFilter("types", v)}
        />
        <MSelect
          name="all-status"
          placeholder="حالة الخدمة"
          options={serviceStatusOptions}
          value={searchParams.get("status") || ""}
          onValueChange={(v) => updateFilter("status", v)}
        />
      </div>
      {/* Reset Filters Button */}
      <ResetFiltersButton keepQuery={true} />
    </div>
  );
};

export default FilterBar;
