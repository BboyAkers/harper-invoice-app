
import { AuthLayout } from "@/features/auth/AuthLayout";
import { SignIn } from "@/features/auth/SignIn";
import { SignUp } from "@/features/auth/SignUp";
import { rootRoute } from "@/router/routeTree";
import { createRoute } from "@tanstack/react-router";

const authLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: '_authLayout',
  component: AuthLayout
});

const signInRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: '/signin',
  component: SignIn
});

const signUpRoute = createRoute({
  getParentRoute: () => authLayoutRoute,
  path: '/signup',
  component: SignUp
});

export const authRouteTree = authLayoutRoute.addChildren([
    signInRoute,
    signUpRoute,
  ]);
