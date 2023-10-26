import React, { useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPostsData } from './postsSlice'
import { Link } from 'react-router-dom'
import './Posts.css'
const Posts = () => {
    const dispatch = useDispatch()
    const postsData = useSelector((state) => state.posts.posts?.data?.children)
    const searchTerm = useSelector((state) => state.posts.searchTerm)
    const selectedSubreddit = useSelector((state) => state.posts.selectedSubreddit)
    const postList = useRef()

    useEffect(() => {
        dispatch(fetchPostsData(selectedSubreddit))
    }, [dispatch, selectedSubreddit])

    const postsItem = postsData && postsData.length > 0 ? (postsData.map((item) => (
        <div key={item.data.id} className='post'>
            <div className='post-title'> 
                <h2>{item.data.title}</h2>
            </div>
            <hr className='postData-divider' />
            <div className='post-text'>
                <p>{item.data.selftext}</p>
            </div>
            <hr className='postData-divider' />
            <div className='img'>
                <img src={item.data.url} alt='reddit' className='img-reddit'/>
            </div>
            <hr className='postData-divider' />
            <div className='post-footer'>
                <div className='author'>
                <p>Author: {item.data.author}</p>
                </div>
            </div>
            <div className='commentsDiv'>
                <Link to='/Comments' onClick={() => commentSelect(item.data.permalink, item.data.title)}>
                <button>Comments</button>
                </Link>
            </div>
            <hr className='divider'></hr>
        </div>

      )) 
    ) : <div>No Posts</div>
    
  return (
    <div className=''>
       <div>
      {searchTerm !== '' && (
          <h1>Searchterm: {searchTerm}</h1>
        )}
        {searchTerm === '' && (
          <h1>Subreddit: {selectedSubreddit}</h1>
        )} 
      </div>
      <div ref={postList}>{postsItem}</div>
    </div>
  )
}

export default Posts
