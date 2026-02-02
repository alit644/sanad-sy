import { Badge } from "../ui/badge";
import { TableCell, TableRow } from "../ui/table";
import {
  getPlaceStatusBadge,
  getPlaceStatusLabel,
  getPlaceTypeBadge,
  getPlaceTypeLabel,
} from "@/lib/place.config";
import { PlaceStatus, PlaceType } from "@/generated/prisma/enums";
import ActionsMenu from "./shared/ActionsMenu ";
import { Eye } from "lucide-react";
import { Button } from "../ui/button";
interface ServicesTableRowProps {
  id: number;
  title: string;
  category: PlaceType;
  status: PlaceStatus;
  location: string;
  dateAdded: string;
}
const ServicesTableRow = (services: ServicesTableRowProps) => {
  return (
    <TableRow className="hover:bg-muted/40 transition">
      <TableCell className="font-medium">{services.title}</TableCell>

      <TableCell>
        <Badge
          variant={getPlaceTypeBadge(services.category)}
          title={getPlaceTypeLabel(services.category)}
        >
          {getPlaceTypeLabel(services.category || "")}
        </Badge>
      </TableCell>

      <TableCell>{services.location}</TableCell>

      <TableCell>
        <Badge variant={getPlaceStatusBadge(services.status)}>
          {getPlaceStatusLabel(services.status)}
        </Badge>
      </TableCell>

      <TableCell className="text-sm text-muted-foreground">
        {new Date(services.dateAdded).toLocaleDateString("ar")}
      </TableCell>

      <TableCell className="text-center flex items-center justify-center">
        {/* <ActionsMenu /> */}
        <Button
        aria-label="عرض تفاصيل"
        title="عرض تفاصيل"
          variant="ghost"
          size="sm"
          className="text-primary hover:bg-primary/20 hover:text-primary transition-all duration-100"
        >
          <Eye className="w-4 h-4 " />
        </Button>

        <ActionsMenu status={services.status} />
      </TableCell>
    </TableRow>
  );
};

export default ServicesTableRow;
