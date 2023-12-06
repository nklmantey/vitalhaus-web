import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "@/config";

export default createMiddleware({
  defaultLocale: "de",
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de)/:path*"],
};
