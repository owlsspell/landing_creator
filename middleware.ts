// eslint-disable-next-line import/no-extraneous-dependencies
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/playground",
    "/api/getAuthenticatedUserId",
    "/api/images",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
