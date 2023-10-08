import React, { useState } from 'react';
import './App.css';
import image1 from './pic1.jpg';
import image2 from './pic2.jpg';
import image3 from './pic3.jpg';
// import the images 

const ImageSlider = () => {
  const images = [ image1, image2, image3];  
   // this is the array of images, we put the images in here

  const [currentIndex, setCurrentIndex] = useState(0); 
  // this state is used to keep track of the current index/ current image that is shown. It is not connected to
  // the array however when we use this number in the index it will play a role.

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
          {/* the 3 circles are the button and the background is the div. We map through the array of images and the amount of buttons created
              correlate with the amount of images in the array. In this case there are 3 images so there are 3 circle buttons. 
              
              We then make the one of the circles blue based on the current image that is shown. */}

      </div>

    </div>

    </section>

    </>
  );
};

export default ImageSlider;
