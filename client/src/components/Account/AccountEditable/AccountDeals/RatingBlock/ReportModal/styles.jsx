import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-height: 100px;
`;

export const ReportDescription = styled.textarea.attrs({
  placeholder: 'Enter your experience here...',
})`
  width: 350px;
  resize: none;
  padding: 15px;
  border-radius: 20px;
  outline: none;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  height: 150px;
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

export const ModalSelect = styled.select``;

export const ModalOption = styled.option``;
