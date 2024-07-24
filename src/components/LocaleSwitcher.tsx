import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/config";

export default function LocaleSwitcher({ className }: { className: string }) {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  console.log(locale);

  return (
    <div className={className}>
      <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
