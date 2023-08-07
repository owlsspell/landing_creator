// eslint-disable-next-line import/no-extraneous-dependencies
import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/', '/captiveportal', '/api/getAuthenticatedUserId'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
