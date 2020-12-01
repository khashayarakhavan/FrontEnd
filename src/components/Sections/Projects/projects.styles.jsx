//Libraries
import styled from "styled-components";
//Design
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import {respond} from '../../../design/responsive';


//Code
export const SectionProjectsContainers = styled.section`
  grid-column: full-start / full-end;
  ${'' /* background-color: $color-grey-light-1; */}
  ${'' /* padding: 25rem 10rem 15rem 10rem; */}
  ${'' /* margin-top: -10rem; */}
  height: min-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${'' /* @include respond(tab-port) {
    padding: 20rem 5rem 10rem 5rem;
  } */}
  ${'' /* ${respond.mobile.max`
    padding: 20rem 5rem 10rem 5rem;
  `} */}
`;

export const CardContainer = styled.div`

`;

export const Card = styled.div`
  
`;