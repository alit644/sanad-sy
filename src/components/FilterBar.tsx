import { serviceStatus, serviceTypes, syCities } from "@/data";
import { MSelect } from "./shared/MSelect";

const FilterBar = () => {
 return (
  <div className="flex items-center gap-3 border border-input p-4 rounded-md shadow-xs bg-white overflow-x-auto hide-scrollbar">
   <span className="whitespace-nowrap">فلترة حسب : </span>
   <MSelect name="all-cities" placeholder="اختر المدينة" options={syCities} icon={true} />
   <MSelect name="all-types" placeholder=" حدد الخدمة" options={serviceTypes} />
   <MSelect name="all-status" placeholder="حالة الخدمة" options={serviceStatus} />
  </div>
 );
}

export default FilterBar;
