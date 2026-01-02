import { CheckCircle2, ChevronLeft, Clock, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { PlaceStatus, PlaceType } from "@/generated/prisma/enums";
import { Service } from "@/utils/types";

const typeLabels: Record<Service["type"], string> = {
  [PlaceType.PHARMACY]: "صيدلية",
  [PlaceType.HOSPITAL]: "مشفى",
  [PlaceType.NGO]: "منظمة",
  [PlaceType.EMERGENCY]: "طوارئ",
  [PlaceType.EDUCATION]: "تعليم",
  [PlaceType.OTHER]: "آخر",
};
const typeBadgeVariants: Record<
  Service["type"],
  "PHARMACY" | "HOSPITAL" | "NGO" | "destructive" | "EDUCATION" | "OTHER"
> = {
  [PlaceType.PHARMACY]: "PHARMACY",
  [PlaceType.HOSPITAL]: "HOSPITAL",
  [PlaceType.NGO]: "NGO",
  [PlaceType.EMERGENCY]: "destructive",
  [PlaceType.EDUCATION]: "EDUCATION",
  [PlaceType.OTHER]: "OTHER",
};

const ServiceCard = ({
  id,
  title,
  city,
  type,
  area,
  status,
  phone,
  hours,
  addressText,
}: Service) => {
  return (
    <Card
      id={id}
      className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.01] hover:border-primary/20"
    >
      <CardContent>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge
                variant={typeBadgeVariants[type]}
                title={typeBadgeVariants[type]}
              >
                {typeLabels[type]}
              </Badge>
              <Badge
                variant={
                  status === PlaceStatus.VERIFIED ? "verified" : "pending"
                }
              >
                {status === PlaceStatus.VERIFIED ? (
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
              {title}
            </h3>

            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">
                {city} {area ? `- ${area}` : ""}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            {phone && (
              <Button
                asChild
                variant="default"
                size="icon"
                className="rounded-full"
                title="اتصال"
                aria-label="اتصال"
              >
                <a href={`tel:${phone}`} aria-label="اتصال">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <Link href={`/services-details/${id}`}>
            <Button
            title="عرض التفاصيل"
            aria-label="عرض التفاصيل"
              variant="ghost"
              className="w-full justify-between text-muted-foreground hover:text-foreground"
            >
              <span>عرض التفاصيل</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
