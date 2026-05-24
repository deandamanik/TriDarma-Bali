import HomeHero from '../../components/home/HomeHero';
import HomeStats from '../../components/home/HomeStats';
import HomePhilosophy from '../../components/home/HomePhilosophy';
import HomeFeatures from '../../components/home/HomeFeatures';
import DidYouKnow from '../../components/home/DoYouKnow';
import PreservedBeauty from '../../components/home/PreservedBeauty';
import TravelersWords from '../../components/home/TravelersWords';

const Home = () => {
    return (
      <div className="w-full min-h-screen bg-orange-white">
      <HomeHero />
      <HomeStats />
      <HomePhilosophy />
      <HomeFeatures />
      <DidYouKnow />
      <PreservedBeauty />
      <TravelersWords />
    </div>
  );
};

export default Home;