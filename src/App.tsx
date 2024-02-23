import "./styles/globals.css"
import "./styles/quoteBox.css"

import { useState, useEffect } from "react"
import { Quote } from "./components/Quote"
import { Author } from "./components/Author"
import { TweetBtn } from "./components/TweetBtn"
import { NewQuoteBtn } from "./components/NewQuoteBtn"

const dataUrl =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

const App = () => {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [color, setColor] = useState("")

  useEffect(() => {
    changeColor()
    fetchQuote()
  }, [])

  document.body.style.backgroundColor = color

  function changeColor() {
    const colorRgb = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255,
    )},${Math.floor(Math.random() * 255)})`

    setColor(colorRgb)
  }

  async function fetchQuote() {
    const res = await fetch(dataUrl)
    const data = await res.json()
    const quotes = await data.quotes
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = await quotes[randomIndex]

    setQuote(quote.quote)
    setAuthor(quote.author)
  }

  function handleClick() {
    changeColor()
    fetchQuote()
  }

  return (
    <main id="quote-box">
      <Quote quote={quote} color={color} />
      <Author author={author} color={color} />
      <div className="btns-container">
        <TweetBtn color={color} />
        <NewQuoteBtn color={color} handleClick={handleClick} />
      </div>
    </main>
  )
}

export default App
