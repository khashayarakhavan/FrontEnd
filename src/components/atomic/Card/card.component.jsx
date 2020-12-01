//Basics
import React from 'react';
//Design
import colors from '../../../design/colors';

//Style
import {
  CardPicture,
  Heading,
  Details,
  CTA,
  Button,
  Card,
  ScrollCardItem,
} from "./card.styles";

//Code
const Template = () => {
  return (
    <Card>
      <ScrollCardItem className="heads">
        {/* <figure /> */}
        <div className="iconTest">
          <i className=" icon-basic-heart"></i>
        </div>
        <h3 className="heading-tertiary ">Explore the world</h3>
        <span />
        <p className="feature-box__text">
          shaja baja much loven disch very guten disch shaja baja much loven
          disch very guten disch
        </p>
        <div className="technologies">
          <i className=" icon-basic-heart"></i>
          <i className=" icon-basic-heart"></i>
          <i className=" icon-basic-heart"></i>
        </div>
      </ScrollCardItem>
      <ScrollCardItem className="tails">
        <CTA>
          <div className="priceBox">
            <p className="priceOnly">Only</p>
            <p className="value">299$</p>
          </div>
          <Button>Book now!</Button>
        </CTA>
      </ScrollCardItem>
      {/* <div className="tails">
        <CTA>
          <div className="priceBox">
            <p className="priceOnly">Only</p>
            <p className="value">299$</p>
          </div>
          <Button>Book now!</Button>
        </CTA>
      </div> */}
    </Card>
  );
};
// const Template = () => {
//   return (
//     <Card>
//       <div className="heads">
//         <CardPicture className="P1">&nbsp;</CardPicture>
//         <Heading>
//           <span className="P1">
//             The dream explorer
//           </span>
//         </Heading>
//         <Details className="card__details">
//           <ul>
//             <li>3day tour</li>
//             <li>upto30people</li>
//             <li>2tourguides</li>
//             <li>sleepinghotel</li>
//             <li>easy</li>
//           </ul>
//         </Details>
//       </div>
//       <div className="tails">
//         <CTA>
//           <div className="priceBox">
//             <p className="priceOnly">Only</p>
//             <p className="value">299$</p>
//           </div>
//           <Button >
//             Book now!
//           </Button>
//         </CTA>
//       </div>
//     </Card>
//   );
// };

export default Template;
