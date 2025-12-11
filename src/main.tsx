import { StrictMode } from 'react'
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "@/router/routeTree"
import { queryClient } from "@/react-query/queryClient"
import { createRoot } from 'react-dom/client'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import './index.css'

  const router = createRouter({
    routeTree,
    context: {
      queryClient
    }
  })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} />
  </StrictMode>,
)
