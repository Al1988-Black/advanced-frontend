import { StateSchema } from 'app/providers/StoreProvider';

// prettier-ignore
export const getLoginUserName = (state: StateSchema) => state?.loginForm?.username || '';
