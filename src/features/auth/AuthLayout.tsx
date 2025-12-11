import { Outlet } from "@tanstack/react-router";

export function AuthLayout() {
  return (
    <>
    <div className="grid h-screen grid-cols-1 md:grid-cols-2">
      <section>
        <div className="flex flex-col justify-center h-full px-6 py-12 bg-indigo-600 lg:px-8 sm:py-32 md:py-48">
          <div className="w-full max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to Harper Invoice
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-200">
              Sign in to access your account and continue where you left off.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 160C144 160 288 96 432 101.3C576 107 720 181 864 197.3C1008 213 1152 171 1296 165.3C1344 163.2 1392 165.8 1440 172.3V320H0V160Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
      <section>
      <Outlet />
      </section>
    </div>
    </>
  )
}
