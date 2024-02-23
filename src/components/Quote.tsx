import "../styles/quote.css"

type QuoteText = {
  quote: string
  color: string
}

export function Quote(props: QuoteText) {
  return (
    <div className="quote-text-container" style={{ color: props.color }}>
      <i className="fa fa-quote-left"></i>
      <span id="text">{props.quote}</span>
    </div>
  )
}
