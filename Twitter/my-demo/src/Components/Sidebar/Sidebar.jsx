import React from 'react'
import './Sidebar.css'
import {
  FaTwitter, FaHome, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark,
  FaClipboardList, FaUserAlt, FaMehBlank
} from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom"

import { useContext } from 'react';
import {ThemChanger} from '../../Them';



const Sidebar = () => {
  const [data,SetData]=useContext(ThemChanger)
  
  return (
    
    <div className='sidebar' style={{backgroundColor:data}}>
      <ul className='sidebar_ul'>
        <li><a href=''><FaTwitter className='icons logo' /></a></li>
        <li><a href=''><FaHome className='icons logo' />Home</a></li>
        <li><a href=''><FaHashtag className='icons' />Explore</a></li>
        <li><a href=''><FaRegBell className='icons' />Notifications</a></li>
        <Link to="/Message" className='icons-one' ><li> <FaRegEnvelope  />Messages</li></Link>
        <li><a href=''><FaRegBookmark className='icons' />Bookmarks</a></li>
        <li><a href=''><FaClipboardList className='icons' />Lists</a></li>
        <li><a href=''><FaUserAlt className='icons' />Profile</a></li>
        <li><a href=''><FaMehBlank className='icons' />More</a></li>
        <div className='sidebar_Btn' onClick={()=>SetData("skyblue")} onMouseOver={()=>SetData("grey")} >
          <a href='/'>Tweet</a>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar