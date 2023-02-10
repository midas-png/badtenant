/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  ModalWrapper,
  ButtonsWrapper,
  ModalButton,
  ReportDescription,
  ModalSelect,
  ModalOption,
} from './styles';
import { sendReport } from '../../../../../../http/reportAPI';
import { Context } from '../../../../../../index';

const report = (reportReason, fromId, toId, text) => {
  sendReport(reportReason, fromId, toId, text)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
};

const ReportModal = ({
  rate,
  id_deal,
  title,
  id_tenant,
  id_landlord,
  setModalActive,
}) => {
  const { user } = useContext(Context);
  const [reportData, setReportData] = useState({
    ReportData: [
      { id: 1, reason: 'Advertisement is no Longer Avaliable' },
      { id: 2, reason: 'Outdated Information' },
      { id: 3, reason: 'Illegal Content' },
      { id: 4, reason: 'Hateful or Abusive Content' },
      { id: 5, reason: 'Fraudulent Listing' },
      { id: 6, reason: 'Other' },
    ],
  });
  const [activeReason, setActiveReason] = useState('');
  const [reportText, setReportText] = useState('');

  return (
    <ModalWrapper>
      <h2>Report {title}</h2>
      <ModalSelect onChange={(e) => setActiveReason(e.target.value)}>
        <ModalOption>-- Select --</ModalOption>
        {reportData.ReportData.map((value) => {
          return <ModalOption key={value.id}>{value.reason}</ModalOption>;
        })}
      </ModalSelect>
      <ReportDescription
        onChange={(e) => setReportText(e.target.value)}></ReportDescription>
      <ButtonsWrapper>
        <ModalButton
          primary={true}
          onClick={() =>
            report.apply(
              this,
              user.user.id == id_landlord
                ? [activeReason.id, id_landlord, id_tenant, reportText]
                : [activeReason.id, id_tenant, id_landlord, reportText],
            )
          }>
          Report
        </ModalButton>
        <ModalButton onClick={() => setModalActive(false)}>Cancel</ModalButton>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default ReportModal;

ReportModal.propTypes = {
  rate: PropTypes.number,
  id_deal: PropTypes.number,
  title: PropTypes.string,
  id_tenant: PropTypes.number,
  id_landlord: PropTypes.number,
  setModalActive: PropTypes.func,
};
