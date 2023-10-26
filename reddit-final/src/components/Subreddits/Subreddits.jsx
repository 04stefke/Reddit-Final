import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchSubredditsData, subredditSlice } from './subredditsSlice'
import { fetchPostsData } from '../Posts/postsSlice'
import { Link } from 'react-router-dom'
const Subreddits = () => {
    const dispatch = useDispatch()
    const myData = useSelector((state) => state.subreddits.posts.data?.children)
    const status = useSelector((state) => state.subreddits.status)
    const error = useSelector((state) => state.subreddits.error)

    useEffect(()=>{
        dispatch(fetchSubredditsData())
    }, [dispatch])

    if(status === 'fail') {
        return <div>Failed</div>
    }

  return (
    <div className='subreddits' key={myData.display_name}>
        <ul className='listItems'>
        {myData && myData.length > 0 ? (
            myData.map((subreddit) => (
              <li className='list' key={subreddit.data.id}>
                <button>{subreddit.data.display_name}</button>
              </li>
            ))
          ) : (
            <div>No subreddits available.</div>
          )}
        </ul>
    </div>
  )
}

export default Subreddits
