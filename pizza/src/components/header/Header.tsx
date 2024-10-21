import React, { useEffect, useRef } from 'react'
import HeaderSearch from './HeaderSearch'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export default function Header(): React.ReactElement {
    const { totalPrice, cartItems } = useSelector((state: RootState) => state.cartReducer)
    const totalCount = cartItems.reduce((prev, current) => prev + current.count, 0)
    const { pathname } = useLocation()

    const cartItemsRef = useRef(false)

    useEffect(() => {
        if (cartItemsRef.current) {
            const data = JSON.stringify(cartItems)
            localStorage.setItem('cartItems', data)
        }
        cartItemsRef.current = true
    }, [cartItems])

    return (
        <header>
            <section className='container header-container'>
                <Link to={'/'}>
                    <section className='header-logo'>
                        <img src="/appImages/logo.svg" alt="icon" />
                        <div>
                            <h3>React Pizza</h3>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </section>
                </Link>
                <section>
                    {pathname !== '/cart' && pathname !== '/cart-empty' && (
                        <HeaderSearch/>
                    )}
                </section>
                {pathname !== '/cart-empty' && (
                    <Link to={'/cart'}>
                    <section className='cart-button'>
                        <p>{totalPrice} ₽</p>
                        <div className='cart-count'>
                            <img src="/appImages/cart.svg" alt="icon" />
                            <p>{totalCount}</p>
                        </div>
                    </section>
                </Link>
                )}
            </section>
        </header>
    )
}