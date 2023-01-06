import React from 'react'
import { FaRegCheckCircle} from 'react-icons/fa'
import { BiBarChart, BiMessageRounded, BiSortAlt2 } from "react-icons/bi";
import { FiCornerRightUp,FiHeart } from "react-icons/fi";
import './Posts.scss'

const Posts = () => {
  return (
    <div className='postss'>
        <div className="postss_first">
            <div className="posts_first_img">
                <img src='P.jpg.jfif'alt='profile img'/>
            </div>
            <div className="posts_first_name">
                <strong>Pragathi Mothe</strong>
                <FaRegCheckCircle className='verify'/>
            </div> 
            <div className="posts_first_username">@rajurajitha123
            <span>6m</span>
            </div>
            </div>
            <div className="posts_details">
            <div className="posts_details_msg">
            <p>Arjun Deshwal adjudged MVP, debutant Narender named New Young Player of the Season
            It was curtains to vivo Pro Kabaddi Season 9 on Saturday, December 17 with Jaipur Pink Panthers clinching a close win against Puneri Paltan to become the two-time vivo PKL champions....</p>
            </div>
            <div className="posts_details img">
              <img src='https://media3.giphy.com/media/TgxMmAUnaWyauVtYWn/giphy.gif' alt='posts image'/>
            </div>

            
            <div className="posts_details">
            <div className="posts_details_msg">
            <p>Prime Minister #NarendraModi will virtually address the 108th Indian Science Congress on January 3, which is expected to focus on ways to increase the representation of women in STEM fields and provide them with equal access.</p>
            
            </div>
            <div className="posts_details img">
              <img src='https://pbs.twimg.com/tweet_video_thumb/DhWZBYUXcAAcKQp.jpg' alt='posts image'/>
            </div>
            </div>
            <div className='reaction'>
             <span><BiBarChart className="re"/>193.8k</span> 
              <span><BiMessageRounded className='"re'/>46</span>
              <span><BiSortAlt2 className='re'/>310</span>
              <span><FiHeart className='re'/>4000</span>
              <span><FiCornerRightUp className='re'/>share</span>
            </div>
        </div>
        </div>
  
  )
}

export default Posts