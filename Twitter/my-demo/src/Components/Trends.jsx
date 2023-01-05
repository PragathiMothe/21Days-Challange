import React from 'react'
import { FaSistrix } from "react-icons/fa";
import Trendskey from './Trendskey';
import './Trends.scss'

const Trends = () => {
  return (
    <div className='trends'>
        <div className="trends__serach">
            <input type='text'
                className='trend__control' placeholder='Search Twitter'>
            </input>
        <div className='trend__icon'>
            <FaSistrix className='search'/>
        </div>
        </div>
        <Trendskey/>
    </div>
  )
}

export default Trends