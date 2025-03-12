import React from 'react';
import FeatureCards from '../component/FeatureCard';
import Homecard from '../component/ui/Homecard';
import Swalat from '../component/sawalat';
import BooksExplore from '../component/BooksExplore';
import QuranCarousel from '../component/QuranCarousel';

function Home() {
  return (
    <>
    <QuranCarousel/>
      <FeatureCards />
      <Homecard />
      <Swalat />
      <BooksExplore/>
    </>
  );
}

export default Home;
