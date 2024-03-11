import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';

export default {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});

Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
