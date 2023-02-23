import { configureStore } from '@reduxjs/toolkit';
import AuthenSlice from './AuthenSlice';

const store = configureStore({
    reducer: {
        user: AuthenSlice,
    },
});

export default store;
