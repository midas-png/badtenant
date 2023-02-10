import styled, { css } from 'styled-components/macro';

export const NotebookContainer = styled.div`
  width: 100%;
  height: 200vh;
  background: linear-gradient(
    90deg,
    rgb(255, 103, 0) 0%,
    rgb(255, 135, 54) 100%
  );
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const NotebookForm = styled.div`
  margin-top: 150px;
  width: 65%;
  min-height: 1000px;
  background: #fff;
  border-radius: 8px;
`;

export const NotebookContent = styled.div`
  padding: 50px;
`;

export const Title = styled.span`
  color: #ff6700;
  font-size: 2rem;
`;

const pStyles = css`
  color: #131c33;
  white-space: initial;
  line-height: 1.5;
  padding: 8px 0;
`;

export const Paragraph = styled.p`
  ${pStyles}
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

export const LastUpdated = styled.span`
  margin-top: 10px;
  color: #ff6700;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
