import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/Posts/postsSlice";


const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})

export default store