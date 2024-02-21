import { StateSchema } from 'app/providers/StoreProvider';

// prettier-ignore
export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
