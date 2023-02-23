import * as Authen from '~/services/Authen';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    msg: '',
    user: '',
    token: '',
    loading: false,
    error: '',
};

export const resgisterUser = createAsyncThunk('signupuser', async (body) => {
    const res = await fetch('https://tiktok.fullstack.edu.vn/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    return await res.json();
});

export const loginUser = createAsyncThunk('posts/loginUser', async (email, password) => {
    const fetchApi = async () => {
        const result = await Authen.postLogin(email, password);
        return result;
    };
    fetchApi();
});

const authenSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token');
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem('user');
        },
        logout: (state, action) => {
            state.token = null;
            localStorage.clear();
        },
    },
    extraReducers: {
        // login
        [loginUser.pending]: (state, action) => {
            state.loading = true;
        },
        [loginUser.fulfilled]: (state, { payload: { error, msg } }) => {
            state.loading = false;
            if (error) {
                state.error = error;
            } else {
                state.msg = msg;
            }
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = true;
        },

        // register
        [resgisterUser.pending]: (state, action) => {
            state.loading = true;
        },
        [resgisterUser.fulfilled]: (state, { payload: { error, msg } }) => {
            state.loading = false;
            if (error) {
                state.error = error;
            } else {
                state.msg = msg;
            }
        },
        [resgisterUser.rejected]: (state, action) => {
            state.loading = true;
        },
    },
});

const { actions, reducer } = authenSlice;
export const { addToken, addUser, logout } = actions;
export default reducer;
