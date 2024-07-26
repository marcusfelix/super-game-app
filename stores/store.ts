import allSagas from "@/sagas";
import { detailSlice } from "@/slices/detail";
import { favoritesSlice } from "@/slices/favorites";
import { gamesSlice } from "@/slices/games";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
    reducer: {
        games: gamesSlice.reducer,
        favorites: favoritesSlice.reducer,
        details: detailSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
})

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(allSagas)