import React, { useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchCommentsData, setButtons } from './commentsSlice'
import { Link } from 'react-router-dom'
import './Comments.css'
function Comments() {
    const dispatch = useDispatch()
    const commentsData = useSelector((state) => state.comments.comments?.data?.children)
    const selectedComments = useSelector((state) => state.comments.selectedComments)
    const commentsButton = useSelector((state) => state.comments.showButton)
    const selectedTitle = useSelector((state) => state.comments.selectedTitle)
    const commentsList = useRef()

    useEffect(() => {
        dispatch(fetchCommentsData(selectedComments))
    }, [dispatch, selectedComments])

    const hideComment = () => {
        if(commentsButton === 'Show Comments'){
            dispatch(setButtons('Hide Comments'))
        }
        if(commentsButton === 'Hide Comments'){
            dispatch(setButtons('Show Comments'))
        }
    }
    const commentsItem = commentsData && commentsData.length > 0 ? (
        commentsData.map((item, index) => (
            <div key={item.data.id} className='comment'>
                <div className='comments-no'>
                    Comment: {index + 1}
                </div>
                <hr className='no-divider'/>
                <div className='comment-data'>
                    <div className='content'>
                        <h4>{item.data.body}</h4>
                    </div>
                    <hr className='data-divider'></hr>
                    <div className='comments-author'>
                        Author: {item.data.author}
                    </div>
                </div>
                <hr className='comment-divider'/>
            </div>
        ))
    ) : (
        <div>No Comments</div>
    )
  return (
    <div className='comments-co'>
        <div className='commentsHeader'>
            <div className='comments-link'>
                <Link
                to='/'
                onClick={hideComment}>
                    <button className='btpButton'>Back To Posts</button>
                </Link>
            </div>
        </div>
        <hr className='btpDivider'/>
        <div className='comment-itmes' ref={commentsList}>
            {commentsItem}
        </div>
    </div>
  )
}

export default Comments
