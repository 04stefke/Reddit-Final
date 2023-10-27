import React, { useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchCommentsData, setButtons } from './commentsSlice'
import { Link } from 'react-router-dom'
function Comments() {
    const dispatch = useDispatch()
    const commentsData = useSelector((state) => state.comments.comments?.data?.children)
    console.log(commentsData)
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
                <div className='comment-data'>
                    <div className='content'>
                        {item.data.body} asdasd
                    </div>
                    <div className='comments-author'>
                        Author: {item.data.author}
                    </div>
                </div>
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
            <div className='title'>
                <h3>{selectedTitle}</h3>
            </div>
        </div>
        <div className='comment-itmes' ref={commentsList}>
            {commentsItem}
        </div>
    </div>
  )
}

export default Comments
