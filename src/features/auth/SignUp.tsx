import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useSignUpMutation, type UserCredentials } from "@/features/auth/hooks/useSignUp";

interface SignUpCredentials extends UserCredentials {
  confirmPassword: string;
}

export function SignUp() {

  const form = useForm<SignUpCredentials>();

  const { mutate: signUpUser, isPending: isSignUpPending } = useSignUpMutation();

  const onSignUpFormSubmit = (formData: SignUpCredentials) => {
    if (formData) {
      signUpUser({
        ...formData
      },
        {
          onSuccess: () => {
            form.reset();
            console.log('User signed up successfully');
          }
        }
      );
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-full p-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Harper Dog Logo"
          src="/src/assets/HDBDogOnly.svg"
          className="w-auto h-20 mx-auto"
        />
        <h2 className="mt-8 font-bold tracking-tight text-center text-2xl/9">
          Sign up for an account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSignUpFormSubmit)} className="space-y-6">
            <div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} className="text-black bg-white" />
                    </FormControl>
                    <FormDescription className="text-white">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} type="password" className="text-black bg-white" />
                    </FormControl>
                    <FormDescription className="text-white">
                      Please choose a strong password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="confirm password" {...field} type="password" className="text-black bg-white" />
                    </FormControl>
                    <FormDescription className="text-white">
                      Please confirm your password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={isSignUpPending}
              >
                Sign up
              </button>
            </div>
          </form>
        </Form>

        <p className="mt-2 text-center text-sm/6">
          Already have an account?{' '}
          <Link to="/signin" className="font-semibold hover:text-indigo-500">
            Sign in!
          </Link>
        </p>
      </div>
    </div>
  )
}
