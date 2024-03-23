import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
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
    ThunkConfig<string>
>('login/loginByUsername', async ({ username, password }, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.post<User>('/login', {
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
        dispatch(userActions.setAuthData(response.data));
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Error');
    }
});
