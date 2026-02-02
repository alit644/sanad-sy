import Logo from '@/components/shared/Logo';

const AdminNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur ">
      <div className="container px-4 md:px-0 mx-auto flex h-16 items-center justify-between ">
        <Logo />
      
      </div>
    </header>
  );
}

export default AdminNavbar;
