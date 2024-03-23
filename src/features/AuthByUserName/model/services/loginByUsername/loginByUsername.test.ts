import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunck } from 'shared/lib/tests/TestAsyncThunck';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    // test('success login', async () => {
    //     const userValue = { username: 'admin', id: '1' };
    //     mokedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: '1234', password: '1234' });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //     expect(dispatch).toHaveBeenCalledWith(
    //         userActions.setAuthData(userValue)
    //     );
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mokedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(userValue);
    // });

    // test('error login', async () => {
    //     mokedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: '1234', password: '1234' });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mokedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toEqual('Error');
    // });

    test('success login', async () => {
        const userValue = { username: 'admin', id: '1' };
        const thunk = new TestAsyncThunck(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const result = await thunk.callThunk({
            username: '1234',
            password: '1234',
        });
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue)
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunck(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({
            username: '1234',
            password: '1234',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Error');
    });
});
