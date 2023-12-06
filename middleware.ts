import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["de"],
  defaultLocale: "de",
});

export const config = {
  matcher: ["/", "/(de)/:path*"],
};
