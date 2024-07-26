import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const detailSlice = createSlice({
    name: 'games',
    initialState: {
      value: null as Detail | null
    },
    reducers: {
        requestDetails: (state, action) => {
            state.value = null
        },
        updateDetails: (state, action: PayloadAction<Detail>) => {
            state.value = action.payload
        },
        failureDetails: (state, action) => {
            console.log("error", action.payload)
            state.value = null
        }
    }
})

export const {
    updateDetails,
    requestDetails,
    failureDetails
} = detailSlice.actions;

export interface Detail {
    bannerURL: string;
    description: string;
    iconURL: string;
    id: number;
    rating: number;
    title: string;
  }
  