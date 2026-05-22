import HomeHero from '../../components/home/HomeHero';
import HomeStats from '../../components/home/HomeStats';
import HomePhilosophy from '../../components/home/HomePhilosophy';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-orange-light">
      <HomeHero />
      <HomeStats />
      <HomePhilosophy />
    </div>
  );
};

export default Home;