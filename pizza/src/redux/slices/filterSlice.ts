import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type SortDataType = {
    sortName: string,
    sortPropertyName: 'rating' | '-rating' | 'price' | '-price' | '-sizes' | '-types',
}

interface IInitialFilterState {
    category: number,
    page: number,
    inputValue: string,
}

const initialState: IInitialFilterState = {
    category: 0,
    page: 1,
    inputValue: '',
}


const filterSlice = createSlice({
    initialState,
    name: 'items',

    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        setCategory(state, action: PayloadAction<number>) {
            state.category = action.payload
        },
        setSaveQuery(state, action: PayloadAction<IInitialFilterState>) {
            state.category = Number(action.payload.category)
            state.page = Number(action.payload.page)
        },
        setInputValue(state, action: PayloadAction<string>) {
            state.inputValue = action.payload
        }
    },
})


export const { setPage, setCategory, setSaveQuery, setInputValue } = filterSlice.actions


export default filterSlice.reducer