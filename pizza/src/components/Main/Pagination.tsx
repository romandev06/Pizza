import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../../redux/slices/filterSlice'

type PaginationType = {
    page: number,
    setPageFunc: (i: number) => void
}

export default memo(function Pagination({ page, setPageFunc }: PaginationType): React.ReactElement {
    const dispatch = useDispatch()

    return (
        <section className='container pagination-container'>
            <button onClick={() => dispatch(setPage(0))} className={page === 0 ? `pagination-button__active` : 'pagination-button'}>Все</button>
            {Array.from({length: 7}).map((_: unknown, i: number) =>
            <button key={i} onClick={() => setPageFunc(i)} className={i + 1 === page ? `pagination-button__active` : 'pagination-button'}>
                {i + 1}
            </button>
        )}
        </section>
    )
})