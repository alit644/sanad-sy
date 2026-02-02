import AddServicesForm from "@/components/features/services/AddServicesForm";
import BacktoExplore from "@/components/shared/BacktoExplore";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Page = () => {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
      {/* Back Button */}
      <BacktoExplore />
      {/* Main Content */}
      <Card className="py-0">
        <section className="p-4 md:p-8">
          {/* Header */}
          <div>
            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-foreground mb-4">
              أضف خدمة قد تساعد شخصاً اليوم
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-center mb-2 md:text-xl text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary/70" />
              كل مساهمة تصنع فرقاً في حياة أحدهم
              <Sparkles className="w-5 h-5 text-primary/70" />
            </p>
          </div>
          {/* Form */}
          <AddServicesForm />
        </section>
      </Card>
    </main>
  );
};

export default Page;
