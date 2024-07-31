import React, { useEffect, useState } from "react";
import "./CardSlider.css";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const RelatedProductSlider = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "right" && currentCard < cards?.length - 1) {
      setCurrentCard(currentCard + 1);
    } else if (direction === "left" && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCard < cards?.length - 1) {
        setCurrentCard(currentCard + 1);
      } else {
        setCurrentCard(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentCard, cards?.length]);
  return (
    <div className="card-slider">
      <div
        className="card-slider-inner"
        style={{ transform: `translateX(-${currentCard * 100}%)` }}
      >
        {cards?.map((card, index) => (
          <div className="cardSlider" key={index}>
            <Link to={`/productPage/${card.title}`}>
              <img
                src={card.images[0]}
                alt=""
                style={{ height: "250px" }}
                className="images"
              />
            </Link>
            <div
              style={{
                width: "100%",
                height: "100px",
                background: "rgb(167, 166, 166)",
                color: "white",
              }}
            >
              {card.title} || ${card.price}
            </div>
          </div>
        ))}
      </div>
      <br />
      <IconButton
        className="swipe-left"
        onClick={() => handleSwipe("left")}
        sx={{
          color: "white",
          left: "1rem",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "2rem",
          backgroundColor: "rgb(167, 166, 166)",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton
        className="swipe-right"
        onClick={() => handleSwipe("right")}
        sx={{
          color: "white",
          right: "1rem",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "2rem",
          backgroundColor: "rgb(167, 166, 166)",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  );
};

export default RelatedProductSlider;
