import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { statusColor } from "@/lib/statusColor";
import type { Invoice } from "@/lib/types";

const InvoiceArticle = ({ id, dueDate, clientName, total, status }: Pick<Invoice, 'id' | 'dueDate' | 'clientName' | 'total' | 'status'>) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="flex bg-white shadow-lg rounded-md min-h-20 justify-between px-6 py-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
          <span className="font-semibold"><span className="text-grey-100">#</span>{id.slice(0, 8).toUpperCase()}</span>
          <span className="text-grey-100 text-sm">Due: {dueDate}</span>
          <span className="text-grey-100 text-sm">{clientName}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center gap-6">
          <span className="font-semibold">${total}</span>
          <Badge variant={statusColor(status as 'Paid' | 'Pending' | 'Overdue')}>{status}</Badge>
          <ChevronRight className="hidden md:block" />
        </div>
      </div>
    </Link>
  )
}

export default InvoiceArticle;
