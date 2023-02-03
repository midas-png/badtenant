import React, { useState, useContext } from 'react';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import PropTypes from 'prop-types';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { StyledRating } from '../';
import {
  ModalWrapper,
  RatingDescription,
  ButtonsWrapper,
  ModalButton,
} from './RatingModalElem';
import { Context } from '../../../../../../index';
import { updateUserRating } from '../../../../../../http/userAPI';
import { rateUser } from '../../../../../../http/ratingAPI';
import { updateStatus } from '../../../../../../http/agreementAPI';
import { activateToast } from '../../../../AccountEditable/index';

const RatingModal = ({
  rate,
  title,
  setValue,
  id_deal,
  id_tenant,
  id_landlord,
  setModalActive,
  handleRemoveDeal,
}) => {
  const [ratingComment, setRatingComment] = useState('');
  const { user } = useContext(Context);
  const sendRequest = () => {
    if (user.user.role === 'TENANT') {
      rateUser(id_tenant, id_landlord, ratingComment, rate)
        .then(() => {
          updateStatus(id_deal, 0);
          activateToast('success', 'Comment and rate has sent. Thank you!');
          handleRemoveDeal(id_deal);
          updateUserRating(id_landlord, rate);
        })
        .catch(() => {
          activateToast('error', 'Not handled error');
        });
    } else {
      rateUser(id_landlord, id_tenant, ratingComment, rate)
        .then(() => {
          updateStatus(id_deal, 0);
          activateToast('success', 'Comment and rate has sent. Thank you!');
          handleRemoveDeal(id_deal);
          updateUserRating(id_tenant, rate);
        })
        .catch((error) => {
          activateToast('error', error.response.data.messaage);
        });
    }
    setModalActive(false);
  };
  return (
    <ModalWrapper>
      <h2 style={{ textAlign: 'center' }}>
        Your experience with <br />
        {title}
      </h2>
      <p style={{ textAlign: 'center' }}>
        What is your opinion about {title}?<br />
        Left your comment and rate below.
      </p>
      <StyledRating
        name="customized-color"
        value={rate}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        icon={<StarRoundedIcon fontSize="large" />}
        emptyIcon={<StarBorderRoundedIcon fontSize="large" />}
      />
      <RatingDescription
        onChange={(e) => setRatingComment(e.target.value)}></RatingDescription>
      <ButtonsWrapper>
        <ModalButton onClick={() => sendRequest()} primary={true}>
          Send
        </ModalButton>
        <ModalButton onClick={() => setModalActive(false)}>Cancel</ModalButton>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default RatingModal;

RatingModal.propTypes = {
  rate: PropTypes.number,
  title: PropTypes.string,
  setValue: PropTypes.func,
  id_deal: PropTypes.number,
  id_tenant: PropTypes.number,
  id_landlord: PropTypes.number,
  setModalActive: PropTypes.func,
  handleRemoveDeal: PropTypes.func,
};
