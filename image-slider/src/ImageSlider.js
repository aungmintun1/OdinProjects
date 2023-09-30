import React, { useState } from 'react';
import './App.css';
import image1 from './pic1.jpg';
import image2 from './pic2.jpg';
import image3 from './pic3.jpg';

const ImageSlider = () => {
  const images = [ image1, image2, image3];   // this is the array of images 
  const [currentIndex, setCurrentIndex] = useState(0); 

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    // if it is at last array item it will go to the first array item, else it will add index by 1
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    // if it is at 0, it will go to the last item in the array, if it is more than 0 it will minus 1 from current array index
  };
  
  return (
    <> 
    <section class= "sliderSection">
    <h1>Image Slider</h1>

    <div className="slider">
      <button className="slider-button left" onClick={prevSlide}>&#10594;</button>
      <img className="slider-image" src={images[currentIndex]} alt="slide" />
      <button className="slider-button right" onClick={nextSlide}>&#10596;</button>

      <div class="btnContainer">

         {images.map((_, index) => (
            <button className={currentIndex === index ? 'blue' : 'circle'}>&#x25CF;</button>
          ))}

      </div>

    </div>

    </section>

    </>
  );
};

export default ImageSlider;
