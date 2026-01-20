import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NewInvoiceModal } from "@/features/invoices/components/NewInvoiceModal";
import { useGetInvoicesQuery } from "@/features/invoices/hooks/queries/useGetInvoicesQuery";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import InvoiceArticle from "@/features/invoices/components/InvoiceArticle";

type InvoiceArticleProps = {
  id: string;
  invoiceNumber: string;
  dueDate: string;
  clientsName: string;
  invoiceAmount: string;
  invoiceStatus: string;
}

export function InvoicesIndex() {
  const { data: invoices } = useSuspenseQuery(useGetInvoicesQuery('austin'));
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">Invoices</h1>
            <p className="text-grey-100">There are {invoices.length} invoices</p>
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
          <InvoiceArticle
            id="RT3080"
            invoiceNumber="RT3080"
            dueDate="19 Aug 2026"
            clientsName="Jensen Huang"
            invoiceAmount="$2,000.43"
            invoiceStatus="Paid"
          />
        </div>
      </Suspense>
    </div>
  )
}
