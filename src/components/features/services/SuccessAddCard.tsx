import { Button } from "@/components/ui/button";
import { CheckCircle, Heart } from "lucide-react";
import Link from "next/link";

const SuccessAddCard = () => {
  return (
    <div className="   p-8 md:p-12 text-center">
      {/* Success icon */}
      <div className="relative inline-flex mb-6">
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center animate-float">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <div className="absolute top-1 -right-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center animate-gentle-pulse">
          <Heart
            className="w-3 h-3 text-primary-foreground"
            fill="currentColor"
          />
        </div>
      </div>

      {/* Thank you message */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
        شكراً لك
      </h2>

      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        خدمتك الآن قيد المراجعة.
        <br />
        <span className="text-foreground font-medium">لقد أصبحت سنداً 🤍</span>
      </p>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 my-8">
        <div className="h-px w-16 bg-linear-to-r from-transparent to-border" />
        <Heart className="w-4 h-4 text-primary/60" />
        <div className="h-px w-16 bg-linear-to-l from-transparent to-border" />
      </div>

      {/* Inspirational quote */}
      <p className="text-muted-foreground italic mb-8">
        &quot;من سهّل على مؤمن كربة من كرب الدنيا، سهّل الله عليه كربة من كرب
        يوم القيامة&quot;
      </p>

      {/* Action button */}
      <Button
        variant="default"
        size="lg"
        className="min-w-48"
        title="العودة للرئيسية"
        aria-label="العودة للرئيسية"
      >
        <Link href="/">العودة للرئيسية</Link>
      </Button>
    </div>
  );
};

export default SuccessAddCard;
