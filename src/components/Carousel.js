import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../styles/carousel-styles.css';

const MyCarousel = () => (
    <div className='carousel-container'>
      <Carousel plugins={['autoplay']}>
          {/* <img src={'https://i.imgur.com/fExb69W.png'} /> */}
          <img id='carousel-img' src={'https://i.imgur.com/B2Pd350.png'} alt='sony x3000' />
          <img id='carousel-img' src={'https://i.imgur.com/DWPZ6aL.png'} alt='jetson nano' />
          <img id='carousel-img' src={'https://i.imgur.com/9L3K8t4.png'} alt='shark geek battery' /> 
          {/* <img id='carousel-img' src={''} alt='night hawk' />  */}
      </Carousel>
    </div>
);

export default MyCarousel;