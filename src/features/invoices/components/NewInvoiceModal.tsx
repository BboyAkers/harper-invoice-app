import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFieldArray, useForm } from "react-hook-form";
import { InvoiceItemsFormInputs } from "@/components/InvoiceItemsFormInputs";
import { PlusCircleIcon, PlusIcon } from "lucide-react";
import { useSubmitNewInvoiceMutation } from "@/features/invoices/hooks/mutations/useSubmitNewInvoice";
import ClientBillingInfoForm from "@/components/ClientBillingInfoForm";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetClientsQuery } from "@/features/invoices/hooks/queries/useGetClientsQuery";
import { useSubmitClientBillingInfoMutation } from "@/features/invoiceDetails/hooks/mutations/useSubmitClientBillingInfoMutation";

export function NewInvoiceModal({ username }: { username: string }) {
  const form = useForm();

  const { mutate: submitNewInvoice, isPending: isSubmitNewInvoicePending } = useSubmitNewInvoiceMutation();
  const { data: clients } = useGetClientsQuery(username);
  const [isClientBillingFormShowing, setIsClientBillingFormShowing] = useState(false);
  const { mutate: addClientBillingInfo, isPending: isAddClientBillingInfoPending } = useSubmitClientBillingInfoMutation();

  const InvoiceItemsFieldArray = useFieldArray({
    control: form.control,
    name: 'invoiceItems',
  });

  const handleSubmitClientBillingInfo = (clientBillingInfoData: unknown) => {
    console.log('Client billing info submitted');
    addClientBillingInfo(clientBillingInfoData, {
      onSuccess: () => {
        console.log('Client billing info added successfully');
      }
    });
  };


  const handleClientBillingToggle = () => {
    setIsClientBillingFormShowing(!isClientBillingFormShowing);
  };
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
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[200px]" disabled={isClientBillingFormShowing}>
                <SelectValue placeholder="Select a client" />
              </SelectTrigger>
              <SelectContent>
                {clients?.map((client) => (
                  <SelectItem key={client.id} value={client.id}>
                    {client.clientCompanyName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button size="sm" className="ml-2" type="button" onClick={handleClientBillingToggle}> Add a Client</Button>
          </div>
          {isClientBillingFormShowing ? (
            <ClientBillingInfoForm onFormSubmit={handleSubmitClientBillingInfo} toggleForm={handleClientBillingToggle} />
          ) : ''}

          <hr className="my-4" />
          <h2 className="font-semibold text-purple mb-2">Bill From:</h2>
          <Form {...form}>
            <form className="space-y-6">
              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St" {...field} />
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
              <h2 className="font-semibold text-purple mb-2">Invoice Details:</h2>
              <FormField
                control={form.control}
                name="invoiceDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Invoice Date</FormLabel>
                    <FormControl>
                      <Input placeholder="Invoice Date" {...field} />
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
                      <Input placeholder="Due Date" {...field} />
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
                      <Input placeholder="Project Description" {...field} />
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
