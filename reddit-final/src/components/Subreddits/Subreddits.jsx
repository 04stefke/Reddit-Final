import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchSubredditsData } from './subredditsSlice'
import { Link } from 'react-router-dom'
import './Subreddits.css'
const Subreddits = () => {
    const dispatch = useDispatch()
    const subredditData = useSelector((state) => state.subreddits.subreddits.data?.children)

    useEffect(()=>{
        dispatch(fetchSubredditsData())
    }, [dispatch])
    
    const subredditItems = subredditData && subredditData.length > 0 ? (
      subredditData.map((item) => (
        <div className='subreddit-list' key={item.data.id}>
          <Link
          to='/'>
          <button className='subreddit-button'>{item.data.display_name}</button>
          </Link>
        </div>
      ))
    ) : (
      <div>No Subreddits</div>
    )
  

  return (
    <div className='subreddits' >
      {subredditItems}
    </div>
  )
}

export default Subreddits
