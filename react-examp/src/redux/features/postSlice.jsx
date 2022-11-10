import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice(({
    name: 'post',
    initialState: {
        posts: [],
    },
    reducers: {
        writePost: (state, action) => {
            state.posts = action.payload;
        }
    }
}));

export const { writePost } = postSlice.actions;

export default postSlice.reducer;
