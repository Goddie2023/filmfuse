import React, { useEffect, useState, useRef } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import "./Carousel.styles.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import LazyImage from "../lazyLoadImage/LazyImage";

const Carousel = ({ content }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="carouselContainer">
      <div className="leftArrowContainer">
        <FaCircleChevronLeft className="arrow" />
      </div>

      <div className="rightArrowContainer">
        <FaCircleChevronRight className="arrow" />
      </div>
      <ContentWrapper>
        <div className="carouselItems">
          {content?.results?.map((item) => {
            const posterPath = item.poster_path;
            const fullPosterUrl = BASE_URL + posterPath;

            return (
              <div key={item.id} className="carouselItem">
                <div className="posterContainer">
                  <LazyImage src={fullPosterUrl} className="posterImg" />
                </div>

                {/* title */}
                <h4 className="title">{item.title || item.name}</h4>
              </div>
            );
          })}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
