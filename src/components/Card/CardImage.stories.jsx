import React from "react";
import { CardImage } from './CardImage';
import ProjectCC from '../../assets/ProjectCC.png';
// import ProjectPayLah from '../../assets/ProjectPayLah.png';
// import ProjectAlise from '../../assets/ProjectAlise.png';
// import ProjectOC from '../../assets/ProjectOC.png';
// import ProjectGYC from '../../assets/ProjectGYC.png';
// import ProjectAO from '../../assets/ProjectAO.png';

export default {
    title: 'Sarah/CardImage',
    component: CardImage
  };

const Template = (args) => <CardImage {...args}/>;

export const cardImage = Template.bind({});
cardImage.args = {
  imageSrc:ProjectCC
}