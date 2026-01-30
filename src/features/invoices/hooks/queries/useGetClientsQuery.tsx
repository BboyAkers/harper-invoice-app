import { useQuery } from '@tanstack/react-query';

async function getClients(userId: string) {
  const response = await fetch(`/ClientsListResource/${userId}`);
  const data = await response.json();
  return data;
}

export function useGetClientsQuery(userId: string) {
  return useQuery({
    queryKey: [userId, 'clients'],
    queryFn: () => getClients(userId),
    retry: false,
    enabled: false
  });
}
