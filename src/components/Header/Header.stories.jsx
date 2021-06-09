import React from 'react';
import { Header } from './Header';

export default {
  title: 'Sarah/Header',
  component: Header,
  argTypes: {
    level: { 
      name: 'level',
      type: { name: 'string', required: false },
      control: { type: 'string' } 
    },
  },
};

const Template = (args) => <Header {...args} />;

export const L1 = Template.bind({});
L1.args = {
  level: "L1"
};

export const L2 = Template.bind({});
L2.args = {
  level: "L2"
};