import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './videosSlice';
import authenReducer from './authenSlice';

const store = configureStore({
    reducer: {
        video: videoReducer,
        authen: authenReducer,
    },
});

export default store;
