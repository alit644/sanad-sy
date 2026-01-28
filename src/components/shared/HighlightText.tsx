type HighlightProps = {
  text: string;           // النص الكامل
  searchQuery: string;    // نص البحث  
};

const Highlight = ({ text, searchQuery }: HighlightProps) => {
  if (!searchQuery.trim()) {
    return <span className="text-foreground ">{text}</span>;
  }

  const regex = new RegExp(`(${searchQuery})`, "gi");
  const parts = text.split(regex);

  return (
    <span className="text-foreground">
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span
            key={index}
            className="relative font-semibold italic text-primary bg-primary/10 px-1 py-0.5 rounded-sm border border-primary/30 transition-all duration-200"
          >
            {part}
          </span>
        ) : (
          <span key={index} className="bg-gray-100 px-1 py-0.5 rounded-sm ">{part}</span>
        )
      )}
    </span>
  );
};

export default Highlight;
