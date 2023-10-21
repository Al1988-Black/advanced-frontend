import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {NotFoundPage} from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Normal = Template.bind({});


export const Dark = Template.bind({});


Dark.decorators = [ThemeDecorator(Theme.DARK)];