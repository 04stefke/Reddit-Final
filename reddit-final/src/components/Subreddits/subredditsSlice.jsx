import {createSlice} from '@reduxjs/toolkit'
import { fetchSubreddits } from '../../Api/Api';

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
        subreddits: [],
    },
    reducers: {
        setSubreddits (state, action) {
            state.subreddits = action.payload
        }
    }
})

export const {setSubreddits} = subredditSlice.actions;

export default subredditSlice.reducer

export const fetchSubredditsData = () => async (dispatch) => {
    try{
        const subreddits = await fetchSubreddits()
        dispatch(setSubreddits(subreddits))
    } catch(err) {
        console.error('Problem getting subreddits', err)
    }
}