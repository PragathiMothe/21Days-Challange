import React from 'react'
import './Trendskey.scss'
const Trendskey = () => {
    const [state,setstate]=React.useState([
        {
            id:1,
            country:"Trending in india",
            keyword:"Delhi",
            totalkeyword:"200k"
        },
        {
            id:2,
            country:" Entertaniment:Trending in india",
            keyword:"BLOCKBUSTER ANKIT GUPTA",
            totalkeyword:"1200k"
        },
        {
            id:3,
            country:"Trending in india",
            keyword:"BCCI",
            totalkeyword:"400k"
        }
    ])
  return (
    <div className='keywords'>
        <div className='key'>
        <div className='keyword_heading'>
            <h5>what's happening</h5>
        </div>
        {state.map(keyword=>(
            <div key={keyword.id}>
<div className="country">{keyword.country}</div>
        <div className="keyword_name">
            <strong>{keyword.keyword}</strong>
        </div>
        <div className="keyword_tweets">
            {keyword.totalkeyword}
        </div>
            </div>
        ))}
        
    </div>
    </div>
  )
}

export default Trendskey