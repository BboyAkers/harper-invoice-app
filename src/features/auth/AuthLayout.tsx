import { Outlet } from "@tanstack/react-router";

export function AuthLayout() {
  return (
    <main className="h-screen bg-purple text-white">
      <Outlet />
    </main>
  )
}
