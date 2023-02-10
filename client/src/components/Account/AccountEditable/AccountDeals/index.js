import React, { useContext, useEffect, useState } from 'react';
import {
  ContactWrapper,
  DealsWrapper,
  DealsBlockWrapper,
  DealsBlock,
  DealWrapper,
  InfoWrapper,
  InfoImage,
  InfoName,
  InfoStatistic,
} from './AccountDealsElem';
import { MainInfoTitle, MainInfoHR } from '../AccountEditableElem';
import {
  getTenantDeals,
  getLandlordDeals,
} from '../../../../http/agreementAPI';
import { Context } from '../../../../index';
import { observer } from 'mobx-react-lite';
import { getAdvertisement } from '../../../../http/advertisementAPI';
import RatingBlock from './RatingBlock/index';
import { Assets } from 'assets';
import { Temporal } from '@js-temporal/polyfill';

const AccountDeals = observer(() => {
  const [deals, setDeals] = useState([]);
  const [dealsInfo, setDealsInfo] = useState([]);
  const [dealsMerged, setDealsMerged] = useState([]);
  const { user } = useContext(Context);
  const today = Temporal.Now.plainDateISO();

  useEffect(() => {
    if (user.user.role === 'TENANT') {
      getTenantDeals(user.user.id).then((data) => {
        data.forEach((dealData) => {
          if (dealData.status === 1) {
            setDeals((deals) => [...deals, dealData]);
          }
        });
      });
    } else if (user.user.role === 'LANDLORD') {
      getLandlordDeals(user.user.id).then((data) => {
        data.forEach((dealData) => {
          if (dealData.status === 1) {
            setDeals((deals) => [...deals, dealData]);
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    deals.forEach((deal) => {
      if (user.user.role == 'TENANT') {
        getAdvertisement(deal.id_landlord).then((info) => {
          setDealsInfo((dealsInfo) => [...dealsInfo, info]);
        });
      } else if (user.user.role == 'LANDLORD') {
        getAdvertisement(deal.id_tenant).then((info) => {
          setDealsInfo((dealsInfo) => [...dealsInfo, info]);
        });
      }
    });
  }, [deals]);

  useEffect(() => {
    setDealsMerged(mergeArrays(deals, dealsInfo));
  }, [deals, dealsInfo]);

  const mergeArrays = (arr1 = [], arr2 = []) => {
    let res = [];
    res = arr1
      .filter((obj) => {
        if (obj.status == 1) {
          return obj;
        }
      })
      .map((obj) => {
        if (user.user.role == 'TENANT') {
          const index = arr2.findIndex((el) => el['id'] == obj['id_landlord']);
          const { title, img, role, location } = index != -1 ? arr2[index] : {};
          return {
            ...obj,
            title,
            img,
            role,
            location,
          };
        } else if (user.user.role == 'LANDLORD') {
          const index = arr2.findIndex((el) => el['id'] == obj['id_tenant']);
          const { title, img, role, location } = index != -1 ? arr2[index] : {};
          return {
            ...obj,
            title,
            img,
            role,
            location,
          };
        }
      });
    return res;
  };

  const isDealRateble = (date_from, date_to) => {
    return (
      today.since(date_from).toString().includes('-') === false &&
      today.since(date_to).toString().includes('-') === false
    );
  };

  const handleRemoveDeal = (id) => {
    const newDeals = deals.filter((deal) => deal.id !== id);
    setDeals(newDeals);
  };

  return (
    <DealsWrapper id="deals">
      <MainInfoTitle>Deals</MainInfoTitle>
      <MainInfoHR />
      <DealsBlockWrapper>
        <DealsBlock dealsNumber={dealsMerged.length}>
          {dealsMerged.length === 0 ? (
            <label>No deals yet.</label>
          ) : (
            <DealWrapper>
              {dealsMerged
                .filter((deal) => {
                  if (deal.status === 1) {
                    return deal;
                  }
                })
                .map((deal) => (
                  <InfoWrapper id={deal.id} key={deal.id}>
                    {user.user.role === 'TENANT' ? (
                      <>
                        <InfoImage
                          src={deal.img === '' ? Assets.UserNoImage : deal.img}
                        />
                        <ContactWrapper>
                          <InfoName to={`/advertisement/${deal.id_landlord}`}>
                            {deal.title}
                          </InfoName>
                          <p>{deal.location}</p>
                          <InfoStatistic>
                            Your housing from
                            <br />
                            {deal.date_from} to {deal.date_to}
                          </InfoStatistic>
                        </ContactWrapper>
                        {isDealRateble(deal.date_from, deal.date_to) ? (
                          <RatingBlock
                            deal={deal}
                            handleRemoveDeal={handleRemoveDeal}
                          />
                        ) : (
                          <label
                            style={{
                              textAlign: 'center',
                            }}>
                            You can rate only <br />
                            if the deal is expired
                          </label>
                        )}
                      </>
                    ) : (
                      <>
                        <InfoImage
                          src={deal.img === '' ? Assets.UserNoImage : deal.img}
                        />
                        <ContactWrapper>
                          <InfoName to={`/advertisement/${deal.id_tenant}`}>
                            {deal.title}
                          </InfoName>
                          <p>{deal.location}</p>
                          <InfoStatistic>
                            Your housing from
                            <br />
                            {deal.date_from} to {deal.date_to}
                          </InfoStatistic>
                        </ContactWrapper>
                        {isDealRateble(deal.date_from, deal.date_to) ? (
                          <RatingBlock
                            deal={deal}
                            handleRemoveDeal={handleRemoveDeal}
                          />
                        ) : (
                          <label
                            style={{
                              textAlign: 'center',
                            }}>
                            You can rate only <br />
                            if the deal is expired
                          </label>
                        )}
                      </>
                    )}
                  </InfoWrapper>
                ))}
            </DealWrapper>
          )}
        </DealsBlock>
      </DealsBlockWrapper>
    </DealsWrapper>
  );
});

export default AccountDeals;
