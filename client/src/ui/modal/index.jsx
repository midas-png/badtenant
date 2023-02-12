import PropTypes from 'prop-types';
import { ModalWrapper, ModalContent } from './styles';

export const Modal = ({ active, setActive, children }) => (
  <ModalWrapper active={active} onClick={() => setActive(false)}>
    <ModalContent active={active} onClick={(e) => e.stopPropagation()}>
      {children}
    </ModalContent>
  </ModalWrapper>
);

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.node,
};
