/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";
import ServicesTableRow from "./ServicesTableRow";
const ServicesTable = ({ services }: { services: any[] }) => {
  return (
   <div className="rounded-xl border bg-white overflow-hidden">
      <Table dir="rtl">
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="text-right">الخدمة</TableHead>
            <TableHead className="text-right">النوع</TableHead>
            <TableHead className="text-right">المدينة</TableHead>
            <TableHead className="text-right">الحالة</TableHead>
            <TableHead className="text-right">تاريخ الإضافة</TableHead>
            <TableHead className="text-center w-15">	الإجراءات</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody >
            {services.map((service) => (
              <ServicesTableRow key={service.id} {...service} />
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ServicesTable;
