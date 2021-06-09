import React from "react";
import { Card } from './Card';
import ProjectCC from "../../assets/ProjectCC.png";

export default {
    title: 'Sarah/Card',
    component: Card,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    //   borderColour: { control: 'color' },
    // },
  };

console.log(ProjectCC)
const Template = (args) => <Card {...args} />;

export const image = Template.bind({});
image.args = {
  imageSrc: ProjectCC,
  title: "Client Connect",
  body: "ASDASD",
  award: false,
  awardName: "test"
};