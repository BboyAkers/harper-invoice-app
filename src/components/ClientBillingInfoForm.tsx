import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  clientCompanyName: z.string().min(1, "Company name is required"),
  clientName: z.string().min(2, {
    message: "Client name must be at least 2 characters long",
  }),
  clientEmail: z.email("Email is required"),
  clientAddressLine1: z.string().min(1, "Address is required"),
  clientAddressLine2: z.string().optional(),
  clientCity: z.string().min(1, "City is required"),
  clientState: z.string().min(1, "State is required"),
  clientZipCode: z.string().min(1, "Zip code is required"),
  clientCountry: z.string().min(1, "Country is required"),
});

type FormValues = z.infer<typeof formSchema>;

function ClientBillingInfoForm({ onFormSubmit, toggleForm }: { onFormSubmit: (clientBillingInfoData: unknown) => void, toggleForm: () => void }) {

  const form = useForm<FormValues>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      clientCompanyName: "",
      clientName: "",
      clientEmail: "",
      clientAddressLine1: "",
      clientAddressLine2: "",
      clientCity: "",
      clientState: "",
      clientZipCode: "",
      clientCountry: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // console.log(data);
    onFormSubmit(data);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="clientCompanyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="clientName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Name</FormLabel>
                <FormControl>
                  <Input placeholder="client Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clientEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client's Email</FormLabel>
                <FormControl>
                  <Input placeholder="client Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clientAddressLine1"
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

          <FormField
            control={form.control}
            name="clientAddressLine2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street Address Line 2</FormLabel>
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
              name="clientCity"
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
              name="clientState"
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
              name="clientZipCode"
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
          <div className="flex gap-4 justify-end">
            <Button variant="outline" type="button" onClick={() => toggleForm()}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ClientBillingInfoForm;
