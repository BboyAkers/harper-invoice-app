import { Outlet } from "@tanstack/react-router";

export function AuthLayout() {
  return (
    <>
    <div className="grid h-screen grid-cols-1 md:grid-cols-2">
      <section className="hidden md:block">
        <div className="flex flex-col justify-center h-full px-6 py-12 bg-indigo-600 lg:px-8 sm:py-32 md:py-48">
          <div className="w-full max-w-lg mx-auto text-center">
            <h1 className="tracking-tight text-6xl">
              Welcome to <span className="block">Harper Invoice</span>
            </h1>
          </div>
        </div>
      </section>
      <section>
      <Outlet />
      </section>
    </div>
    </>
  )
}
