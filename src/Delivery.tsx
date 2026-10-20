import { FormattedMessage } from 'react-intl'

const delivery = { status: 'onTheWay', rider: 'Karim', stops: 2 }

export function Delivery() {
  return (
    <section>
      <h2>
        <FormattedMessage id="delivery.title" />
      </h2>
      <p>
        <FormattedMessage id="delivery.status" values={{ status: delivery.status }} />
      </p>
      <p>
        <FormattedMessage id="delivery.rider" values={{ name: delivery.rider }} />
      </p>
      <p>
        <FormattedMessage id="delivery.stops" values={{ count: delivery.stops }} />
      </p>
      <a href="tel:+000">
        <FormattedMessage id="delivery.call" values={{ name: delivery.rider }} />
      </a>
      <p>
        <FormattedMessage
          id="delivery.rate"
          values={{ b: (chunks) => <b>{chunks}</b> }}
        />
      </p>
    </section>
  )
}
