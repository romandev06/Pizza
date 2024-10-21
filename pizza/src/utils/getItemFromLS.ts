import { calcTotalPrice } from "./calcTotalPrice"

export const getItemFromLS = () => {
    const dataLS = localStorage.getItem('cartItems')
    const cartItems = dataLS ? JSON.parse(dataLS) : []
    const totalPrice = calcTotalPrice(cartItems)

    return { cartItems, totalPrice }
}