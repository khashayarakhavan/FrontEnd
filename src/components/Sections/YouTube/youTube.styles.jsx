//Basics
import { Link } from "react-router-dom";
//Libraries
import styled from "styled-components";
//Mixins
import { mix_containers, mix_flex } from "../../../design/mixins.styles";
//Responsive
import { respond } from "../../../design/responsive";
//Design
import colors from "../../../design/colors";
import sizes from "../../../design/sizes";
import shadows from "../../../design/shadows.styles";
import fonts from '../../../design/fonts.styles';
import margins from '../../../design/margins.styles';
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
//Assets
import { ReactComponent as VegeloperLogo } from "../../../assets/SVG/Vegeloper.svg";
import { ReactComponent as WebWeaverLine } from "../../../assets/SVG/WebWeaver-Line.svg";


// //Code
// .container {
//   width: 100%;
//   height: 0;
//   padding-bottom: 56.25%; //16 x 9
//   position: relative;
//   .player {
//     position: absolute;
//     top: 0;
//     width: 100%;
//     height: 100%;
//   }
// }

export const YouTubeContainer = styled.div`
  grid-column: center-start / center-end;
  align-self: center;
  justify-self: center;
  width: 100%;
  width: 90%;
  ${'' /* width: 80%; */}
  ${'' /* height: 50rem; */}
  position: relative;
  margin: 5rem 2rem;
  padding-bottom: 56.25%; //16 x 9
  padding-bottom: 50.25%; //16 x 9
  border-radius: 40px;
  overflow: hidden;
  ${'' /* overflow: hidden;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center; */}
  ${'' /* background: red; */}
  ${shadows.mixins.neumorphic.extra};

  ${respond.pc.min`
  grid-column: center-start / center-end;
  grid-row: 4 / span 1;
  margin: 15rem 0.5rem;
  `}

  .player {
    position: absolute;
    top: 0;
    
    width: 100%;
    width: 100%;
    ${'' /* width: 88.88888%; */}
    height: 100%;
    ${'' /* height: 50%; */}
  }
`;