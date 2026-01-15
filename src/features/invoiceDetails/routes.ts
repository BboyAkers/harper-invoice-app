import { dashboardLayoutRoute } from "@/router/dashboardRoute"
import { createRoute } from "@tanstack/react-router"
import { InvoiceDetails } from "@/features/invoiceDetails/index"
import { InvoiceDetailsLayout } from "@/features/invoiceDetails/InvoiceDetailsLayout"

export const invoiceDetailsLayoutRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  id: '_invoiceDetailsLayout',
  component: InvoiceDetailsLayout,
})

const invoiceDetailsIndexRoute = createRoute({
  getParentRoute: () => invoiceDetailsLayoutRoute,
  path: '/details/$invoiceId',
  component: InvoiceDetails,
})

export const invoiceDetailsRoutes = [invoiceDetailsIndexRoute]
