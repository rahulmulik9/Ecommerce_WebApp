import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();
 /*This is main carousel. Added 4 images which is accessed fro, homeCarousel data 
On Homepage.jsx we created homecarosel div and send homeCarouselData with it. 
Here we can see item that is nothing but homeCarouselData
In that image is image url and path is define navigation when clicked on the image
*/
const HomeCarousel = () => {
  const navigate = useNavigate();
  const item = homeCarouselData.map((item) => (
    <img
      className="cursor-pointer rounded-md"
      onClick={() => navigate(item.path)}
      src={item.image}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={item}
      autoPlay
      infinite
      autoPlayInterval={2000}
      disableButtonsControls
    />
  );
};

export default HomeCarousel;
