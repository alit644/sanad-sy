import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BacktoExplore = () => {
 return (
  <>
    <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
      >
        <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>العودة إلى النتائج</span>
      </Link>
  </>
 );
}

export default BacktoExplore;
