import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from '../features/Main/Comments/commentsSlice'
import subredditsReducer from "../features/subreddits/subredditSlice";
import postsReducer from "../features/Main/Posts/postsSlice";


const store = configureStore({
    reducer: {
        comments: commentsReducer,
        subreddits: subredditsReducer,
        posts: postsReducer
    }
})

export default store