import { dashboardLayoutRoute } from "@/router/dashboardRoute"
import { createRoute } from "@tanstack/react-router"
import { InvoiceDetails } from "@/features/invoiceDetails/index"

export const invoiceDetailsLayoutRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  id: '_invoiceDetailsLayout',
})

const invoiceDetailsIndexRoute = createRoute({
  getParentRoute: () => invoiceDetailsLayoutRoute,
  path: '/details/$invoiceId',
  component: InvoiceDetails,
})

export const invoiceDetailsRoutes = [invoiceDetailsIndexRoute]
