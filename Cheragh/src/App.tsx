import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProperties from './components/FeaturedProperties';
import PopularDestinations from './components/PopularDestinations';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <PopularDestinations />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;