import '../styles/tweetBtn.css'

type TweetBtnProps = {
  color: string
}

export function TweetBtn(props: TweetBtnProps) {
  return (
    <a
      target="_blank"
      href="twitter.com/intent/tweet"
      id="tweet-quote"
      style={{ backgroundColor: props.color }}
    >
      <i className="fa fa-twitter" style={{ color: "white" }}></i>
    </a>
  )
}
