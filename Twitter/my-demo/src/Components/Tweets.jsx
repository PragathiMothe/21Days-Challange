import React from 'react'
import CreateTweet from './CreateTweet/CreateTweet'
import Posts from './Posts'
// import Posts1 from './Posts'
import '../Components/Tweets/Tweets.scss'

const Tweets = () => {
  return (
    <div className='posts'>
        <div className="posts_home">
            <h2>Home</h2>
            <CreateTweet/>
            <Posts/>
            {/* <Posts1/> */}
            <Posts/>
            <Posts/>
        </div>
    </div>
  )
}

export default Tweets