import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import { 
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
    apiAuthPrefix,
    authRoutes
} from "@/routes"

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLogged = !!req.auth;
  console.log("ROUTE: ", req.nextUrl.pathname);
  console.log("IS LOGGED IN: ", isLogged);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
