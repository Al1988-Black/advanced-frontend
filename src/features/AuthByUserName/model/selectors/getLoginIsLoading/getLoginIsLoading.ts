import { StateSchema } from 'app/providers/StoreProvider';

// prettier-ignore
export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
