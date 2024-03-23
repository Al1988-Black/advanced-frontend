import { StateSchema } from 'app/providers/StoreProvider';
// prettier-ignore
export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading;
