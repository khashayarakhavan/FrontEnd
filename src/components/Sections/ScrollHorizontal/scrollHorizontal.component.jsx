//Basics
import React from 'react';

//Style
import {
  ScrollContainerFlex,
  ScrollCardContainer,
  ScrollCardItem,
} from './scrollHorizontal.styles';

//Code
const Template = () => {
  return (
    <ScrollContainerFlex>
      <ScrollCardContainer>
        <ScrollCardItem>
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
      </ScrollCardContainer>

      <ScrollCardContainer>
        <ScrollCardItem>
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
          </div>
        </ScrollCardItem>
      </ScrollCardContainer>
      <ScrollCardContainer>
        <ScrollCardItem>
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
            <i className=" icon-basic-heart"></i>
          </div>
        </ScrollCardItem>
      </ScrollCardContainer>
      <ScrollCardContainer>
        <ScrollCardItem>
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
          </div>
        </ScrollCardItem>
      </ScrollCardContainer>
    </ScrollContainerFlex>
  );
};

export default Template;
