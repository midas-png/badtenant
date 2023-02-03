import './App.css';
import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Preloader from './components/Preloader';
import { Context } from './index';
import { Theme } from 'domain/theme';
import { check } from './http/userAPI';
import Modal from './components/Modal/index';
import { observer } from 'mobx-react-lite';
import { getDealRelevance, getTenantDeals } from './http/agreementAPI';
import AppModal from './components/AppModal';
const { Temporal } = require('@js-temporal/polyfill');

const App = observer(() => {
  const [loading, setLoading] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const [agreementCount, setAgreementCount] = useState(0);
  const currentDate = Temporal.Now.plainDateISO().toString();
  const { user, advertisement } = useContext(Context);

  useLayoutEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
        if (data.role === 'TENANT') {
          getTenantDeals(data.id).then((data) => {
            data.forEach((agreement_data) => {
              if (
                Temporal.PlainDate.from(agreement_data.date_to).until(
                  Temporal.PlainDate.from(currentDate),
                ).days > 0
              ) {
                getDealRelevance(
                  agreement_data.id_tenant,
                  agreement_data.id_landlord,
                ).then(() => {
                  advertisement.pushAgreement(agreement_data);
                  setAgreementCount(advertisement.completedAgreements.length);
                });
              }
            });
          });
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (agreementCount !== 0) {
      setModalActive(true);
    }
  }, [agreementCount]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Theme>
        <AppRouter />
        {modalActive ? (
          <Modal active={modalActive} setActive={setModalActive}>
            <AppModal
              agreementCount={agreementCount}
              setActive={setModalActive}
            />
          </Modal>
        ) : null}
      </Theme>
    </Router>
  );
});

export default App;
