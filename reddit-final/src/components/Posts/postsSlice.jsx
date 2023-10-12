import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchSearch } from "../../Api/Api";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        searchTerm: '',
        selectedSubreddit: 'r/posts/',
        fetchingData: false
    }, 
    reducers: {
        setPosts (state, action) {
            state.posts = action.payload
        },
        setSearchTerm (state, action) {
            state.searchTerm = action.payload
        },
        setSelectedSubreddit (state, action) {
            state.selectedSubreddit = action.payload
        },
        setFetchingData (state, action) {
            state.fetchingData = action.payload
        }
    }
})

export const {
    setPosts,
    setSearchTerm,
    setSelectedSubreddit,
    setFetchingData
} = postsSlice.actions

export default postsSlice.reducer

export const fetchPostsData = (selectedSubreddit) => async(dispatch) => {
    try{
        dispatch(setFetchingData(true))
        const postsData = await fetchPosts(selectedSubreddit)
        console.log(postsData)
        dispatch(setPosts(postsData))
        dispatch(setFetchingData(false))
    } catch(err) {
        dispatch(setFetchingData(false))
        console.error('Cannot grab posts data', err)
    }
}

export const fetchSearchData = (searchItem) => async(dispatch) => {
    try{
        dispatch(setFetchingData(true))
        const searchData = await fetchSearch(searchItem)
        dispatch(setSearchTerm(searchData))
        dispatch(setFetchingData(false))
    } catch(err) {
        dispatch(setFetchingData(false))
        console.error('Cannot get search data', err)
    }
}