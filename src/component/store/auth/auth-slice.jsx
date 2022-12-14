import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, getCurrentUser } from "./auth-operations";

const initialState = {
    user: {
        name: null, email: null
    },
    token: null,
    isLoggedIn: false,
    isGettingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state, _) {
            state.user = {
                name: null, email: null
            };
            state.token = null;
            state.isLoggedIn = false;
        },
        [getCurrentUser.pending](state, _) {
            state.isGettingCurrentUser = true;
        },
        [getCurrentUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isGettingCurrentUser = false;
        },
        [getCurrentUser.rejected](state, _) {
            state.isGettingCurrentUser = false;
        },
    },
});

export default authSlice.reducer;
