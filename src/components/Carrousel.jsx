import { useState } from "react";
import ArrowL from "../images/left_arrow.png";
import ArrowR from "../images/right_arrow.png";

const Carrousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="sliderStyles">
      <div>
        {slides.length > 1 && (
          <div onClick={goToPrevious} className="leftArrowStyles">
            <img src={ArrowL} alt="fleche_gauche" />
          </div>
        )}
        {slides.length > 1 && (
          <div onClick={goToNext} className="rightArrowStyles">
            <img src={ArrowR} alt="fleche_gauche" />
          </div>
        )}
      </div>

      {slides.map((picture, i) => (
        <div key={i} className="containerStyles">
          {i === currentIndex && (
            <img
              className="slideStyles"
              alt="banniere-page-logement"
              src={picture}
            />
          )}
          {i === currentIndex && slides.length > 1 && (
            <span className="sliderNumber">
              {currentIndex + 1}/{slides.length}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
