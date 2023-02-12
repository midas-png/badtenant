import Hero from '../components/Hero';
import Info from '../components/Info';
import { Options } from 'components';
import { homeObject1, homeObject2 } from '../components/Info/Data';

export const Home = () => {
  return (
    <>
      <Hero />
      <Info {...homeObject1} />
      <Options />
      <Info {...homeObject2} />
    </>
  );
};
