import { useMutation } from '@tanstack/react-query';

export interface UserCredentials {
	username: string;
	password: string;
}

export async function onSignInSubmit(signInCredentials: UserCredentials) {
  try {
	const response = await fetch('/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...signInCredentials,
    }),
    
  });
    console.log('Sign in response:', response);
    return response;
  } 
  catch (error) {
    console.error('Error during sign up:', error);
    throw new Error('Sign up failed');
  }
	
}

export function useSignInMutation() {
	return useMutation<unknown, Error, UserCredentials>({
		mutationFn: (signInData) => onSignInSubmit(signInData),
	});
}
