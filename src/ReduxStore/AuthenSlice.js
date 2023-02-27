import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    isAuthenticated: false,
};

const authenSlice = createSlice({
    name: 'authen',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.data = action.payload;
            localStorage.setItem('isAuthenticated', state.isAuthenticated);
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = authenSlice.actions;
export default authenSlice.reducer;
