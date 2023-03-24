import React from 'react';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import Statistic from '../../components/Statistic';
import Services from '../../components/Services';
import Hero from '../../components/Hero';
import Article from '../../components/Article';
import Program from '../../components/Program';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Statistic />
      <Services />
      <Hero />
      <Article />
      <Program />
      <Footer />
    </>
  );
}
