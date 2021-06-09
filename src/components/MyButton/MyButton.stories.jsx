import React from 'react';

import MyButton from './MyButton';

export default {
  title: 'Sarah/MyButton',
  component: MyButton,
  argTypes: {
    variant: { 
        name: 'variant',
        type: { name: 'string', required: false },
        control: { type: 'string' } 
    },
  },
};

const Template = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: "Primary Button",
};

export const Minimal = Template.bind({});
Minimal.args = {
    variant: 'minimal',
    label: "Minimal Button",
}