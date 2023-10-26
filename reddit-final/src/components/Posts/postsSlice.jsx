import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchSearch } from "../../Api/Api";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        searchTerm: '',
        selectedSubreddit: 'r/pics/',
    }, 
    reducers: {
        setPosts (state, action) {
            state.posts = action.payload
        },
        setSearch (state, action) {
            state.searchTerm = action.payload
        },
        setSelectedSubreddit (state, action) {
            state.selectedSubreddit = action.payload
        }
    }
})

export const {
    setPosts,
    setSearch,
    setSelectedSubreddit  
} = postsSlice.actions

export default postsSlice.reducer

export const fetchPostsData = (selectedSubreddit) => async(dispatch) => {
    try{
        const postsData = await fetchPosts(selectedSubreddit)
        dispatch(setPosts(postsData))
      
    } catch(err) { 
        console.error('Cannot grab posts data', err)
    }
}

export const fetchSearchData = (searchItem) => async(dispatch) => {
    if(searchItem !== ''){
    try{
        const searchData = await fetchSearch(searchItem)
        dispatch(setPosts(searchData))
      
    } catch(err) {
        console.error('Cannot get search data', err)
    }}
}