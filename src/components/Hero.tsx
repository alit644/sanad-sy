import { Search } from "lucide-react";
import { Input } from "./ui/input";
import SearchInput from "./SearchInput";

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
          
          <SearchInput />
        </div>
      </div>
    </section>
 );
}

export default Hero;
