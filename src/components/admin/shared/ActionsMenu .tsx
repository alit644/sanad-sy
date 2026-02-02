import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlaceStatus } from "@/generated/prisma/enums";
import { MoreHorizontal } from "lucide-react";

const ActionsMenu = ({status} : {status: PlaceStatus}) => {
  const renderActions = () => {
    switch (status) {
      case 'PENDING':
        return (
          <>
            <DropdownMenuItem>تعديل</DropdownMenuItem>
            <DropdownMenuItem className="text-green-600">قبول</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">رفض</DropdownMenuItem>
          </>
        );
      case 'VERIFIED':
        return (
          <>
            <DropdownMenuItem>تعديل</DropdownMenuItem>
            <DropdownMenuItem className="text-orange-600">أرشفة</DropdownMenuItem>
          </>
        );
      case 'ARCHIVED':
        return (
          <>
            <DropdownMenuItem className="text-green-600">إعادة تفعيل</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">حذف نهائي</DropdownMenuItem>
          </>
        );
      default:
        return (
          <>
            <DropdownMenuItem>تعديل</DropdownMenuItem>
          </>
        );
    }
  };

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {renderActions()}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionsMenu;
