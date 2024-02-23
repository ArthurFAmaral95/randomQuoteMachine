import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

interface QuoteState {
  quote: string
  author: string
  color: string
}

const dataUrl =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

const initialState: QuoteState = {
  quote: "",
  author: "",
  color: "",
}

export const newQuoteSlice = createSlice({
  name: "newQuote",
  initialState,
  reducers: {
    updateQuote: {
      reducer(state, action: PayloadAction<QuoteState>) {
        state.quote = action.payload.quote
        state.author = action.payload.author
        state.color = action.payload.color
      },
      prepare(quote: string, author: string, color: string) {
        return {
          payload: {
            quote,
            author,
            color,
          },
        }
      },
    },
  },
})

export const fetchQuote =
  (color: string) =>
  async (
    dispatch: (arg0: {
      payload: { quote: string; author: string; color: string }
      type: "newQuote/updateQuote"
    }) => void,
  ) => {
    const res = await fetch(dataUrl)
    const data = await res.json()
    const quotes = await data.quotes
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = await quotes[randomIndex]

    dispatch(updateQuote(quote.quote, quote.author, color))
  }

export const { updateQuote } = newQuoteSlice.actions
export const selectQuote = (state: RootState) => state.newQuote.quote
export const selectAuthor = (state: RootState) => state.newQuote.author
export const selectColor = (state: RootState) => state.newQuote.color
export default newQuoteSlice.reducer
