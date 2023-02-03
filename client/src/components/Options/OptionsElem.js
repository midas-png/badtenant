import styled from 'styled-components';

export const Container = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: column;
  jutify-content: center;
  align-items: center;
  background: #010606;
  padding-bottom: 30px;

  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }

  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`;

export const OptionsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const OptionsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const OptionsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const P = styled.p`
  font-size: 1rem;
  text-align: center;
`;
