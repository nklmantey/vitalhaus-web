import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locale === "de"
      ? import("@/messages/de.json")
      : import(`@/messages/${locale}.json`))
  ).default,
}));
