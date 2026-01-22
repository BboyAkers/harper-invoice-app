import type { Invoice } from '@/lib/types';
import { queryOptions } from '@tanstack/react-query';

async function getInvoiceDetails(invoiceId: string): Promise<Invoice> {
  const response = await fetch(`/InvoiceResource/${invoiceId}`);
  const data = await response.json();
  return data[0];
}

export function useGetInvoiceDetailsQuery(invoiceId: string) {
  return queryOptions({
    queryKey: [invoiceId, 'invoice-details'],
    queryFn: () => getInvoiceDetails(invoiceId),
    retry: false,
  });
}
