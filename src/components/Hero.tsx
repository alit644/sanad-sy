import { Search } from "lucide-react";
import { Input } from "./ui/input";

const Hero = () => {
 return (
   <section className="bg-linear-to-br from-via-white via-white to-primary/25 py-12 md:py-16 border-b border-border px-4 md:px-0">
      <div className="container">
        <div className="max-w-2xl  mx-auto text-center">
          <h1 className="animate-fade-up text-3xl md:text-4xl font-bold text-foreground mb-4">
            اعثر على الخدمات الأساسية في مدينتك
          </h1>
          <p className="animate-fade-up-delay-1 text-muted-foreground text-base md:text-lg mb-8">
            دليل مجتمعي محدث. جميع المعلومات تخضع للمراجعة و الرقابة.
          </p>
          
          <div className="animate-fade-up-delay-2 relative max-w-lg mx-auto">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5text-muted-foreground" />
            <Input
              type="text"
              aria-label="ابحث عن خدمة"
              placeholder="ابحث بالاسم أو الكلمة المفتاحية ..."
              className="pr-12 h-12 text-base rounded-lg bg-card border-border/50! focus:border-primary focus:outline-none! focus:ring-2! focus:ring-primary/40!  "
            />
          </div>
        </div>
      </div>
    </section>
 );
}

export default Hero;
