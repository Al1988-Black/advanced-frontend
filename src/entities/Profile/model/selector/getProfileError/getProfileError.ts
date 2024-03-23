import { StateSchema } from 'app/providers/StoreProvider';

export const getProfilError = (state: StateSchema) => state.profile?.error;
