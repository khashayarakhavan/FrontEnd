//Libraries
import styled from "styled-components";
//Design
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import {respond} from '../../../design/responsive';
import {VegeloperContainer} from '../../../pages/vegeloperPage/vegeloper.styles';

//Code
// export const SectionHeading = styled.div`
//   position: relative;
//   grid-column: cover-start / cover-end;
//   align-self: center;

//   width: 100%;
//   ${"" /* height: 50vh; */}
//   display: grid;
//   grid-template-columns: [cover-start leftSide-start] minmax(1vw, 1fr) [leftSide-end full-start] 9vw [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end]) [center-end] 9vw [full-end rightSide-start]
//      minmax(1vw, 1fr)
//       [rightSide-end cover-end];

//   margin-top: 5rem;
//   margin-bottom: 5rem;

//   ${'' /* display: grid; */}
//   justify-content: center;
//   align-items: center;

//   background: ${colors.neutrals.lighter} !important;
//   border-radius: 30px;
// `;
export const SectionHeading = styled(VegeloperContainer)`
  grid-column: cover-start / cover-end;

  position: relative;

  margin-top: 5rem;
  margin-bottom: 5rem;

  padding-top: 10rem;
  padding-bottom: 10rem;  
  
  display: grid;
  justify-content: center;
  align-content: center;
  
  background: ${colors.neutrals.lighter};
  background: none;
`;

export const HeadingContainer = styled.div`
  grid-column: full-start / full-end;

  position: relative;
  
  height: 50vh;
  margin-right: 2rem;
  margin-left: 2rem;
  

  display: grid;
  justify-content: center;
  align-content: center;

  background: pink;
  background: white;
  border-radius: 40px;


`;

export const Heading = styled.div`
  ${'' /* grid-column: center-start / center-end;
  align-self: center; */}
  position: relative;

  width: 100%;

  ${'' /* background: red; */}

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
  
  ${"" /* grid-column: full-start / full-end; */}
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