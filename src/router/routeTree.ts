

import { authRouteTree } from "@/features/auth/routes";
import type { QueryClient} from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { dashboardLayoutRoute } from "@/router/dashboardRoute";
import { invoicesLayoutRoute, invoicesRoutes } from "@/features/invoices/routes";
import { invoiceDetailsLayoutRoute, invoiceDetailsRoutes } from "@/features/invoiceDetails/routes";

export const rootRoute = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	component: Outlet,
});


export const routeTree = rootRoute.addChildren([
  authRouteTree,
  dashboardLayoutRoute.addChildren([
    invoicesLayoutRoute.addChildren([
      ...invoicesRoutes,
    ]),
    invoiceDetailsLayoutRoute.addChildren([
      ...invoiceDetailsRoutes
    ])
  ])
]);
