// react-intl reads flat messages: { "menu.add": "Add to order" }.
const files = import.meta.glob<Record<string, string>>('./lang/*.json', {
  eager: true,
  import: 'default'
})

export const messages: Record<string, Record<string, string>> = {}
for (const [path, content] of Object.entries(files)) {
  const locale = path.match(/\.\/lang\/([^/]+)\.json$/)![1]!
  messages[locale] = content
}

export const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', dir: 'ltr' }
] as const

export type LanguageCode = (typeof languages)[number]['code']
