"use client";
import { useFilter } from '@/hooks/useFilter';
import { Button } from '../ui/button';

const ResetFiltersButton = ({ keepQuery }: { keepQuery: boolean }) => {
  const { clearFilters } = useFilter();
  const handleResetFilters = () => {
    clearFilters({ keepQuery });
  }
  return (
      <Button
        className="whitespace-nowrap"
        title="مسح الفلاتر"
        aria-label="مسح الفلاتر"
        variant="outline"
        size="default"
        onClick={handleResetFilters}
      >
        مسح الفلاتر
      </Button>
  );
}

export default ResetFiltersButton;
