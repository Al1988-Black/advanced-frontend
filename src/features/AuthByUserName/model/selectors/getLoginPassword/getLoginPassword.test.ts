import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return 12341234', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '12341234'
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('12341234');
    });
    test('should return empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
