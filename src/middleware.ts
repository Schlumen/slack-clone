import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware(async request => {
  if (!isPublicPage(request) && !(await isAuthenticatedNextjs())) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }
  // TODO: Redirect user away from /auth page if they are already authenticated.
  if (isPublicPage(request) && (await isAuthenticatedNextjs())) {
    return nextjsMiddlewareRedirect(request, "/");
  }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
