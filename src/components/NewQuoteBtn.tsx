import "../styles/newQuoteBtn.css"

type NewQuoteBtnProps = {
  color: string
  handleClick: () => void
}

export function NewQuoteBtn(props: NewQuoteBtnProps) {
  return (
    <button
      id="new-quote"
      style={{ backgroundColor: props.color }}
      onClick={() => {
        props.handleClick()
      }}
    >
      New Quote
    </button>
  )
}
