import { dashboardLayoutRoute } from "@/router/dashboardRoute"
import { createRoute } from "@tanstack/react-router"
import { InvoicesIndex } from "@/features/invoices/index"
import { NewInvoice } from "@/features/invoices/NewInvoice"

export const invoicesLayoutRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  id: '_invoicesLayout',
})

const invoicesIndexRoute = createRoute({
  getParentRoute: () => invoicesLayoutRoute,
  path: '/',
  component: InvoicesIndex,
})

const newInvoiceRoute = createRoute({
  getParentRoute: () => invoicesLayoutRoute,
  path: '/new',
  component: NewInvoice,
})

export const invoicesRoutes = [invoicesIndexRoute, newInvoiceRoute]
