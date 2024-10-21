import React, { useCallback, useEffect, useState } from 'react'
import Categories from '../components/Main/Categories'
import Sort from '../components/Main/Sort'

import { PizzaSkeleton } from '../components/Main/PizzaSkeleton'
import PizzaBlock, { PizzaBlockType } from '../components/Main/PizzaBlock'

import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzasData } from '../redux/slices/pizzaItemsSlice'
import FailureView from '../components/Main/pizzasStatus/FailureView'
import EmptyPizzaItems from '../components/Main/pizzasStatus/EmptyPizzaItems'
import Pagination from '../components/Main/Pagination'

import { setCategory, setPage, SortDataType } from '../redux/slices/filterSlice'
import { RootState, useAppDispatch } from '../redux/store'

export default function Home(): React.ReactElement {
    const dispatch = useAppDispatch()

    const { pizzaItems, status } = useSelector((state: RootState) => state.itemsReducer)
    const { category, page } = useSelector((state: RootState) => state.filterReducer)
    const { inputValue } = useSelector((state: RootState) => state.filterReducer)

    const [sortCurrentTitle, setCurrentSortTitle] = useState<SortDataType>({ sortName: 'Популярности (по возрастанию)', sortPropertyName: 'rating', })

    const fetchPizzas = () => {
        dispatch(fetchPizzasData({ page, category, sortTitle: sortCurrentTitle.sortPropertyName }))
    }

    useEffect(() => {
        fetchPizzas()
    }, [page, category, sortCurrentTitle])

    const changeCategory = useCallback((i: number): void => {
        dispatch(setCategory(i))
    }, [])

    const setCurrentSortTitleFunc = useCallback((item: SortDataType) => {
        setCurrentSortTitle(item)
    }, [])

    const setPageFunc = useCallback((i: number) => {
        dispatch(setPage(i + 1))
    }, [])

    return (
        <section className='home'>
            <section className='container category-sort'>
                <Categories category={category} changeCategory={changeCategory} />
                <Sort sortCurrentTitle={sortCurrentTitle} setCurrentSortTitleFunc={setCurrentSortTitleFunc} />
            </section>
            {status === 'loading' && (
                <section className='container pizza-wrapper'>
                    {Array.from({ length: pizzaItems.length || 3 }).map((_, i) => <PizzaSkeleton key={i} />)}
                </section>
            )}
            {status === 'success' && (
                <section className='container pizza-wrapper'>
                    {pizzaItems.filter((item: PizzaBlockType) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
                    .map((item: PizzaBlockType) => <PizzaBlock key={item.id} {...item} />)}
                </section>
            )}
            {status === 'empty' && (
                <section>
                    <EmptyPizzaItems/>
                </section>
            )}
            {status === 'rejected' && <FailureView/>}
            <Pagination page={page} setPageFunc={setPageFunc} />
        </section>
    )
}
