import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCACSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCACSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logOut: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCACSTORAGE_KEY);
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
