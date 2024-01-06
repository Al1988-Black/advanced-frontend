import { StoreProvider } from 'app/providers/StoreProvider';
import type { Story } from '@storybook/react';

export const StoreDecorator = (story: () => Story) => (
    <StoreProvider>{story()}</StoreProvider>
);
