import { createRouter, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "@/router/routeTree"
import { queryClient } from "@/react-query/queryClient"



function App() {

  const router = createRouter({
    routeTree,
    context: {
      queryClient
    }
  })

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
