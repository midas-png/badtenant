import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  ${({ active }) => (active ? 'pointer-events: all;' : 'pointer-events: none;')}
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 20px;
  transition: 0.5s;
  padding: 20px 0;
  width: 500px;
`;
