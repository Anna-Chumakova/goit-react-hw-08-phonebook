import { createAsyncThunk } from "@reduxjs/toolkit";
import * as fetch from '../../components/fetch/FetchUser';

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const result = await fetch.signup(data);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const result = await fetch.login(data);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const result = await fetch.logout();
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        
    

        try {
            const { auth } = getState();
            const result = await fetch.getCurrentUser(auth.token);
            return result;
        }
        
        catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)