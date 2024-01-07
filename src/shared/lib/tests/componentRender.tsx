import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface componentRenderOption {
    router?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(
    Component: ReactNode,
    options: componentRenderOption = {}
) {
    const { router = '/', initialState } = options;
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[router]}>
                <I18nextProvider i18n={i18nForTest}>
                    {Component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}