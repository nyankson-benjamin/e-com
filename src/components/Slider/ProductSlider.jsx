import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import useScreenWidth from "../../Hooks/useScreenWidth";
import ProductCard from "../../Products/ProductCard";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/swiper.min.css";
import { Grid } from "@mui/material";

export default function ProductSlider({ data, isLoading }) {
  const [screenWidth] = useScreenWidth();
  const autoplayOptions = {
    delay: 2000, // Delay between transitions (in ms)
    disableOnInteraction: false, // Enable/disable autoplay on user interaction
  };

  const flipEffect = {
    slideShadows: false,
  };
  return (
    <div>
  
    </div>
  );
}
