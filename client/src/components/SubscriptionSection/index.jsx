import {
  SubscriptionSectionWrapper,
  SubscriptionHeaderWrapper,
  SubscriptionHeader,
  TariffsCardsWrapper,
} from './styles';
import { TariffsCard } from '../../ui/tariffsCard/index';

const SubscriptionSection = () => {
  const benefits = {
    basic: {
      'Benefit 1': 1,
      'Benefit 2': 1,
      'Benefit 3': 0,
      'Benefit 4': 0,
      'Benefit 5': 0,
      'Benefit 6': 0,
    },
    pro: {
      'Benefit 1': 1,
      'Benefit 2': 1,
      'Benefit 3': 1,
      'Benefit 4': 1,
      'Benefit 5': 0,
      'Benefit 6': 0,
    },
    diamond: {
      'Benefit 1': 1,
      'Benefit 2': 1,
      'Benefit 3': 1,
      'Benefit 4': 1,
      'Benefit 5': 1,
      'Benefit 6': 1,
    },
  };

  return (
    <SubscriptionSectionWrapper>
      <SubscriptionHeaderWrapper>
        <SubscriptionHeader>Pricing Plans</SubscriptionHeader>
      </SubscriptionHeaderWrapper>
      <TariffsCardsWrapper>
        <TariffsCard
          title="Basic"
          price={5.99}
          benefits={benefits.basic}
        />
        <TariffsCard
          title="Pro"
          price={8.99}
          benefits={benefits.pro}
          isTop={true}
        />
        <TariffsCard
          title="Diamond"
          price={14.99}
          benefits={benefits.diamond}
        />
      </TariffsCardsWrapper>
    </SubscriptionSectionWrapper>
  );
};

export default SubscriptionSection;
