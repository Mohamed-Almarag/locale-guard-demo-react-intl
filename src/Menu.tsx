import { useState } from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'

const dishes = [
  { id: 'falafel', name: 'Falafel wrap', price: 8.5, spice: 'mild' },
  { id: 'curry', name: 'Green curry', price: 13, spice: 'hot' },
  { id: 'risotto', name: 'Mushroom risotto', price: 14.5, spice: 'none' }
]

export function Menu() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <strong>{dish.name}</strong>
            <FormattedNumber value={dish.price} style="currency" currency="EUR" />
            <FormattedMessage id="menu.spicy" values={{ level: dish.spice }} />
            <button type="button" onClick={() => setCount(count + 1)}>
              <FormattedMessage id="menu.add" />
            </button>
          </li>
        ))}
      </ul>
      <p>
        <FormattedMessage id="order.items" values={{ count }} />
      </p>
      <p>
        <FormattedMessage id="order.eta" values={{ minutes: 25 }} />
      </p>
      <p>
        <FormattedMessage
          id="order.note"
          values={{ link: (chunks) => <a href="#note">{chunks}</a> }}
        />
      </p>
    </>
  )
}
