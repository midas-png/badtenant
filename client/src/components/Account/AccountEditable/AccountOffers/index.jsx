import { useState, useEffect, useContext } from 'react';
import {
  AccountOffersWrapper,
  OffersHeaderWrapper,
  OffersTitle,
  OffersPreTitle,
  OffersHR,
  OffersDataWrapper,
  OfferWrapper,
  PreTitleWrapper,
  SentDealsWrapper,
  OfferImage,
  OfferDataWrapper,
  OfferButtonsWrapper,
  OfferButton,
} from './styles';
import { Context } from '../../../../index';
import { fetchUserOffers, updateStatus } from '../../../../http/offersAPI';
import { getAdvertisement } from '../../../../http/advertisementAPI';
import { createDeal } from '../../../../http/agreementAPI';
import { Temporal } from '@js-temporal/polyfill';
import { Assets } from 'assets';

const AccountOffersSection = () => {
  const [sentOffers, setSentOffers] = useState([]);
  const [sentOffersData, setSentOffersData] = useState([]);
  const [incomingOffers, setIncomingOffers] = useState([]);
  const [incomingOffersData, setIncomingOffersData] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    const today = Temporal.Now.plainDateTimeISO();
    fetchUserOffers(user.user.id)
      .then((data) => {
        data.forEach((offer) => {
          if (offer.status != 1) {
            return;
          }
          if (today.until(offer.date_to).toString()[0] === '-') {
            updateStatus(offer.id, 4).catch((error) => console.error(error));
            return;
          }
          if (offer.to_id == user.user.id) {
            setIncomingOffers((incomingOffers) => [...incomingOffers, offer]);
            getAdvertisement(offer.from_id).then((data) =>
              setIncomingOffersData((incomingOffersData) => [
                ...incomingOffersData,
                data,
              ]),
            );
          } else if (offer.from_id == user.user.id) {
            setSentOffers((sentOffers) => [...sentOffers, offer]);
            getAdvertisement(offer.to_id).then((data) =>
              setSentOffersData((sentOffersData) => [...sentOffersData, data]),
            );
          }
        });
      })
      .catch((error) => console.error(error));
  }, [user.user.id]);

  const handleCancel = (id, toID, newStatus) => {
    updateStatus(id, newStatus)
      .then(() => {
        const updatedSentOffers = sentOffers.filter(
          (offer) => offer.to_id !== toID,
        );
        const updatedSentOffersData = sentOffersData.filter(
          (offer) => offer.id !== toID,
        );
        setSentOffers(updatedSentOffers);
        setSentOffersData(updatedSentOffersData);
      })
      .catch((error) => console.error(error));
  };

  const handleDecline = (id, fromID, newStatus) => {
    updateStatus(id, newStatus)
      .then(() => {
        const updatedIncomingOffers = incomingOffers.filter(
          (offer) => offer.from_id !== fromID,
        );
        const updatedIncomingOffersData = incomingOffersData.filter(
          (offer) => offer.id !== fromID,
        );
        setIncomingOffers(updatedIncomingOffers);
        setIncomingOffersData(updatedIncomingOffersData);
      })
      .catch((error) => console.error(error));
  };

  const handleAccept = (id, id_tenant, id_landlord, date_from, date_to) => {
    createDeal(id_tenant, id_landlord, date_from, date_to)
      .then(() => {
        let updatedIncomingOffers;
        let updatedIncomingOffersData;
        if (user.user.role == 'TENANT') {
          updatedIncomingOffers = incomingOffers.filter(
            (offer) => offer.from_id !== id_landlord,
          );
          updatedIncomingOffersData = incomingOffersData.filter(
            (offer) => offer.id !== id_landlord,
          );
        } else if (user.user.role == 'LANDLORD') {
          updatedIncomingOffers = incomingOffers.filter(
            (offer) => offer.from_id !== id_tenant,
          );
          updatedIncomingOffersData = incomingOffersData.filter(
            (offer) => offer.id !== id_tenant,
          );
        }
        updateStatus(id, 4);
        setIncomingOffers(updatedIncomingOffers);
        setIncomingOffersData(updatedIncomingOffersData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <AccountOffersWrapper id="offers">
      <OffersHeaderWrapper>
        <OffersTitle>Offers</OffersTitle>
        <OffersHR />
      </OffersHeaderWrapper>
      <PreTitleWrapper>
        <OffersPreTitle>Sent Offers</OffersPreTitle>
        <OffersHR small="true" />
      </PreTitleWrapper>
      {sentOffers.length != 0 ? (
        <OffersDataWrapper>
          <SentDealsWrapper>
            {sentOffers
              .filter((offerValue) => {
                if (offerValue.status == 1) {
                  return offerValue;
                }
              })
              .map((offerValue) => (
                <OfferWrapper key={offerValue.id}>
                  <OfferImage
                    src={
                      offerValue.img
                        ? 'http://217.151.229.239:5000/' + offerValue.img
                        : Assets.UserNoImage
                    }
                  />
                  <OfferDataWrapper>
                    <h4>
                      {
                        sentOffersData.find(
                          (value) => value.id == offerValue.to_id,
                        )?.title
                      }
                    </h4>
                    <span>
                      {offerValue.date_from} - {offerValue.date_to}
                    </span>
                    <OfferButton
                      onClick={() =>
                        handleCancel(offerValue.id, offerValue.to_id, 3)
                      }>
                      Cancel
                    </OfferButton>
                  </OfferDataWrapper>
                </OfferWrapper>
              ))}
          </SentDealsWrapper>
        </OffersDataWrapper>
      ) : (
        <span>No sent offers yet</span>
      )}
      <PreTitleWrapper>
        <OffersPreTitle>Incoming Offers</OffersPreTitle>
        <OffersHR small="true" />
      </PreTitleWrapper>
      {incomingOffers.length != 0 ? (
        <OffersDataWrapper>
          <SentDealsWrapper>
            {incomingOffers
              .filter((offerValue) => {
                if (offerValue.status == 1) {
                  return offerValue;
                }
              })
              .map((offerValue) => {
                const offerImage = offerValue.img
                  ? 'http://217.151.229.239:5000/' + offerValue.img
                  : Assets.UserNoImage;
                return (
                  <OfferWrapper key={offerValue.id}>
                    <OfferImage src={offerImage} />
                    <OfferDataWrapper>
                      <h4>
                        {
                          incomingOffersData.find(
                            (value) => value.id == offerValue.from_id,
                          )?.title
                        }
                      </h4>
                      <span>
                        {offerValue.date_from} - {offerValue.date_to}
                      </span>
                      <OfferButtonsWrapper>
                        <OfferButton
                          onClick={() =>
                            handleDecline(offerValue.id, offerValue.from_id, 2)
                          }>
                          Decline
                        </OfferButton>
                        <OfferButton
                          primary="true"
                          onClick={() =>
                            handleAccept.apply(
                              this,
                              user.user.role == 'TENANT'
                                ? [
                                  offerValue.id,
                                  user.user.id,
                                  offerValue.from_id,
                                  offerValue.date_from,
                                  offerValue.date_to,
                                ]
                                : [
                                  offerValue.id,
                                  offerValue.from_id,
                                  user.user.id,
                                  offerValue.date_from,
                                  offerValue.date_to,
                                ],
                            )
                          }>
                          Accept
                        </OfferButton>
                      </OfferButtonsWrapper>
                    </OfferDataWrapper>
                  </OfferWrapper>
                );
              })}
          </SentDealsWrapper>
        </OffersDataWrapper>
      ) : (
        <span>No incoming offers yet</span>
      )}
    </AccountOffersWrapper>
  );
};

export default AccountOffersSection;
