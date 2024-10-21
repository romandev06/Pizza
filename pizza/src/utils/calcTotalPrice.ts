import { CartItem } from "../redux/slices/cartSlice";

export const calcTotalPrice = (cartItems: CartItem[]): number => {
    return cartItems.reduce((prev: number, current: CartItem) => prev + (current.price * current.count), 0)
}