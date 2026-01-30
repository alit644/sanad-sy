type HighlightProps = {
  searchQuery: string; // نص البحث
};

const Highlight = ({ searchQuery }: HighlightProps) => {
  return (
    <div className="flex items-center gap-2 p-4 bg-linear-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="text-sm font-medium text-muted-foreground">
        نتيجة البحث:
      </span>
      <span className="relative font-semibold text-primary bg-linear-to-r from-primary/20 to-primary/10 px-3 py-1 rounded-md border border-primary/30 transition-all duration-200 hover:from-primary/30 hover:to-primary/15 hover:border-primary/50">
        {searchQuery}
      </span>
    </div>
  );
};

export default Highlight;
