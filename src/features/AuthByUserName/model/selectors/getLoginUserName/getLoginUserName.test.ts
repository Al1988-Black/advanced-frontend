import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName.test', () => {
    test('should return admin123', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin123'
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('admin123');
    });
    test('should return empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
