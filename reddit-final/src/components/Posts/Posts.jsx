import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Posts = () => {
    const dispatch = useDispatch()
    const postsData = useSelector((state) => state.posts.posts.data?.children)
    const searchTerm = useSelector((state) => state.posts.searchTerm)
    const selectedSubreddit = useSelector((state) => state.posts.selectedSubreddit)

    const postsItem = postsData && postsData.map((item) => {
        <div key={item.data.id} className='post-container'>
            <div className='post-title'>
                <h2>{item.data.title}</h2>
            </div>
            <div className='post-descr'>
                <p>{item.data.selftext}</p>
            </div>
            <br/>
            <div className='post-img'>
                {item.data.url}
            </div>
            <div className='post-author'>
                <p>{item.data.author}</p>
            </div>
        </div>
    })
  return (
    <div className=''>
        {postsItem}
    </div>
  )
}

export default Posts
