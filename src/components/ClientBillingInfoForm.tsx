import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { BillingInfo } from "@/lib/types";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

function ClientBillingInfoForm() {
  const form = useForm<BillingInfo>({
    defaultValues: {
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

  const onSubmit = (data: BillingInfo) => {
    console.log(data);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
}

export default ClientBillingInfoForm;
