/* eslint-disable arrow-body-style */
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import type { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
    return (story: () => Story) => (
        <StoreProvider initialState={state}>{story()}</StoreProvider>
    );
};
