import React from "react";
import ImageSlider from "./components/ImageSlider";
import img1 from "./images/deal1-68.jpg";
import img2 from "./images/deal1-75.jpg";
import img3 from "./images/deal1-76.jpg";
import img4 from "./images/deal1-82.jpg";
import img5 from "./images/body.jpg";
import img6 from "./images/dumble.jpg";
import img7 from "./images/rope.jpg";
import img8 from "./images/run1.jpg";
import img9 from "./images/running.jpg";
import img10 from "./images/soldier.jpg";
import img11 from "./images/stomach.jpg";
import img12 from "./images/warmup.jpg";

const Home = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default Home;
