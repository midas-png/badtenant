import React from 'react';
import { RatingContainer, StarFill, StarHalf, StarEmpty } from './styles';
import PropTypes from 'prop-types';

let index = 0;

const toggleIndex = () => {
  index++;
  return index;
};

const getStar = (rate, scale) => {
  switch (rate) {
  case 0:
    return <StarEmpty key={toggleIndex()} scale={scale} />;
  case 50:
    return <StarHalf key={toggleIndex()} scale={scale} />;
  case 100:
    return <StarFill key={toggleIndex()} scale={scale} />;
  }
};

const getStars = (rate) => {
  switch (parseFloat(rate)) {
  case 0.0:
    return [0, 0, 0, 0, 0];
  case 0.5:
    return [50, 0, 0, 0, 0];
  case 1.0:
    return [100, 0, 0, 0, 0];
  case 1.5:
    return [100, 50, 0, 0, 0];
  case 2.0:
    return [100, 100, 0, 0, 0];
  case 2.5:
    return [100, 100, 50, 0, 0];
  case 3.0:
    return [100, 100, 100, 0, 0];
  case 3.5:
    return [100, 100, 100, 50, 0];
  case 4.0:
    return [100, 100, 100, 100, 0];
  case 4.5:
    return [100, 100, 100, 100, 50];
  case 5.0:
    return [100, 100, 100, 100, 100];
  }
};

export const Rating = ({ rate, scale }) => {
  return (
    <RatingContainer>
      {getStars(rate).map((rate) => getStar(rate, scale))}
    </RatingContainer>
  );
};

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
  scale: PropTypes.any,
};
