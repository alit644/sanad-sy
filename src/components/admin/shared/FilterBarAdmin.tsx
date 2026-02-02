import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus, Search } from "lucide-react";

const FilterBarAdmin = () => {
  return (
    <>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="البحث في الخدمات..." className="pl-10" />
      </div>
      <Button variant="outline">
        <Filter className="h-4 w-4 mr-2" />
        فلترة
      </Button>
      <Button>
        <Plus className="h-4 w-4 mr-2" />
        إضافة خدمة جديدة
      </Button>
    </>
  );
};

export default FilterBarAdmin;
