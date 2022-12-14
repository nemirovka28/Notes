import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from 'notiflix';

Notiflix.Notify.init({
    position: 'center-top',
    success: {
        background: 'tomato',
        },
    failure: {
        background: 'gray'
        },
    },
);

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post(`/users/signup`, credentials);
            Notiflix.Notify.success(`Welcome aboard!`)
            token.set(data.token);
            return data;
        } catch (error) {
            Notiflix.Notify.failure(`Please try to use other details. ${error.message}`)
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post(`/users/login`, credentials);
            Notiflix.Notify.success(`Happy to see you again!`)
            token.set(data.token);
            return data;
        } catch (error) {
            Notiflix.Notify.failure(`Please check your login details. ${error.message}`)
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post(`/users/logout`);
            Notiflix.Notify.success(`Bye-bye!`)
            token.unset();
        } catch (error) {
            Notiflix.Notify.failure(`Error occured. ${error.message}`)
            return thunkAPI.rejectWithValue();
        }
    }
);

export const getCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        };

        token.set(persistedToken);
        try {
            const { data } = await axios.get(`/users/current`);
            return data;
        } catch (error) {
            console.log(error.message);
        };
    }
);