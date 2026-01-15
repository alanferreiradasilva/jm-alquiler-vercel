import { ref, computed } from 'vue'
import es from '@/locales/es.json'
import en from '@/locales/en.json'
import pt from '@/locales/pt.json'

type Locale = 'ES' | 'EN' | 'PT'

const translations: Record<string, any> = {
  ES: es,
  EN: en,
  PT: pt
}

const currentLocale = ref<Locale>('ES')

export function useI18n() {
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[currentLocale.value]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  const setLocale = (locale: Locale) => {
    currentLocale.value = locale
  }

  const locale = computed(() => currentLocale.value)

  return {
    t,
    setLocale,
    locale
  }
}
