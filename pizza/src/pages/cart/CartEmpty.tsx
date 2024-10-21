import React from 'react'
import { Link } from 'react-router-dom'

export default function CartEmpty(): React.ReactElement {
    return (
        <section className='cart-empty__section'>
            <h3>Корзина пустая </h3>
            <p>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img src="/appImages/cart-empty-img.svg" alt="empty cart image" />
            <Link to={'/'}>
                <button>Вернуться назад</button>
            </Link>
        </section>
    )
}
