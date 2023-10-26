import {createSlice} from '@reduxjs/toolkit'
import { fetchSubreddits } from '../../Api/Api';

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
        posts: [],
        status: 'idle',
        error: false
    },
    reducers: {
        setSubreddits (state, action) {
            state.posts = action.payload
            state.status = 'success'
        },
        setError (state) {
            state.error = true
            state.status = 'fail'
        }
    }
})

export const {setSubreddits, setError} = subredditSlice.actions;

export default subredditSlice.reducer

export const fetchSubredditsData = () => async (dispatch) => {
    try{
        const subreddits = await fetchSubreddits()
        dispatch(setSubreddits(subreddits))
    } catch(err) {
        console.error('Problem getting subreddits', err)
    }
}