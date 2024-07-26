import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
      value: [] as number[]
    },
    reducers: {
        toggleFavorite: (state, action: PayloadAction<number>) => {
            const index = state.value.indexOf(action.payload)
            if (index !== -1) {
                state.value.splice(index, 1)
                return
            }
            state.value.push(action.payload)
        },
    }
})

export const {
    toggleFavorite,
} = favoritesSlice.actions;

export interface Favorite {
    id: number
    name: string
}