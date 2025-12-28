import ActionButtons from "@/components/features/services/ActionButtons";
import ServiceHeader from "@/components/features/services/ServiceHeader";
import TrustScore from "@/components/features/services/TrustScore";
import BacktoExplore from "@/components/shared/BacktoExplore";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";

//TODO : اضافاة meta tags
export const metadata: Metadata = {
  title: "صيدلية الأمل",
  description: "خدمات",
};
const Page = () => {
  
  return (
    <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      {/* Back Button */}
      <BacktoExplore />
      <section>
        <Card className="py-0">
          <ServiceHeader />
        </Card>
        {/* Trust & Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Trust Score - مؤشر الثقة */}
          <Card className="py-0">
            <TrustScore />
          </Card>
          {/* Action Buttons */}
          <Card className="py-0">
            <ActionButtons />
          </Card>
         {/* TODO: اضافة اخر تحديثات + خريطة الموقع */}
        </div>
      </section>
    </main>
  );
};

export default Page;
