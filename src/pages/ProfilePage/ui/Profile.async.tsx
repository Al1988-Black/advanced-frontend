import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    // prettier-ignore
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./ProfilePage')), 1500);
    })
);
