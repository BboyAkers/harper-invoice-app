import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TrashIcon } from 'lucide-react';
import type { Control, UseFieldArrayReturn, UseFormReturn } from 'react-hook-form';

type InvoiceItemsFormInputsProps = {
  control: Control;
  fieldArray: UseFieldArrayReturn;
  form: UseFormReturn;
  index: number;
};

export function InvoiceItemsFormInputs({
  control,
  fieldArray,
  form,
  index,
}: InvoiceItemsFormInputsProps) {
  const onRemoveClicked = () => {
    fieldArray?.remove(index);
    void form.trigger();
  };
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center" key={index}>
      <FormField
        control={control}
        name={`invoiceItems.${index}.itemName`}
        render={({ field }) => (
          <FormItem className='min-w-32'>
            <FormLabel>Item Name</FormLabel>
            <FormControl>
              <Input placeholder="Item Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`invoiceItems.${index}.quantity`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quantity</FormLabel>
            <FormControl>
              <Input placeholder="Quantity" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`invoiceItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Price</FormLabel>
            <FormControl>
              <Input placeholder="Price" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`invoiceItems.${index}.total`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Total</FormLabel>
            <FormControl>
              <Input placeholder="Total" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button
        variant="destructive"
        size="icon"
        onClick={onRemoveClicked}
        className='w-32 md:w-10 md:mt-6'
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
