import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../ButtonElem';
import {
  Container,
  InfoWrapper,
  InfoRow,
  InfoColumn1,
  InfoColumn2,
  TextWrapper,
  TopLine,
  Title,
  Subtitle,
  ButtonWrapper,
  ImageWrapper,
} from './styles';

function Info({
  lightBackground,
  id,
  imageStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  icon,
  primary,
  dark,
  dark2,
  linkTo,
}) {
  return (
    <Container lightBackground={lightBackground} id={id}>
      <InfoWrapper>
        <InfoRow imageStart={imageStart}>
          <InfoColumn1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Title lightText={lightText}>{headline}</Title>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <ButtonWrapper>
                <Button
                  to={linkTo}
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}>
                  {buttonLabel}
                </Button>
              </ButtonWrapper>
            </TextWrapper>
          </InfoColumn1>
          <InfoColumn2>
            <ImageWrapper>
              {icon}
            </ImageWrapper>
          </InfoColumn2>
        </InfoRow>
      </InfoWrapper>
    </Container>
  );
}

export default Info;

Info.propTypes = {
  lightBackground: PropTypes.bool,
  id: PropTypes.any,
  imageStart: PropTypes.string,
  topLine: PropTypes.string,
  lightText: PropTypes.bool,
  headline: PropTypes.string,
  darkText: PropTypes.bool,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  icon: PropTypes.any,
  primary: PropTypes.bool,
  dark: PropTypes.bool,
  dark2: PropTypes.bool,
  linkTo: PropTypes.any,
};
