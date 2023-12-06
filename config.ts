import { Pathnames } from "next-intl/navigation";

export const locales = ["de"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    de: "/",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
