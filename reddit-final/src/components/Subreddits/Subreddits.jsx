import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchSubredditsData } from './subredditsSlice'
import { Link } from 'react-router-dom'
import './Subreddits.css'
import {setSelectedSubreddit, setSearch, fetchPostsData } from '../Posts/postsSlice'

const Subreddits = () => {
    const dispatch = useDispatch()
    const subredditData = useSelector((state) => state.subreddits.subreddits.data?.children)
    const selectedSubreddit = useSelector((state) => state.posts.selectedSubreddit)

    const handleSlice = (button) => {
      dispatch(setSelectedSubreddit(button))
      dispatch(setSearch(''))
    }

    useEffect(()=>{
        dispatch(fetchSubredditsData())
    }, [dispatch])

    useEffect(() => {
      dispatch(fetchPostsData(selectedSubreddit))
    },[dispatch, selectedSubreddit])
    
    const subredditItems = subredditData && subredditData.length > 0 ? (
      subredditData.map((item) => (
        <div className='subreddit-list' key={item.data.id}>
          <Link
          to='/'
          onClick={() => handleSlice(item.data.display_name_prefixed)}>
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
