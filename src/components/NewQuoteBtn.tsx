import "../styles/newQuoteBtn.css"

import { useAppDispatch } from "../app/hooks"
import { fetchQuote } from "../features/newQuote/newQuoteSlice"
import { useEffect } from "react"

type NewQuoteBtnProps = {
  color: string
}

export function NewQuoteBtn(props: NewQuoteBtnProps) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchQuote(changeColor()))
  }, [])

  function changeColor() {
    const colorRgb = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255,
    )},${Math.floor(Math.random() * 255)})`

    return colorRgb
  }

  return (
    <button
      id="new-quote"
      style={{ backgroundColor: props.color }}
      onClick={() => dispatch(fetchQuote(changeColor()))}
    >
      New Quote
    </button>
  )
}
