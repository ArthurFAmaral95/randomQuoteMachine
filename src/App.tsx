import "./styles/globals.css"
import "./styles/quoteBox.css"

import { useAppSelector } from "./app/hooks"

import {
  selectQuote,
  selectAuthor,
  selectColor,
} from "./features/newQuote/newQuoteSlice"

import { Quote } from "./components/Quote"
import { Author } from "./components/Author"
import { TweetBtn } from "./components/TweetBtn"
import { NewQuoteBtn } from "./components/NewQuoteBtn"

const App = () => {
  const quote = useAppSelector(selectQuote)
  const author = useAppSelector(selectAuthor)
  const color = useAppSelector(selectColor)

  document.body.style.backgroundColor = color

  return (
    <main id="quote-box">
      <Quote quote={quote} color={color} />
      <Author author={author} color={color} />
      <div className="btns-container">
        <TweetBtn color={color} />
        <NewQuoteBtn color={color} />
      </div>
    </main>
  )
}

export default App
