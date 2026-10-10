import { FormattedMessage, useIntl } from 'react-intl'

export function Hours() {
  const intl = useIntl()
  const time = (hours: number) =>
    intl.formatTime(new Date(2026, 9, 10, hours), { hour: 'numeric', minute: '2-digit' })
  const monday = intl.formatDate(new Date(2026, 9, 12), { weekday: 'long' })

  return (
    <section>
      <h2>
        <FormattedMessage id="hours.title" />
      </h2>
      <p>
        <FormattedMessage id="hours.open" values={{ from: time(12), to: time(23) }} />
      </p>
      <p>
        <FormattedMessage id="hours.closed" values={{ day: monday }} />
      </p>
      <p>
        <FormattedMessage id="hours.lastOrder" values={{ minutes: 30 }} />
      </p>
    </section>
  )
}
