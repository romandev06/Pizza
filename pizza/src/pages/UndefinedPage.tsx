import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UndefinedPage(): React.ReactElement {
    const navigate = useNavigate()

    return (
        <section className='undefined-section'>
            <h2>Упс! Страница не найдена. Возможно, она была удалена или никогда не существовала 😫</h2>
            <button onClick={() => navigate('/')}>Вернуться на главную страницу 👻</button>
        </section>
    )
}
