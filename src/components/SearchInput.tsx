"use client";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { Button } from "./ui/button";
const SearchInput = () => {
  const { updateFilter, searchParams, clearFilters } = useFilter();
  const [inputValue, setInputValue] = useState<string>(
    searchParams.get("q") || "",
  );

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);
  // reset input value and query params when search is cleared
  const resetInput = () => {
    setInputValue("");
    clearFilters({ keepQuery: false });
  };

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
        // setInputValue("");
      }, 650);
    },
    [updateFilter],
  );
  return (
    <div className="animate-fade-up-delay-2 relative max-w-lg mx-auto">
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5text-muted-foreground" />
      <Input
        data-testid="search-input"
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        aria-label="ابحث عن خدمة"
        placeholder="ابحث بالاسم أو الكلمة المفتاحية ..."
        className="pr-12 h-12 text-base rounded-lg bg-card border-border/50! focus:border-primary focus:outline-none! focus:ring-2! focus:ring-primary/40!  "
      />
      {inputValue && (
        <Button
          onClick={resetInput}
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 "
        >
          <X className=" h-5 w-5 text-muted-foreground" />
        </Button>
      )}
    </div>
  );
};

export default SearchInput;
