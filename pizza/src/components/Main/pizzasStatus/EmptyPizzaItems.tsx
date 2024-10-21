import React from 'react'

export default function EmptyPizzaItems(): React.ReactElement {
    return (
        <section className='container empty-status__container'>
            <h2>К сожалению, пиццы отсутствуют! 😢</h2>
        </section>
    )
}