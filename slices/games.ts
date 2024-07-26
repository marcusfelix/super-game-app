import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const gamesSlice = createSlice({
    name: 'games',
    initialState: {
      value: [] as Game[]
    },
    reducers: {
        requestGames: (state, action) => {
            state.value = []
        },
        updateGames: (state, action: PayloadAction<Game[]>) => {
            state.value = action.payload
        },
        failureGames: (state, action) => {
            console.log("error games", action.payload)
            state.value = []
        }
    }
})

export const {
    updateGames,
    requestGames,
    failureGames
} = gamesSlice.actions;

export interface Game {
    iconURL: string
    id: number
    rating: number
    title: string
}