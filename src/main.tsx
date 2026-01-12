import { StrictMode } from 'react'
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "@/router/routeTree"
import { queryClient } from "@/react-query/queryClient"
import { createRoot } from 'react-dom/client'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'

const router = createRouter({
  routeTree,
  context: {
    queryClient
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <TanStackRouterDevtools router={router} />
    </>
  </StrictMode>
)
