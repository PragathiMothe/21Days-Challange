import React from 'react'
import { FaCalendarCheck, FaRegImage, FaRegListAlt, FaRegSmile } from 'react-icons/fa'
import './CreateTweet.scss'

const CreateTweet = () => {
  return (
    <div className='create'>
        <div className="create_first">
            <div className="create_img">
                  <img src="P.jpg.jfif" alt='Profile'/> 
                  </div>
                <div className='create_input'>
                     <input type='text'className='create_control'placeholder='whats happening?'> 
                     </input> 
            </div>
        </div>
        <div className='create_second'>
            <div className='create_icons'>
                <FaRegImage className='ic'/>
                <FaRegListAlt className='ic'/>
                <FaRegSmile className='ic'/>
                <FaCalendarCheck className='ic'/>
                </div>
                <div className='create_btn'>
                    <a href=''>Tweet</a>
                </div>
            </div>
    </div>
  )
}

export default CreateTweet