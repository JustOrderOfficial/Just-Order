import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarosalData } from './HomeCarosalData';



const items = homeCarosalData.map((item)=> <img className='cursor-pointer' role = 'presentation' src={item.image} alt='image loading'/>)

const HomeCarosal = () => (
    <AliceCarousel
        autoPlay
        infinite
        autoPlayInterval={1000}
        disableButtonsControls
        items={items}
      
    />
);
export default HomeCarosal