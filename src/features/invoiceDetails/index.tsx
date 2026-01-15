import { Button } from "@/components/ui/button";

export function InvoiceDetails() {
  return (
    <>
      <section className="flex flex-col md:flex-row bg-white shadow-lg rounded-md min-h-20 justify-between px-6 py-4 gap-6 mb-8">
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
          <span>Status</span>
          <span className="text-green px-6 py-2 font-medium bg-green/20 rounded-md">Paid</span>
        </div>
        <div className="flex gap-2">
          <Button size="lg" variant="ghost" className="font-semibold rounded-full h-12">Edit</Button>
          <Button size="lg" variant="destructive" className="font-semibold rounded-full h-12">Delete</Button>
          <Button size="lg" className="font-semibold rounded-full h-12">Mark as Paid</Button>
        </div>
      </section>
      <section className="bg-white shadow-lg rounded-md min-h-20 justify-between px-6 py-4">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold"><span className="text-grey-100">#</span>RT3080</p>
            <p className="text-grey-100">Graphic Design</p>
          </div>  
          <div className="text-right text-grey-100">
            <p>123 Harper Ave.</p>
            <p>Denver, CO</p>
            <p>80014</p>
          </div>  
        </div>
        <div>
          <p>Invoice Date</p>
          <p>19 Aug 2026</p>
        </div>
      </section>
    </>
  );
}
