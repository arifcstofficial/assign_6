import React from 'react';
import HeroSection from './homePage/heroSection';
import TheLibrary from './homePage/shared/TheLibrary';
import Footer from './homePage/footer';

export default function Home() {
  return (
    <div>
        <HeroSection />
        <TheLibrary />
        <Footer />
    </div>
  );
}
