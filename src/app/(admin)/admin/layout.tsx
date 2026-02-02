import AdminNavbar from "@/components/admin/shared/AdminNavbar";

// app/(admin)/admin/layout.tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-background">
      <AdminNavbar />
      {/* <aside className="w-64 bg-slate-900 text-white">Sidebar</aside> */}
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
