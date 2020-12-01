//Basics
import React from 'react';
//Design
import colors from '../../../design/colors';
//Component
import Card from '../../../components/atomic/Card/card.component';
//Style
import {
  SectionProjectsContainers,

} from './projects.styles';

//Code
 const Template = () => {
  return (
    <SectionProjectsContainers>
      <Card/>
      <Card/>     
          
    </SectionProjectsContainers>
  );
};

export default Template;
