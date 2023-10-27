import {createSlice} from '@reduxjs/toolkit'
import {fetchComments} from '../../Api/Api'
export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        selectedComments: '',
        selectedTitle: '',
        showButton: 'Show Comments'
    },
    reducers: {
        setComments (state, action) {
            state.comments = action.payload
        },
        setSelectedComments (state, action) {
            state.selectedComments = action.payload
        },
        setSelectedTitle (state, action) {
            state.selectedTitle = action.payload
        },
        setButtons (state, action) {
            state.showButton = action.payload
        }
    }
})
export const {
    setComments,
    setSelectedComments,
    setButtons,
    setSelectedTitle
} = commentsSlice.actions

export default commentsSlice.reducer

export const fetchCommentsData = (selectedComments) => async(dispatch) => {
    try{
        const commentsData = await fetchComments(selectedComments)
        dispatch(setComments(commentsData))
    } catch(err){
        console.error('Problem getting commentsData', err)
    }
}

