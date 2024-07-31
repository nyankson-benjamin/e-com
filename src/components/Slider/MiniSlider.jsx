import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import useScreenWidth from "../../Hooks/useScreenWidth";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper.min.css";
import {
  CardHeader,
  Card,
  CardContent,
  Stack,
  Rating,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function MiniSlider({ data, isLoading }) {
  const [screenWidth] = useScreenWidth();
  const autoplayOptions = {
    delay: 2000, // Delay between transitions (in ms)
    disableOnInteraction: false, // Enable/disable autoplay on user interaction
  };
  return (
    <div>
      {" "}
      {screenWidth > 498 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
          autoplay={autoplayOptions}
          // disableOnInteraction={false}
          style={{ margin: "auto", width: "80%" }}
        >
          <Grid>
            {data?.map((product) => (
              <SwiperSlide key={product.id}>
                <img src={product} />
              </SwiperSlide>
            ))}
          </Grid>
        </Swiper>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
          autoplay={autoplayOptions}
          // disableOnInteraction={false}
          style={{ margin: "auto", width: "90%" }}
        >
          <Grid>
            {data?.map((product) => (
              <SwiperSlide key={product.id}>
                <img src={product} style={{ width: "50px", margin: "10px" }} />
              </SwiperSlide>
            ))}
          </Grid>
        </Swiper>
      )}
    </div>
  );
}
