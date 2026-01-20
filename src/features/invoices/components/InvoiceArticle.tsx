import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const InvoiceArticle = ({ id, invoiceNumber, dueDate, clientsName, invoiceAmount, invoiceStatus }: { id: string, invoiceNumber: string, dueDate: string, clientsName: string, invoiceAmount: string, invoiceStatus: string }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="flex bg-white shadow-lg rounded-md min-h-20 justify-between px-6 py-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
          <span className="font-semibold"><span className="text-grey-100">#</span>{invoiceNumber}</span>
          <span className="text-grey-100 text-sm">Due: {dueDate}</span>
          <span className="text-grey-100 text-sm">{clientsName}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center gap-6">
          <span className="font-semibold">{invoiceAmount}</span>
          <span className="text-green px-6 py-2 font-medium bg-green/20 rounded-md">{invoiceStatus}</span>
          <ChevronRight className="hidden md:block" />
        </div>
      </div>
    </Link>
  )
}

export default InvoiceArticle;
