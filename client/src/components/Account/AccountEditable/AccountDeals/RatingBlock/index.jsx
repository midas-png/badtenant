import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import { RatingBlockWrapper, ButtonsWrapper, RatingButton } from './styles';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Modal } from 'ui';
import RatingModal from './RatingModal/index';
import ReportModal from './ReportModal/index';

export const StyledRating = styled(Rating)({
  '& .Mui-selected': {
    backgroundColor: 'transparent',
    color: '#19D5C6',
  },
});

const RatingBlock = ({ deal, handleRemoveDeal }) => {
  const [value, setValue] = useState(0);
  const [rateModalActive, setRateModalActive] = useState(false);
  const [reportModalActive, setReportModalActive] = useState(false);

  return (
    <RatingBlockWrapper>
      {reportModalActive ? (
        <Modal active={reportModalActive} setActive={setReportModalActive}>
          <ReportModal
            rate={value}
            id_deal={deal.id}
            title={deal.title}
            id_tenant={deal.id_tenant}
            id_landlord={deal.id_landlord}
            setModalActive={setReportModalActive}
          />
        </Modal>
      ) : null}
      {rateModalActive ? (
        <Modal active={rateModalActive} setActive={setRateModalActive}>
          <RatingModal
            rate={value}
            setValue={setValue}
            id_deal={deal.id}
            title={deal.title}
            id_tenant={deal.id_tenant}
            id_landlord={deal.id_landlord}
            setModalActive={setRateModalActive}
            handleRemoveDeal={handleRemoveDeal}
          />
        </Modal>
      ) : null}
      <StyledRating
        name="customized-color"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        icon={<StarRoundedIcon fontSize="large" />}
        emptyIcon={<StarBorderRoundedIcon fontSize="large" />}
      />
      <ButtonsWrapper>
        <RatingButton
          style={{ color: '#b00' }}
          onClick={() => setReportModalActive(true)}>
          Report
        </RatingButton>
        <RatingButton onClick={() => setRateModalActive(true)}>
          Send
        </RatingButton>
      </ButtonsWrapper>
    </RatingBlockWrapper>
  );
};

export default RatingBlock;

RatingBlock.propTypes = {
  deal: PropTypes.object,
  handleRemoveDeal: PropTypes.func,
};
