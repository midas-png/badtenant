import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  ${({ active }) => (active ? 'pointer-events: all;' : 'pointer-events: none;')}
`;

export const ModalContent = styled.div`
  min-height: 100px;
  min-width: 450px;
  background: #fff;
  padding: 15px;
  border-radius: 20px;
  transition: 0.5s;
`;
