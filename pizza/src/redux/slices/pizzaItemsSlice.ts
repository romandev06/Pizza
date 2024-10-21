import { compose, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from 'axios'
import { PizzaBlockType } from "../../components/Main/PizzaBlock"

type FetchPizzasParams = {
    page: number,
    category: number,
    sortTitle: string,
}


export const fetchPizzasData = createAsyncThunk<PizzaBlockType[], FetchPizzasParams>('pizzas/fetchPizzasByStatus', async (params) => {
    const { page, category, sortTitle } = params

    const paginationPage = page ? `page=${page}&limit=3` : ''    // pagination
    const pizzaCategory = category ? `category=${category}` : ''    // category

    const order = sortTitle.startsWith('-') ? 'desc' : 'asc'
    const sortPizza = `sortBy=${sortTitle.replace('-', '')}&order=${order}`

    const { data } = await axios.get<PizzaBlockType[]>(`https://66f020caf2a8bce81be515f6.mockapi.io/react-pizza?${paginationPage}&${pizzaCategory}&${sortPizza}`)
    return data
})


enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    EMPTY = 'empty',
    REJECTED = 'rejected',
}

interface IInitialPizzaItemsState {
    status: Status,
    pizzaItems: PizzaBlockType[]
}

const initialState: IInitialPizzaItemsState = {
    status: Status.LOADING,  
    pizzaItems: [],
}



const pizzaItemsSlice = createSlice({
    initialState,
    name: 'items',

    reducers: {},

    extraReducers(builder) {
        builder
        .addCase(fetchPizzasData.pending, (state) => {
            state.status = Status.LOADING
        })
        .addCase(fetchPizzasData.fulfilled, (state, action: PayloadAction<PizzaBlockType[]>) => {
            state.status = Status.SUCCESS
            state.pizzaItems = action.payload
            if (state.pizzaItems.length === 0) {
                state.status = Status.EMPTY
            }
        })
        .addCase(fetchPizzasData.rejected, (state, action) => {
            state.status = Status.REJECTED
            console.log('ошибка при получении пицц')
        })
    }
})


export const { } = pizzaItemsSlice.actions


export default pizzaItemsSlice.reducer