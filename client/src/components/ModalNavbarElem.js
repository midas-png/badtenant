import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const ModalTitle = styled.h2``;

export const ModalParagraph = styled.p`
  text-align: center;
  width: 80%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 80%;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  border: 2px solid #ff6700;
  padding: 7px;
  border-radius: 10px;
  color: ${({ primary }) => (primary ? '#fff' : '#ff6700')};
  background: ${({ primary }) => (primary ? '#ff6700' : 'transparent')};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#ff6700')};
    color: ${({ primary }) => (primary ? '#ff6700' : '#fff')};
    border: ${({ primary }) =>
    primary ? '2px solid #ff6700' : '2px solid #ff6700'};
  }
`;
