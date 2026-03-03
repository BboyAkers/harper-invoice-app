import { useMutation } from '@tanstack/react-query';

export interface UserCredentials {
	email: string;
	password: string;
}

export async function onSignInSubmit(signInCredentials: UserCredentials) {
  try {
	const response = await fetch('/SignIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...signInCredentials,
    }),
    
  });
    return response;
  } 
  catch (error) {
    console.error('Error during sign in:', error);
    throw new Error('Sign in failed');
  }
	
}

export function useSignInMutation() {
	return useMutation<unknown, Error, UserCredentials>({
		mutationFn: (signInData) => onSignInSubmit(signInData),
	});
}
