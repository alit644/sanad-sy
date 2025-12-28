import React from "react";
import Logo from "./shared/Logo";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border ">
      <div className="container mx-auto px-4 md:px-0 py-4 flex items-center justify-between">
        <Logo />
        <p className="text-foreground font-semibold">صُنع بحب لأجل سوريا 💚</p>
      </div>
      {/* Help Pages  */}
      <div className="container mx-auto px-4 md:px-0 py-4 flex flex-wrap gap-4 justify-center">
        <Link href="/privacy-policy" className="text-foreground hover:text-primary transition-colors">
          سياسة الاستخدام
        </Link>
        <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
          اتصل بنا
        </Link>
        <Link href="tel:+90 536 566 39 18" className="text-foreground flex items-center hover:text-primary transition-colors">
        905365663918 <PhoneCall className="w-4 h-4 mr-2"/> 
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
