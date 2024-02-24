import { StateSchema } from 'app/providers/StoreProvider';

// prettier-ignore
export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
