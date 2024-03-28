import { StateSchema } from 'app/providers/StoreProvider';
// prettier-ignore
export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
