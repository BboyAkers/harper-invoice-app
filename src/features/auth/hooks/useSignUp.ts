import { useMutation } from '@tanstack/react-query';

export interface UserCredentials {
	username: string;
	password: string;
}

export async function onSignUpSubmit(signUpCredentials: UserCredentials) {
  try {
	const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operation: 'add_user',
      ...signUpCredentials,
    }),
    
  });
    return response;
  } 
  catch (error) {
    console.error('Error during sign up:', error);
    throw new Error('Sign up failed');
  }
	
}

export function useSignUpMutation() {
	return useMutation<unknown, Error, UserCredentials>({
		mutationFn: (signUpData) => onSignUpSubmit(signUpData),
	});
}
