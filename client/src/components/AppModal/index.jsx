import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  ModalWrapper,
  ModalTitle,
  ModalParagraph,
  ButtonsWrapper,
  ModalButton,
} from '../ModalNavbarElem';
import { Link } from 'react-router-dom';
import { Context } from '../../index';

const AppModal = ({ agreementCount, setActive }) => {
  const { user } = useContext(Context);
  return (
    <ModalWrapper>
      <ModalTitle>{agreementCount} of your deals were expired</ModalTitle>
      <ModalParagraph>
        Rate your landlord in your account. <br />
        Your landlord can rate you too
      </ModalParagraph>
      <ButtonsWrapper>
        <ModalButton
          onClick={() => {
            setActive(false);
          }}>
          Later
        </ModalButton>
        <ModalButton primary="true">
          <Link to={`/account/${user.user.id}`}>To account</Link>
        </ModalButton>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default AppModal;

AppModal.propTypes = {
  agreementCount: PropTypes.number,
  setActive: PropTypes.func,
};
