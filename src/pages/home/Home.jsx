import HomeHero from '../../components/home/HomeHero';
import HomeStats from '../../components/home/HomeStats';
import HomePhilosophy from '../../components/home/HomePhilosophy';
import HomeFeatures from '../../components/home/HomeFeatures';
import DidYouKnow from '../../components/home/DoYouKnow';
import PreservedBeauty from '../../components/home/PreservedBeauty';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-orange-light">
      <HomeHero />
      <HomeStats />
      <HomePhilosophy />
      <HomeFeatures />
      <DidYouKnow />
      <PreservedBeauty />
    </div>
  );
};

export default Home;