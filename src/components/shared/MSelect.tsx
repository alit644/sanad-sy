import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { SelectOption } from "@/utils/types";


interface MSelectProps extends React.ComponentProps<typeof Select> {
  name: string;
  options: SelectOption[];
  icon?: boolean;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

export const MSelect = ({
  name,
  options,
  icon = false,
  placeholder = "اختر خياراً",
  label = options[0]?.label || "",
  defaultValue = options[0]?.value || "",
  className = "",

  disabled = false,
  // required = false,
  ...props
}: MSelectProps) => {
  return (
    <Select name={name} dir="rtl" defaultValue={defaultValue} disabled={disabled} {...props}>
      <SelectTrigger className={`w-fit ${className}`}>
        {icon && <MapPin className="w-4 h-4 ml-2 text-muted-foreground" />}{" "}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
