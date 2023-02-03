import React from 'react';
import PropTypes from 'prop-types';
import {
  TariffsCardWrapper,
  CardHeaderWrapper,
  CardHeader,
  CardPrice,
  CardOldPrice,
  BenefitsWrapper,
  BenefitInto,
  CheckMarkIcon,
  CardButtonWrapper,
  CardButton,
} from './styles';

export const TariffsCard = ({ title, price, benefits, isTop }) => {
  return (
    <TariffsCardWrapper
      isTop={isTop ? isTop : false}
    >
      <CardHeaderWrapper>
        <CardHeader>{title}</CardHeader>
        <CardPrice>${price} {isTop && (<CardOldPrice>$10.99</CardOldPrice>)}</CardPrice>
      </CardHeaderWrapper>
      <BenefitsWrapper>
        {Object.entries(benefits).map(([key, value]) => (
          <BenefitInto key={key}>
            <CheckMarkIcon isTop={isTop ? isTop : false} value={value}/>
            <p>{key}</p>
          </BenefitInto>
        ))}
      </BenefitsWrapper>
      <CardButtonWrapper>
        <CardButton isTop={isTop ? isTop : false}>Buy</CardButton>
      </CardButtonWrapper>
    </TariffsCardWrapper>
  );
};

TariffsCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  benefits: PropTypes.array,
  isTop: PropTypes.bool,
};
