import styled from 'styled-components';

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0;
  background: linear-gradient(
    90deg,
    rgb(255, 103, 0) 0%,
    rgb(255, 135, 54) 100%
  );
`;

export const AboutForm = styled.div`
  margin-top: 150px;
  width: 65%;
  padding: 20px 0;
  background: #fff;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const AboutContent = styled.div`
  padding: 50px;
`;

export const AboutTitle = styled.span`
  color: #ff6700;
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  color: #131c33;
  white-space: initial;
  line-height: 1.5;
  padding: 8px 0;
`;

export const H2Title = styled.h2`
  color: #ff6700;
`;

export const ContentWrapper = styled.div`
  margin-top: 20px;
`;

export const SectionWrapper = styled.div`
  padding: 20px 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

