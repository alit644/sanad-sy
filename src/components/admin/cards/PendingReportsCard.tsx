import { Clock, Edit, Eye } from "lucide-react";
import { Badge } from "../../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
interface PendingReport {
  id: number;
  title: string;
  description: string;
  date: string;
}
const PendingReportsCard = ({ report }: { report: PendingReport }) => {
  return (
    <Card key={report.id} className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight">
            {report.title}
          </CardTitle>
          <Badge
            variant="outline"
            className="text-orange-600 border-orange-600"
          >
            معلق
          </Badge>
        </div>
        <CardDescription className="mt-2">{report.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Clock className="h-4 w-4" />
          تاريخ البلاغ: {report.date}
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            aria-label="عرض التفاصيل"
            title="عرض التفاصيل"
          >
            <Eye className="h-4 w-4 mr-2" />
            عرض التفاصيل
          </Button>
          <Button
            size="sm"
            className="flex-1"
            aria-label="مراجعة البلاغ"
            title="مراجعة البلاغ"
          >
            <Edit className="h-4 w-4 mr-2" />
            مراجعة
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PendingReportsCard;
