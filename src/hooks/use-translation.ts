import { useLanguage } from "@/components/language-provider"
import { getTranslations, type Translations } from "@/lib/translations"

export function useTranslation(): Translations {
  const { language } = useLanguage()
  return getTranslations(language)
}