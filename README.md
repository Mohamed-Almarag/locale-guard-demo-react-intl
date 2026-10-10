# Locale Guard demo: React with react-intl

A small React restaurant menu in English, Arabic, French and German, translated
with [react-intl](https://formatjs.github.io/docs/react-intl). Messages use ICU
syntax and flat keys (`"menu.add": "Add to order"`), as react-intl expects. It
shows what [Locale Guard](https://github.com/Mohamed-Almarag/locale-guard)
reports on real pull requests.

## Setup

| | |
|---|---|
| Framework | React 19 with Vite |
| Translation library | `react-intl` (ICU messages, flat keys) |
| Locale files | `src/lang/{locale}.json`, one file per language |
| Base locale | `en` |

The whole setup is one workflow file,
[.github/workflows/translations.yml](.github/workflows/translations.yml):

```yaml
- uses: Mohamed-Almarag/locale-guard@v1
  with:
    files: src/lang/{locale}.json
    format: react-intl
```

## Pull requests to look at

| Pull request | What it shows | Result |
|---|---|---|
| [#1 Add delivery tracking](https://github.com/Mohamed-Almarag/locale-guard-demo-react-intl/pull/1) | Missing keys with a copy-paste block that keeps the keys flat, a renamed `select` argument, a missing rich text tag, a plural without the `other` form, a message that does not compile and untranslated text | ❌ Fails |
| [#2 Show opening hours](https://github.com/Mohamed-Almarag/locale-guard-demo-react-intl/pull/2) | The first commit forgets French and German, the second one adds them, and the same comment turns green | ✅ Passes |
| [#3 Lay out the menu as cards](https://github.com/Mohamed-Almarag/locale-guard-demo-react-intl/pull/3) | A change that touches no translation file, so the check finishes in seconds | ✅ Passes |

The `main` branch already has two old issues: a key French never got, and a
German key that English does not have. Locale Guard lists them apart from the
issues each pull request adds, collapsed, and they do not fail the check.

## Run the app

```bash
npm install
npm run dev
```
