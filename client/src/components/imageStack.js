import React from 'react';
import '../styles/stack.css';
import image1 from '../styles/compsci.jpeg';
import image2 from '../styles/altdsi.png';
import image3 from '../styles/henry-sy-hall.jpeg'


const ImageStack = () => {
  return (
    <div className="image-stack">
       <img src={image1} alt="AnimoHub Logo" className="compsci" />
       <img src={image2} alt="AnimoHub Logo" className="altdsi" />
       <img src={image3} alt="AnimoHub Logo" className="building" />
      
     
    </div>
  );
};

export default ImageStack;
