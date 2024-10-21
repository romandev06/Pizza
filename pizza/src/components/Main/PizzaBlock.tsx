import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, CartItem } from '../../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../redux/store'

export type PizzaBlockType = {
    id: string,
    image: string,
    title: string,
    price: number,
    category: number,
    rating: number,
    sizes: number[],
    types: number[],
}


export default function PizzaBlock({ id, image, title, price, category, rating, sizes, types }: PizzaBlockType): React.ReactElement {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getCartItemCount = useSelector((state: RootState) => state.cartReducer.cartItems.find(item => item.id === id))

    const currentItemCount = getCartItemCount ? getCartItemCount.count : 0

    const [activeType, setActiveType] = useState<number>(0)
    const [activeSize, setActiveSize] = useState<number>(0)

    const typeNames: string[] = ['Тонкое', 'Традиционое']
    const sizeNames: string[] = ['26', '30', '40']


    const addItemToCart = () => {
        const cartItemData = {
            id, image, title, price, size: sizeNames[activeSize], type: typeNames[activeType], count: 0,
        }

        dispatch(addItem(cartItemData))
    }

    return (
        <section className='pizza-section'>
            <button onClick={() => navigate(`/pizza-page/${id}`)} className='pizza-img__btn'>
                <img src={image} alt="pizza image" />
            </button>
            <p className='pizza-title'>{title}</p>
            <div className='sizes-types-wrapper'>
                <div className='pizza-types'>
                    {types.map((item: number, i: number) => <p onClick={() => setActiveType(i)} className={i === activeType ? 'pizza-types__text-active' : 'pizza-types__text'} key={i}>
                        {typeNames[item]}
                    </p>)}
                </div>
                <div className='pizza-sizes'>
                    {sizes.map((item: number, i: number) => <p onClick={() => setActiveSize(i)} className={i === activeSize ? 'pizza-sizes__text-active' : 'pizza-sizes__text'} key={i}>
                        {sizeNames[item]} см.
                    </p>)}
                </div>
            </div>
            <div className='pizza-add__item'>
                <h3 className='pizza-price'>От {price} ₽</h3>
                <button onClick={addItemToCart} className='pizza-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pizza-add__icon"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    <p>Добавить</p>
                    <span>{currentItemCount}</span>
                </button>
            </div>
            <h2 className='pizza-rating'>{rating} (Рейтинг)</h2>
        </section>
    )
}
