import PropTypes from 'prop-types';
import { ModalWrapper, ModalContent } from './styles';
const Modal = ({ active, setActive, children }) => {
  return (
    <ModalWrapper active={active} onClick={() => setActive(false)}>
      <ModalContent active={active} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.node,
};
