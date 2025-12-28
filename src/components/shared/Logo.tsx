import { Heart} from "lucide-react";
import Link from "next/link";



const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor"/>
      </div>
     
      <span  className={`font-bold text-2xl text-foreground`}>سَنَد</span>
    </Link>
  );
};

export default Logo;
