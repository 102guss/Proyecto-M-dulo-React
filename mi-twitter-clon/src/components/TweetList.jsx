import Tweet from './Tweet'

const TweetList = ({ tweets, onLike }) => {
  return (
    <div>
      <ul className='tweet-list'>
        {tweets.map((tweet) => (
          <li key={tweet.id} className='tweet-item'>
            <span className='tweet-text'>{tweet.text}</span>
            <button className='like-btn' onClick={() => onLike(tweet.id)}>
              ❤️ {tweet.likes}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TweetList
