import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'PROJECT ACCESS COMPONENTS/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  disabled: false,
  fullWidth: false,
  color: 'primary',
  variant: 'contained',
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  fullWidth: false,
  color: 'primary',
  variant: 'contained',
  children: 'Button',
};
