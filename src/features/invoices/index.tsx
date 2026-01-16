import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight } from "lucide-react";
import { NewInvoiceModal } from "./components/NewInvoiceModal";

export function InvoicesIndex() {
  const { data: invoices } = useGetInvoicesQuery('austin');
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">Invoices</h1>
          <p className="text-grey-100">There are 7 invoices</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <Select>
            <SelectTrigger className="min-w-24">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
          <NewInvoiceModal />
        </div>
      </div>
      <div>
        {/* Invoice */}
        <div className="flex bg-white shadow-lg rounded-md min-h-20 justify-between px-6 py-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
            <span className="font-semibold"><span className="text-grey-100">#</span>RT3080</span>
            <span className="text-grey-100 text-sm">Due: 19 Aug 2026</span>
            <span className="text-grey-100 text-sm">Jensen Huang</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center gap-6">
            <span className="font-semibold">$2,000.43</span>
            <span className="text-green px-6 py-2 font-medium bg-green/20 rounded-md">Paid</span>
            <ChevronRight className="hidden md:block" />
          </div>
        </div>
        {/* Invoice */}
      </div>
    </div>
  )
}
