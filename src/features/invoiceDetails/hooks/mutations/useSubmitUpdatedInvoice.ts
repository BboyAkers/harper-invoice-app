import { useMutation } from '@tanstack/react-query';


export async function submitUpdatedInvoice(invoiceData: unknown) {
  try {
    const response = await fetch('/InvoiceResource', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoiceData),

    });
    return response;
  }
  catch (error) {
    console.error('Error during submit new invoice:', error);
    throw new Error('Submit new invoice failed');
  }

}

export function useSubmitUpdatedInvoiceMutation() {
  return useMutation<unknown, Error, unknown>({
    mutationFn: (invoiceData) => submitUpdatedInvoice(invoiceData),
  });
}
