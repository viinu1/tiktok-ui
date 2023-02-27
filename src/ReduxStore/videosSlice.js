import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as VideoService from '~/services/VideoService';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const initialState = {
    data: [],
    status: STATUSES.IDLE,
    isPlaying: false,
};

export const fectchVideo = createAsyncThunk('video/fetch', async () => {
    const result = await VideoService.getVideo();
    return result;
});

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fectchVideo.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fectchVideo.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fectchVideo.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { play, pause } = videoSlice.actions;
export default videoSlice.reducer;
