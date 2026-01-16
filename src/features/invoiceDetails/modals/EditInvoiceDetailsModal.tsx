import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFieldArray, useForm } from "react-hook-form";
import { InvoiceItemsFormInputs } from "@/components/InvoiceItemsFormInputs";
import { PlusIcon } from "lucide-react";

export function EditInvoiceDetailsModal() {
  const form = useForm();

  // const { mutate: editInvoiceDetails, isPending: isEditInvoiceDetailsPending } = useEditInvoiceDetailsMutation();

  const InvoiceItemsFieldArray = useFieldArray({
    control: form.control,
    name: 'invoiceItems',
  });

  const onAddInvoiceItemClick = () => {
    InvoiceItemsFieldArray.append({
      name: '',
      price: '',
      quantity: '',
      total: '',
    });
  };

  const onEditInvoiceDetailsFormSubmit = (formData) => {
    if (formData) {
      // editInvoiceDetails({
      //   ...formData
      // },
      //   {
      //     onSuccess: () => {
      //       form.reset();
      //       // console.log('User signed up successfully');
      //     }
      //   }
      // );
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="ghost" className="font-semibold rounded-full h-12">Edit</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px] h-[600px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit <span className="font-semibold"><span className="text-grey-100">#</span>RT3080</span></DialogTitle>
          <DialogDescription>
            Edit the details for this invoice.
          </DialogDescription>
        </DialogHeader>
        <div>
          <h2 className="font-semibold text-purple mb-2">Bill From:</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onEditInvoiceDetailsFormSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St" {...field} className="text-black bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Denver" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input placeholder="CO" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip</FormLabel>
                      <FormControl>
                        <Input placeholder="80211" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
        <hr />
        <div>
          <h2 className="font-semibold text-purple mb-2">Bill To:</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onEditInvoiceDetailsFormSubmit)} className="space-y-6">

              <FormField
                control={form.control}
                name="clientsName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Clients Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Clients Name" {...field} className="text-black bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="clientsEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client's Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Clients Email" {...field} className="text-black bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St" {...field} className="text-black bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Denver" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input placeholder="CO" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip</FormLabel>
                      <FormControl>
                        <Input placeholder="80211" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
        <div>
          <h2 className="font-semibold text-purple mb-2">Invoice Details:</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onEditInvoiceDetailsFormSubmit)} className="space-y-6">

              <FormField
                control={form.control}
                name="invoiceDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Invoice Date</FormLabel>
                    <FormControl>
                      <Input placeholder="Invoice Date" {...field} className="text-black bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Due Date</FormLabel>
                    <FormControl>
                      <Input placeholder="Due Date" {...field} className="text-black bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Description" {...field} className="text-black bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {InvoiceItemsFieldArray.fields.map((field, index) => (
                <InvoiceItemsFormInputs
                  control={form.control}
                  fieldArray={InvoiceItemsFieldArray}
                  form={form}
                  index={index}
                  key={field.id}
                />
              ))}

              <div className="md:col-span-6 col-span-3">
                <Button
                  type="button"
                  variant="ghost"
                  className="rounded-full"
                  onClick={onAddInvoiceItemClick}
                >
                  <PlusIcon />
                  Add Additional Region Usage
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Save Changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
