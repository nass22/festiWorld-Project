import React from 'react';
import Header from '../component/Header';
import BottomNavig from '../component/BottomNavig';
import Carousel from '../component/Carousel';
import SearchMenu from '../component/SearchMenu';
import Playlist from '../component/Playlist';
import News from '../component/News';
import Footer from '../component/Footer';
import '../component/Home.css';
import '../component/Home.css'
import Newsletter from '../component/Newsletter';

function Home() {
  return (
    <div className='home-background'>
   
   <Header />
      <Carousel />
      <SearchMenu />
      <News />
      <Playlist />
      <Newsletter />
      <Footer />
<BottomNavig />

      
      </div>
  );
}
export default Home;
