import { configureStore } from "@reduxjs/toolkit"
import newQuoteReducer from "../features/newQuote/newQuoteSlice"

export const store = configureStore({
  reducer: {
    newQuote: newQuoteReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
