//Libraries
import styled from "styled-components";
//Design
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';


//Code
export const HeadingContainer = styled.div`
  grid-column: center-start / center-end;
  align-self: center;
  justify-self: center;
  width: 100%;
  position: relative;
  margin-top: 5rem;
  overflow-wrap: break-word;
  word-break: break-word;
  ${"" /* margin: 10rem 2rem; */}
  ${"" /* padding-bottom: 56.25%; //16 x 9 */}
  ${'' /* padding-left: clamp(34px, 10.666vw, 10.666vw); */}

  h1 {
    ${fonts.mixins.heroHeader}
    font-size: 15.2360833vw;
    font-size: 12.2360833vw;
    line-height: 1;
    letter-spacing: 0px;
    text-rendering: optimizeLegibility;
    font-style: normal;
    color: ${colors.secondary.darkest};
  }

  h4 {
    ${fonts.mixins.text};
    color: ${colors.neutrals.darkest};
    letter-spacing: 0px;
    font-style: normal;
    text-rendering: optimizeLegibility;
    ${"" /* line-height: ${sizes.lineHeight.large}; */}
    line-height: clamp(30px, 10vw, 10vw);
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 9.1vw;
  }
`;