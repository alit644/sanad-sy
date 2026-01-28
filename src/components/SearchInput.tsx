"use client";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useCallback, useRef, useState } from "react";
import { useFilter } from "@/hooks/useFilter";
const SearchInput = () => {
  const { updateFilter, searchParams } = useFilter();
  const [inputValue, setInputValue] = useState<string>(
    searchParams.get("q") || "",
  );
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setInputValue(query);

      // حذف المؤقت السابق
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      // تعيين مؤقت جديد
      debounceTimer.current = setTimeout(() => {
        updateFilter("q", query.trim());
        setInputValue("");
      }, 500);
    },
    [updateFilter],
  );
  return (
    <div className="animate-fade-up-delay-2 relative max-w-lg mx-auto">
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5text-muted-foreground" />
      <Input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        aria-label="ابحث عن خدمة"
        placeholder="ابحث بالاسم أو الكلمة المفتاحية ..."
        className="pr-12 h-12 text-base rounded-lg bg-card border-border/50! focus:border-primary focus:outline-none! focus:ring-2! focus:ring-primary/40!  "
      />
    </div>
  );
};

export default SearchInput;
