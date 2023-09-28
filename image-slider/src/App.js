import './App.css';
import ImageSlider from './ImageSlider';
import image1 from './pic1.jpg';
import image2 from './pic2.jpg';
import image3 from './pic3.jpg';

function App() {

  
  const images = [ image1, image2, image3  ];
  return (
    <div className="App">


      <ImageSlider images={images} />
      
    </div>
  );
}

export default App;
