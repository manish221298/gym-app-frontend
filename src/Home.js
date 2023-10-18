import React from "react";
import ImageSlider from "./compoents/ImageSlider";
import img1 from "./images/deal1-68.jpg";
import img2 from "./images/deal1-75.jpg";
import img3 from "./images/deal1-76.jpg";
import img4 from "./images/deal1-82.jpg";

const Home = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default Home;
