import { StateSchema } from 'app/providers/StoreProvider';
// prettier-ignore
export const getProfileFormData = (state: StateSchema) => state.profile?.formData;
