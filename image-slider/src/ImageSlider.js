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

    <div className="slider">
      
      <img className="slider-image" src={images[currentIndex]} alt="slide" />
      {/* the src is stored in the array in each element. we use the array in order to access the current src of the picture we want to show*/}

      <button className="slider-button left" onClick={prevSlide}>&#10594;</button>
      <button className="slider-button right" onClick={nextSlide}>&#10596;</button>

      <div class="btnContainer">

         {images.map((_, index) => (
            <button className={currentIndex === index ? 'blue' : 'circle'}>&#x25CF;</button>
          ))}
          {/* the 3 white circles are the button and the background is the div. We map through the array of images and the amount of buttons created
              correlate with the amount of images in the array. In this case there are 3 images so there are 3 circle buttons. 
              
              We then make the one of the circles blue based on the current image that is shown.
              
              To do this we map the images array to make the buttons. Each button has its own index variable
              we compare the currentIndex of the images array to the index of the button array.
              If the button index is equal to the index of the images array, then that button will be blue. else the rest will be white.
              */}

      </div>

    </div>

    </section>

    </>
  );
};

export default ImageSlider;


/* 
How to style images in slider

.slider {
  position: relative;
 width: 1200px;
  height: 600px;
  overflow: hidden;
}

.slider-image {
  width: 100%;
  height: 100%;
  display: block;
}

we put the images in a div called slider.
the img tag has a classname of .slider-image that will take up the whole space of the div container

we use position relative so that the buttons will be positioned relative to the container and not the DOM.
we set the width and height and hide any overflow of the image.

*/

/* 
How to style buttons to be in the image slider

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

aside from the design. we position the buttons absolute and they are now relative to the container. We then vertically center the 
button by using the top and transform lines. note that top centers the element however the top of the element is centered not the center of it.
To do so we use the transform line.

.slider-button.left {
  left: 30px;
}

.slider-button.right {
  right: 30px;
}

we then use the left and right properties in order to position the button to the left and right side of the container.
The amount of px, will push the button away from the side.
Note that if you don't specifiy and left and right, default position is left top of container.


*/