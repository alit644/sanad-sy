import { CheckCircle2, ChevronLeft, Clock, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
export interface Service {
  id: string;
  name: string;
  type: "pharmacy" | "hospital" | "ngo" | "emergency";
  city: string;
  area?: string;
  phone?: string;
  address?: string;
  verified: boolean;
}
const typeLabels: Record<Service["type"], string> = {
  pharmacy: "صيدلية",
  hospital: "مشفى",
  ngo: "منظمة",
  emergency: "طوارئ",
};
const typeBadgeVariants: Record<
  Service["type"],
  "pharmacy" | "hospital" | "ngo" | "emergency"
> = {
  pharmacy: "pharmacy",
  hospital: "hospital",
  ngo: "ngo",
  emergency: "emergency",
};

const ServiceCard = ({
  id,
  name,
  city,
  type,
  verified,
  area,
  address,
  phone,
}: Service) => {
  return (
    <Card id={id} className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.01] hover:border-primary/20">
      <CardContent>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant={typeBadgeVariants[type]} title={typeBadgeVariants[type]} >
                {typeLabels[type]}
              </Badge>
              <Badge variant={verified ? "verified" : "pending"}>
                {verified ? (
                  <>
                    <CheckCircle2 className="h-3 w-3" />
                    <span>موثق</span>
                  </>
                ) : (
                  <>
                    <Clock className="h-3 w-3" />
                    <span>قيد المراجعة</span>
                  </>
                )}
              </Badge>
            </div>

            <h3 className="font-semibold text-foreground text-base mb-2 truncate">
              {name}
            </h3>

            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">
                {city} - {area}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            {phone && (
              <Button
                variant="default"
                size="icon"
                className="rounded-full"
                aria-label="اتصال"
              >
                <Phone className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-between text-muted-foreground hover:text-foreground"
          >
            <span>عرض التفاصيل</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
