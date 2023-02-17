import React from 'react';
import Hero from '../../component/hero/Hero';
import Carousel from '../../component/carousel/Carousel';
import PrayerTime from '../../component/prayerTime/PrayerTime';
import ServiceCards from '../../component/cards/ServiceCards';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        <div className='col-span-1'>
          <PrayerTime />
        </div>
        <div className='col-span-1'>
          <Carousel />
        </div>
      </div>
      <ServiceCards />
    </div>
  );
}

export default Home;
