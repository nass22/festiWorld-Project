import React from 'react';
import Header from '../component/Header';
import BottomNavig from '../component/BottomNavig';
import BootsrapCarousel from '../component/BootsrapCarousel';
import SearchMenu from '../component/SearchMenu';
import Playlist from '../component/Playlist';
import News from '../component/News';
import Footer from '../component/Footer';
import '../component/Home.css';
import '../component/Home.css'

function Home() {
  return (
    <div className='home-background'>
   
   <Header />
      <BootsrapCarousel />
      <SearchMenu />
      <News />
      <Playlist />
      <Footer />
<BottomNavig />

      
      </div>
  );
}
export default Home;
