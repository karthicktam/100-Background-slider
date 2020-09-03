import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function App() {
  const [currentActive, setActive] = useState(
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
  );

  const [activeSlide, setActiveSlide] = useState(0);

  const slideArr = [
    {
      image:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      image:
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
    },
    {
      image:
        "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      image:
        "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
    },
    {
      image:
        "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    }
  ];

  let subtractImage = 0;
  const leftHandler = () => {
    subtractImage = activeSlide - 1;
    setActiveSlide(subtractImage);

    if (subtractImage < 0) {
      setActiveSlide(slideArr.length - 1);
      setActive(slideArr[slideArr.length - 1].image);
      subtractImage = slideArr.length - 1;
    } else {
      setActive(slideArr[subtractImage].image);
      subtractImage = +subtractImage;
    }
  };

  let addImage = 0;
  const rightHandler = () => {
    addImage = activeSlide + 1;
    setActiveSlide(addImage);

    if (addImage > slideArr.length - 1) {
      setActiveSlide(0);
      setActive(slideArr[0].image);
      addImage = 0;
    } else {
      setActive(slideArr[addImage].image);
      addImage = +addImage;
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${currentActive})`
      }}
    >
      <div className="slider-container">
        {slideArr.map((el) => (
          <div
            className={currentActive === el.image ? "slide active" : "slide"}
            style={{ backgroundImage: `url(${el.image})` }}
            key={el.image}
          ></div>
        ))}
        <button className="arrow left-arrow" onClick={leftHandler}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="arrow right-arrow" onClick={rightHandler}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
