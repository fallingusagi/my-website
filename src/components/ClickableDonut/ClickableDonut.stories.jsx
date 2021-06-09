import React, { useState } from 'react';
import { ClickableDonut } from './ClickableDonut';


export default {
    title: 'Sarah/Donut',
    component: ClickableDonut,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    //   borderColour: { control: 'color' },
    // },
};

const Template = (args) => {
    return (<ClickableDonut {...args} />);
}

export const donut = Template.bind({});
donut.args = {
    resetCallBack: () => {console.log("reset")},
    burstCallBack: () => {console.log("burst")}
}
