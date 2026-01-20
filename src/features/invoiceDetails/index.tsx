import { Button } from "@/components/ui/button";
import { EditInvoiceDetailsModal } from "@/features/invoiceDetails/modals/EditInvoiceDetailsModal";
// import { useRouteParams } from "@tanstack/react-router";
import { useGetInvoiceDetailsQuery } from "@/features/invoiceDetails/hooks/queries/useGetInvoiceDetailsQuery";
import { Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

export function InvoiceDetails() {

  const { data: invoiceDetails } = useSuspenseQuery(useGetInvoiceDetailsQuery("9a1dfdc4-6b13-4650-b055-cc0d0a5458dd"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="flex flex-col md:flex-row bg-white shadow-lg rounded-md min-h-20 justify-between p-6 gap-6 mb-10">
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
          <span>Status</span>
          <span className="text-green px-6 py-2 font-medium bg-green/20 rounded-md w-full text-center">Paid</span>
        </div>
        <div className="flex gap-2">
          <EditInvoiceDetailsModal />
          <Button size="lg" variant="destructive" className="font-semibold rounded-full h-12">Delete</Button>
          <Button size="lg" className="font-semibold rounded-full h-12">Mark as Paid</Button>
        </div>
      </section>
      <section className="bg-white shadow-lg rounded-md min-h-20 justify-between p-10">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold"><span className="text-grey-100">#</span>{invoiceDetails?.id}</p>
            <p className="text-grey-100">Graphic Design</p>
          </div>
          <div className="text-right text-grey-100">
            <p>123 Harper Ave.</p>
            <p>Denver, CO</p>
            <p>80014</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly m-10">
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-grey-100 pb-4">Invoice Date</p>
              <p className="font-semibold">{invoiceDetails?.sentDate}</p>
            </div>
            <div>
              <p className="text-grey-100 pb-4">Payment Due</p>
              <p className="font-semibold">{invoiceDetails?.dueDate}</p>
            </div>
          </div>
          <div>
            <p className="text-grey-100 pb-4">Bill To</p>
            <p className="font-semibold"> {invoiceDetails?.billTo}</p>
            <p className="text-grey-100">456 Fabric Rd. <br />Denver, CO <br />80014</p>
          </div>
          <div>
            <p className="text-grey-100 pb-4">Sent to</p>
            <p className="font-semibold">{invoiceDetails?.sentTo}</p>
          </div>
        </div>
        <div className="bg-white-100 p-6">
          {/* Invoice Items */}
          <div className="flex justify-between">
            <p className="text-grey-100">Item</p>
            <p className="text-grey-100">Qty</p>
            <p className="text-grey-100">Price</p>
            <p className="text-grey-100">Total</p>
          </div>
          <div className="flex justify-between py-4">
            <p className="font-semibold">Graphic Design</p>
            <p className="text-grey-100">1</p>
            <p className="text-grey-100">$2,000.43</p>
            <p className="font-semibold">$2,000.43</p>
          </div>
        </div>
        {/* Invoice Total */}
        <div className="flex justify-between bg-blue-100 p-6 rounded-b-md text-white">
          <p>Amount Due</p>
          <p className="font-semibold text-2xl">$2,000.43</p>
        </div>
      </section>
    </Suspense>
  );
}
