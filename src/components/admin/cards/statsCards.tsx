import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<{ className: string }>;
  color: string;
  bgColor: string;
}
const StatsCards = (stat: StatsCardProps) => {
  return (
    <Card
      key={stat.title}
      className="card-shadow hover:shadow-md transition-shadow"
    >
      <CardContent>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${stat.bgColor}`}>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCards;
