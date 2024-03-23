import axios from 'axios';
import { USER_LOCACSTORAGE_KEY } from 'shared/const/localstorage';

export const $axios = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCACSTORAGE_KEY) || '',
    },
});
