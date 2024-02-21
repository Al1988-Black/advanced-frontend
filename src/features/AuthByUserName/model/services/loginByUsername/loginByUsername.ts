import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCACSTORAGE_KEY } from 'shared/const/localstorage';

interface loginByUsernameProps {
    username: string;
    password: string;
}

//  enum LoginError {
//      INCORRECT_DATA = '',
//      SERVER_ERROR = '',
//  }

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async ({ username, password }, thunkApi) => {
    try {
        const response = await axios.post<User>('http://localhost:8000/login', {
            username,
            password,
        });
        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCACSTORAGE_KEY,
            JSON.stringify(response.data)
        );
        thunkApi.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue('Error');
    }
});