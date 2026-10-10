import { useEffect, useState } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl'
import { Hours } from './Hours'
import { Menu } from './Menu'
import { languages, messages, type LanguageCode } from './i18n'

export function App() {
  const [locale, setLocale] = useState<LanguageCode>('en')

  useEffect(() => {
    const language = languages.find((item) => item.code === locale)
    document.documentElement.lang = locale
    document.documentElement.dir = language?.dir ?? 'ltr'
  }, [locale])

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={messages[locale]}>
      <header>
        <h1>
          <FormattedMessage id="app.title" />
        </h1>
        <label>
          <FormattedMessage id="app.language" />
          <select value={locale} onChange={(event) => setLocale(event.target.value as LanguageCode)}>
            {languages.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </header>
      <main>
        <Menu />
        <Hours />
      </main>
    </IntlProvider>
  )
}
