//Basics
import React from 'react';
//Design
import colors from '../../../design/colors';

//Style
import {
  HeadingContainer
} from './heading.styles';

//Code
const Template = () => {
  return (
    <HeadingContainer>
      <h1>
        Wanna Know me in{" "}
        <span style={{ }}> a </span> minute?
      </h1>
      <h4>
        Just hit{" "}
        <span style={{ color: `${colors.accent.lightest}`, fontWeight: 400, }}>play </span>
      </h4>
    </HeadingContainer>
  );
};

export default Template;
