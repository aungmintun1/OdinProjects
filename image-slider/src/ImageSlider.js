import React, { useState } from 'react';
import './App.css';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0); 

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
    // if it is at last array item it will go to the first array item, else it will add index by 1
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    // if it is at 0, it will go to the last item in the array, if it is more than 0 it will minus 1 from current array index
  };

  return (
    <> 
    <section class= "sliderSection">
    <h1>Image Slider</h1>
    <div className="slider">
      <button className="slider-button left" onClick={prevSlide}>‹</button>
      <img className="slider-image" src={images[current]} alt="slide" />
      <img src="pic1.jpg" alt="" />
      <button className="slider-button right" onClick={nextSlide}>›</button>
    </div>
    </section>

    </>
  );
};

export default ImageSlider;
