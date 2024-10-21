import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { calcTotalPrice } from "../../utils/calcTotalPrice"
import { getItemFromLS } from "../../utils/getItemFromLS"

export type CartItem = {
    id: string,
    image: string,
    title: string,
    price: number,
    size: string,
    type: string,
    count: number,
}

interface IInitialCartState {
    totalPrice: number,
    cartItems: CartItem[],
}

const { cartItems, totalPrice } = getItemFromLS()

const initialState: IInitialCartState = {
    totalPrice,
    cartItems,
}

const cartSlice = createSlice({
    initialState,
    name: 'cart',

    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const currentObject = state.cartItems.find((item: CartItem) => item.id === action.payload.id)
            if (currentObject) {
                currentObject.count++
            } else {
                state.cartItems.push({ ...action.payload, count: 1 })
            }
            state.totalPrice = calcTotalPrice(state.cartItems)
        },
        minusItem(state, action: PayloadAction<CartItem>) {
            const currentObject = state.cartItems.find((item: CartItem) => item.id === action.payload.id)
            if (currentObject) {
                currentObject.count--
                state.totalPrice = calcTotalPrice(state.cartItems)
            }
        },
        deleteAllItems(state) {
            if (window.confirm('Вы точно хотите очистить вашу корзину?')) {
                state.cartItems = []
                state.totalPrice = 0
            }
        },
        deleteCurrentItem(state, action: PayloadAction<CartItem>) {
            const currentObject = state.cartItems.find((item: CartItem) => item.id === action.payload.id)
            if (window.confirm('Вы точно хотите удалить данную пиицу ?(')) {
                if (currentObject) {
                    state.cartItems = state.cartItems.filter((item: CartItem) => item.id !== action.payload.id)
                    state.totalPrice = calcTotalPrice(state.cartItems)
                }
            }
        }
    }
})

export const { addItem, minusItem, deleteAllItems, deleteCurrentItem } = cartSlice.actions

export default cartSlice.reducer