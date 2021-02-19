import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  
} from "pure-react-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const slideImages = ["Assets/logo.jpg", "Assets/image.jpg", "Assets/logo2.jpg"];

function SliderImage() {
  return (
    <div className="Slider">
      <Carousel autoPlay showArrows={true} showThumbs={false} ImageWithZoom={true}>
        <div>
          <img src={slideImages[0]} alt="img1" height="300px" width="100px" />
        </div>
        <div>
          <img src={slideImages[1]} alt="img2" height="300px" width="100px" />
        </div>
        <div>
          <img src={slideImages[2]} alt="img3" height="300px" width="100px" />
        </div>
      </Carousel>
    </div>
  );
}
export default SliderImage;
