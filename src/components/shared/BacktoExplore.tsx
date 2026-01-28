"use client";
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const BacktoExplore = () => {
  const router = useRouter();
 return (
  <>
    <Button
      variant={'ghost'}
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
      >
        <ArrowRight  className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>العودة إلى النتائج</span>
      </Button>
  </>
 );
}

export default BacktoExplore;
