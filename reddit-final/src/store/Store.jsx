import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/Posts/postsSlice";
import subredditsReducer from "../components/Subreddits/subredditsSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        subreddits: subredditsReducer
    }
})

export default store