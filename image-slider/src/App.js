import './fade.css'
import ImageSlider from './ImageSlider';
import Scroll from './Scroll';

import image1 from './pic1.jpg';
import image2 from './pic2.jpg';
import image3 from './pic3.jpg';

function App() {
  
const imgArray =[image1,image2,image3,image1,image2,image3]
  
  return (
    <div className="box">

      {/* <ImageSlider /> */}

      {imgArray.map((el) => (
        <Scroll pic={el} />
      ))}
      
   {/* <Scroll pic={image1}/> */}
  

    </div>
  );
}

export default App;
