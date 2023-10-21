import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AboutPage from './AboutPage';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'Pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Normal = Template.bind({});


export const Dark = Template.bind({});


Dark.decorators = [ThemeDecorator(Theme.DARK)];