import { configureStore } from '@reduxjs/toolkit';
import post from './../features/postSlice';

export default configureStore({
    reducer: {
        post,
    }
});
