import '../styles/author.css'

type AuthorProps = {
  author: string
  color: string
}

export function Author(props: AuthorProps) {
  return (
    <div className="author-container">
      <p id="author" style={{ color: props.color }}>
        {props.author}
      </p>
    </div>
  )
}
