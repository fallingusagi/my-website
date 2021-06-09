import React from 'react';

import Dropdown from './Dropdown';

export default {
  title: 'Sarah/Dropdown',
  component: Dropdown,
  argTypes: {
    variant: { 
        name: 'variant',
        type: { name: 'string', required: false },
        control: { type: 'string' } 
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const IconList = Template.bind({});
IconList.args = {
  variant: 'IconList',
};