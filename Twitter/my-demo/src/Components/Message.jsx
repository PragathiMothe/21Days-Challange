import React,{useContext} from 'react'
import './Messages.scss'

// import { AiFillSetting } from "react-icons/ai";
const Message = () => {
  
  return (
    
    <div className='Messages'>
      <h2>Messages</h2>
      {/* <AiFillSetting/> */}
      <h1>Welcome to your inbox!</h1>
      <h4>Drop a line, share Tweets and more with private conversations between you and others on Twitter. </h4>
      <div className='button'>
        <a href=''>write a message</a>
      </div>
    </div>
  
  )
}

export default Message