import { getServiceByIdAction } from "@/actions/servicesAction";
import ActionButtons from "@/components/features/services/ActionButtons";
import ServiceHeader from "@/components/features/services/ServiceHeader";
import TrustScore from "@/components/features/services/TrustScore";
import BacktoExplore from "@/components/shared/BacktoExplore";
import ErrorState from "@/components/shared/ErrorState";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";
interface PageProps {
  params: Promise<{ id: string }>;
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const result = await getServiceByIdAction(id);
  if (!result.success) return { title: "Service Not Found" };
  return {
    title: result.data.title,
    description: result.data.description,
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const result = await getServiceByIdAction(id);
  if (!result.success) return <ErrorState message={result.message} />;

  return (
    <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      {/* Back Button */}
      <BacktoExplore />
      <section>
        <Card className="py-0">
          <ServiceHeader service={result.data} />
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
