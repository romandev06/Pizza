import React from 'react'
import { memo } from 'react'

type CategoriesType = {
    category: number,
    changeCategory: (i: number) => void
}

type CategoriesNamesType = 'Все' | 'Мясные' | 'Вегетарианская' | 'Гриль' | 'Острые' | 'Закрытые'

export default memo(function Categories({ category, changeCategory }: CategoriesType): React.ReactElement {
    const categories: CategoriesNamesType[] = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    return (
        <section className='categories-container'>
            {categories.map((item: string, i: number) =>
            <button key={i} onClick={() => changeCategory(i)} className={category === i ? 'active-category' : ''}>
                {item}
            </button>)}
        </section>
    )
})
