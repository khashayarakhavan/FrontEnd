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
import {VegeloperContainer} from '../../../pages/vegeloperPage/vegeloper.styles';

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

export const SectionYoutube = styled(VegeloperContainer)`
  grid-column: full-start / full-end;
  grid-column: cover-start / cover-end;
  align-self: center;

  position: relative;

  width: 100%;
  ${'' /* height: 50vh; */}

  margin-top: 5rem;
  margin-bottom: 5rem;


  display: grid;
  justify-content: center;
  align-content: center;

  background: ${colors.neutrals.lighter} !important;
  border-radius: 30px;
`;

export const YouTubeContainer = styled.div`
  grid-column: center-start / center-end;

  align-self: center;
  justify-self: center;

  position: relative;

  width: 10%;
  width: 90%;
  width: 100%;

  margin-top: 1rem;
  margin-bottom: 2rem;

  padding-bottom: 56.25%; //16 x 9

  display: flex;
  justify-content: center;

  border-radius: 40px;
  overflow: hidden;

  ${shadows.mixins.neumorphic.extra};

  ${respond.pc.min`
  grid-column: center-start / center-end;
  ${"" /* grid-row: 4 / span 1; */}
  margin: 15rem 0.5rem;
  `}

  .player {
    position: absolute;

    width: 110%;
    width: 100%;
    ${"" /* padding: 1rem; */}
    ${"" /* width: 105%;
    top:0;
    left:0; */}
    ${"" /* width: 88.88888%; */}
    
    height: 100%;
    ${"" /* height: 50%; */}
  }
`;