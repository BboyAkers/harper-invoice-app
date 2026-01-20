import { queryOptions } from '@tanstack/react-query';

async function getInvoices(userId: string) {
  const response = await fetch(`/InvoicesListResource/${userId}`);
  const data = await response.json();
  return data;
}

export function useGetInvoicesQuery(userId: string) {
  return queryOptions({
    queryKey: [userId, 'invoices'],
    queryFn: () => getInvoices(userId),
    retry: false,
  });
}
