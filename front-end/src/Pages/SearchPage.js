import * as React from 'react';
import BoxLocation from '../component/BoxLocation';
import BoxDate from '../component/BoxDate';
import Header from '../component/Header';
import BoxArtist from '../component/BoxArtist';
import BottomNavig from '../component/BottomNavig';

const backgroundColor =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';



export default function SearchPage() {
  return (
 <div>
    <Header />
  <BoxLocation />
  <BoxDate />
  <BoxArtist />
  <BottomNavig />
  </div>



  );
}