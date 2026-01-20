import { queryOptions } from '@tanstack/react-query';

async function getInvoiceDetails(invoiceId: string) {
  const response = await fetch(`/InvoiceResource/${invoiceId}`);
  return response;
}

export function useGetInvoiceDetailsQuery(invoiceId: string) {
  return queryOptions({
    queryKey: [invoiceId, 'invoice-details'],
    queryFn: () => getInvoiceDetails(invoiceId),
    retry: false,
  });
}
