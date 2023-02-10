import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const ModalTitle = styled.h2``;

export const ModalDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  gap: 10px;
`;

export const ModalDate = styled(DatePicker)`
  outline: none;
  border: 1px solid #ababab;
  border-radius: 10px;
  padding-left: 5px;
`;

export const ModalLabel = styled.label`
  font-size: 14px;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
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

export const TextAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const TextArea = styled.textarea.attrs({
  placeholder: 'Enter description about the offer...',
})`
  width: 100%;
  resize: none;
  padding: 15px;
  border-radius: 20px;
  outline: none;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  height: 150px;
`;

export const WarningWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const WarningIcon = styled.span`
  border-radius: 50%;
  background: #ff6700;
  width: 35px;
  height: 35px;
  padding: 15px;
  position: relative;
  margin: 0 20px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '!';
    font-size: 24px;
    color: #fff;
  }
`;

export const WarningText = styled.span`
  font-size: 15px;
`;
