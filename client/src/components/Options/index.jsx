import { OPTIONS } from './data';
import {
  ComponentWrapper,
  ComponentTitle,
  CardTitle,
  OptionsWrapper,
  CardDescription,
  OptionsCard,
} from './styles';

export const Options = () => (
  <ComponentWrapper id="options">
    <ComponentTitle>Our Options</ComponentTitle>
    <OptionsWrapper>
      {OPTIONS.map(({ title, description, icon }) => (
        <OptionsCard key={Math.random()}>
          {icon}
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </OptionsCard>
      ))}
    </OptionsWrapper>
  </ComponentWrapper>
);
