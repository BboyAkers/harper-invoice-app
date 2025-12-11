import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/router/routeTree";
import { DashboardLayout } from "@/features/layouts/DashboardLayout";

export const dashboardLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: '_dashboardLayout',
  component: DashboardLayout
});
