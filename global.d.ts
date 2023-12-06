// Use type safe message keys with `next-intl`
type Messages = typeof import("@/messages/de.json");
declare interface IntlMessages extends Messages {}
