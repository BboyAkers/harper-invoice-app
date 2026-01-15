import { Outlet } from "@tanstack/react-router"
import { Navbar } from "@/components/Navbar"
import { CogIcon, HomeIcon, UserIcon } from "lucide-react"

export const DashboardLayout = () => {
  const menuItems = [
    {
      text: "Invoices",
      to: "/",
      icon: <HomeIcon />,
    },
    {
      text: "Clients",
      to: "/clients",
      icon: <UserIcon />,
    },
    {
      text: "Settings",
      to: "/settings",
      icon: <CogIcon />,
    },
  ]
  return (
    <div className="bg-white-100 h-screen">
      <header className="fixed top-0 z-40 w-full h-20 bg-blue md:px-12">
        <Navbar menuItems={menuItems} />
      </header>
      <main className="mt-20 px-4 pt-4 md:px-12 min-h-[calc(100vh-theme(spacing.32))]">
        <Outlet />
      </main>
    </div>
  )
}
