import { useMutation } from '@tanstack/react-query';


export async function submitNewInvoice(invoiceData: unknown) {
  try {
    const response = await fetch('/InvoiceResource', {
      method: 'POST',
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

export function useSubmitNewInvoiceMutation() {
  return useMutation<unknown, Error, unknown>({
    mutationFn: (invoiceData) => submitNewInvoice(invoiceData),
  });
}
