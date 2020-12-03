//Basics
import React from 'react';
//State
import { connect } from 'react-redux';
//Selectors
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectDarkMode } from "../../../redux/themes/themes.selectors";
import { selectCurrentUser } from '../../../redux/user/user.selectors';
//Actions
import { toggleCartHidden } from "../../../redux/cart/cart.actions";
import { toggleDarkMode } from "../../../redux/themes/themes.actions";
import { signOutStart } from "../../../redux/user/user.actions";
//Components
import CartDropdown from '../../complex/cart-dropdown/cart-dropdown.component';
//Design
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
import {
  SectionYoutube,
  YouTubeContainer
} from './youTube.styles';
// src={"https://www.youtube.com/embed/gO6wh3-AOD4"}
export const YouTube = (props) => {
{/* <h1>
      Wanna Know me in a minute?
      </h1>
      <h4>
        Let's go!
      </h4> */}

  return (
    <SectionYoutube>
      <YouTubeContainer>
        <iframe
          id="ytplayer"
          className="player"
          type="text/html"
          width="100%"
          height="100%"
          src={"https://www.youtube.com/embed/gO6wh3-AOD4"}
          frameborder="0"
          allowfullscreen
        />
      </YouTubeContainer>
    </SectionYoutube>
  );
};


// var YouTube = React.createClass({
//   render: function () {
//     var videoSrc =
//       "https://www.youtube.com/embed/" +
//       this.props.video +
//       "?autoplay=" +
//       this.props.autoplay +
//       "&rel=" +
//       this.props.rel +
//       "&modestbranding=" +
//       this.props.modest;

//     return (
//       <YouTubeContainer>
//         <iframe
//           id="ytplayer"
//           className="player"
//           type="text/html"
//           width="100%"
//           height="100%"
//           src={"https://www.youtube.com/embed/gO6wh3-AOD4"}
//           frameborder="0"
//           allowfullscreen
//         />
//       </YouTubeContainer>
//     );
//   },
// });
// export default YouTube;
{/* <YouTube video="mYFaghHyMKc" autoplay="0" rel="0" modest="1" /> */}

{/* <iframe id="ytplayer" type="text/html" width="720" height="405"
src="https://www.youtube.com/embed/M7lc1UVf-VE"
frameborder="0" allowfullscreen></iframe> */}

// React.render(
//   <YouTube video="mYFaghHyMKc" autoplay="0" rel="0" modest="1" />,
//   document.body
// );

// //Code
// export const Header = (props) => {
//   const { hidden } = props;

//   return (
//     <HigherContainer>
    
//     </HigherContainer>
//   );
// };

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden,
//   darkMode: selectDarkMode,
// });

// const mapDispatchToProps = (dispatch) => ({
//   signOutStart: () => dispatch(signOutStart()),
//   toggleDarkMode: () => dispatch(toggleDarkMode()),
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header);
