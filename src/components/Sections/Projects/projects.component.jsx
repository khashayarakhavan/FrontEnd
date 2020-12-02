//Basics
import React from 'react';
//Design
import colors from '../../../design/colors';
//Component
import Card, {CardLegacy} from '../../../components/atomic/Card/card.component';
//Style
import {
  SectionProjectsContainers,
  FlexContainer,
  ProjectCardContainer,
} from './projects.styles';

//Code
 const Template = () => {
  return (
    <SectionProjectsContainers>
      <FlexContainer>
        <ProjectCardContainer>
          <Card />
        </ProjectCardContainer>
        <ProjectCardContainer>
          <Card />
        </ProjectCardContainer>
        <ProjectCardContainer>
          <CardLegacy />
        </ProjectCardContainer>
      </FlexContainer>
    </SectionProjectsContainers>
  );
};

export default Template;
