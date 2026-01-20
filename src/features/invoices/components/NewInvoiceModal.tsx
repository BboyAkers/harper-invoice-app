import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFieldArray, useForm } from "react-hook-form";
import { InvoiceItemsFormInputs } from "@/components/InvoiceItemsFormInputs";
import { PlusCircleIcon, PlusIcon } from "lucide-react";
import { useSubmitNewInvoiceMutation } from "@/features/invoices/hooks/mutations/useSubmitNewInvoice";

export function NewInvoiceModal() {
  const form = useForm();

  const { mutate: submitNewInvoice, isPending: isSubmitNewInvoicePending } = useSubmitNewInvoiceMutation();

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

  const onNewInvoiceFormSubmit = (formData: unknown) => {
    if (formData) {
      console.log(formData);
      submitNewInvoice({ ...formData }, {
        onSuccess: () => {
          // form.reset();
          console.log('Invoice submitted successfully');
        }
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="font-semibold rounded-full h-12"><PlusCircleIcon size={40} className="mr-2" />New Invoice</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px] h-[600px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>New Invoice</DialogTitle>
          <DialogDescription>
            Create a new invoice.
          </DialogDescription>
        </DialogHeader>
        <div>
          <h2 className="font-semibold text-purple mb-2">Bill To:</h2>
          <Form {...form}>
            <form className="space-y-6">
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
              <hr />
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
              <hr />
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
            <Button type="submit" onClick={form.handleSubmit(onNewInvoiceFormSubmit)} disabled={isSubmitNewInvoicePending}>Submit Invoice</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
