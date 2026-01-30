import { useMutation } from '@tanstack/react-query';


export async function submitClientBillingInfo(clientBillingInfoData: unknown) {
  try {
    const response = await fetch('/ClientsListResource', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientBillingInfoData),

    });
    return response;
  }
  catch (error) {
    console.error('Error during submit new client billing info:', error);
    throw new Error('Submit new client billing info failed');
  }

}

export function useSubmitClientBillingInfoMutation() {
  return useMutation<unknown, Error, unknown>({
    mutationFn: (clientBillingInfoData) => submitClientBillingInfo(clientBillingInfoData),
  });
}
