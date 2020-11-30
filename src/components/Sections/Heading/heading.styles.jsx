//Libraries
import styled from "styled-components";
//Design
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import {respond} from '../../../design/responsive';


//Code
export const HeadingContainer = styled.div`
  grid-column: center-start / center-end;
  align-self: center;
  width: 60%;
  width: 70%;
  position: relative;
  margin-top: 10rem;
  margin-bottom: 2rem;
  margin-bottom: 6.666666vw;
  padding-left: clamp(30px, 10vw, 10vw);

  ${respond.pc.min` 
    justify-self: center;
    grid-column: full-start / full-end;
    padding-left: 0; 
    margin-bottom: clamp(2rem, 1.953125vw, 1.953125vw);
    margin-top: 1.953125vw;
  `}
  ${respond.mobile.max` 
  
  ${'' /* grid-column: full-start / full-end; */}
    padding-left: 0; 
  `}

  h1 {
    ${fonts.mixins.heroHeader}
    font-size: 15.2360833vw;
    font-size: 12.2360833vw;
    line-height: 1;
    letter-spacing: 0px;
    text-rendering: optimizeLegibility;
    font-style: normal;
    color: ${colors.secondary.darkest};

    ${respond.pc.min`
    font-size: clamp(3.9rem, 3.80859375vw, 3.80859375vw);
    overflow-wrap: normal;
    word-break: break-word;
    line-height: 1;  
    text-align: center;
    `}
  }

  h4 {
    ${fonts.mixins.text};

    color: ${colors.neutrals.darkest};
    letter-spacing: 0px;
    font-style: normal;

    text-rendering: optimizeLegibility;
    line-height: clamp(30px, 10vw, 10vw);
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 9.1vw;

    ${respond.pc.min`
    font-size: 2vw;
    text-align: center;
    line-height: clamp(30px, 2.9296vw, 2.9296vw);  
  `}
  }
`;