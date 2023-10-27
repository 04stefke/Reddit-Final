import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/Posts/postsSlice";
import subredditsReducer from "../components/Subreddits/subredditsSlice";
import commentsReducer from '../components/Comments/commentsSlice'
const store = configureStore({
    reducer: {
        posts: postsReducer,
        subreddits: subredditsReducer,
        comments: commentsReducer
    }
})

export default store