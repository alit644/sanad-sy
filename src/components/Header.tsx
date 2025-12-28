import {  Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./shared/Logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur ">
      <div className="container px-4 md:px-0 mx-auto flex h-16 items-center justify-between ">
       <Logo />
        <Button asChild variant="default" className="gap-2 group hover:scale-103 transition-transform" title="إضافة خدمة جديدة" aria-label="إضافة خدمة جديدة">
          <Link  href={'/add-services'}>
            <Plus className="h-4 w-4 " />
            <span className="hidden sm:inline">إضافة خدمة</span>
            <span className="sm:hidden">إضافة</span>
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
