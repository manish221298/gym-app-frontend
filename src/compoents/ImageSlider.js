import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/deal1-68.jpg";
import img2 from "../images/deal1-75.jpg";
import img3 from "../images/deal1-76.jpg";
import img4 from "../images/deal1-82.jpg";

// const CustomPrevArrow = (props) => (
//   <div {...props} className="custom-arrow prev-arrow">
//     okay
//   </div>
// );

// const CustomNextArrow = (props) => (
//   <div {...props} className="custom-arrow next-arrow">
//     okay
//   </div>
// );

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{ height: "100%", width: "100%" }}
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
