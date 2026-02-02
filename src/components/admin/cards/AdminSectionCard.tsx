import { AdminSection } from "@/utils/types";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import Link from "next/link";
interface AdminCardProps {
  section: AdminSection;
}
const AdminSectionCard = ({ section }: AdminCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow ">
      <CardHeader>
        <div className="flex items-center gap-3">
          <section.icon className={`h-8 w-8 ${section.iconColor}`} />{" "}
          <div>
            <CardTitle>{section.title}</CardTitle>
            <CardDescription>{section.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Link href={section.path}>
          <Button className="w-full" aria-label={section.buttonText} title={section.buttonText}>
            {section.buttonText}
            <section.buttonIcon className="h-4 w-4 mr-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AdminSectionCard;
