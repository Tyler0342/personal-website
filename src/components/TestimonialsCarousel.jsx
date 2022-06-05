import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      {/* <>
        <img src={avatars} alt="Avatar1" />
        <div className="myCarousel">
          <h3>Avatar 1</h3>
          <p>
            Tyler is awesome!
          </p>
        </div>
      </> */}
    </Carousel>
  );
};

export default TestimonialsCarousel;
