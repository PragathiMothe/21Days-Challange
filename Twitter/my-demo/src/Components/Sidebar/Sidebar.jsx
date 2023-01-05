import React from 'react'
import './Sidebar.scss'
import { FaTwitter,FaHome, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark,
     FaClipboardList, FaUserAlt, FaMehBlank} from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li><a href=''><FaTwitter className='icons logo'/></a></li>
            <li><a href=''><FaHome className='icons logo'/>Home</a></li>
            <li><a href=''><FaHashtag className='icons'/>Explore</a></li>
            <li><a href=''><FaRegBell className='icons'/>Notifications</a></li>
           <Link to = "/Message" ><li> <FaRegEnvelope className='icons'/>Messages</li></Link>
            <li><a href=''><FaRegBookmark className='icons'/>Bookmarks</a></li>
            <li><a href=''><FaClipboardList className='icons'/>Lists</a></li>
            <li><a href=''><FaUserAlt className='icons'/>Profile</a></li>
            <li><a href=''><FaMehBlank className='icons'/>More</a></li>
            <div className='sidebar_Btn'>
    <a href='/'>Tweet</a>
            </div>
        </ul>
    </div>
  )
}

export default Sidebar