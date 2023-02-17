import React, { useState, useEffect } from "react";
import { CarouselPost } from "../../data/post/CarouselPost";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 640) {
      setItemsToShow(1);
    } else if (screenWidth < 768) {
      setItemsToShow(2);
    } else {
      setItemsToShow(3);
    }
  }, [screenWidth]);

  const handleNext = () => {
    setCurrentIndex(currentIndex + itemsToShow);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - itemsToShow);
  };

  const items = CarouselPost.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="relative py-25 mb-40">
      <div className="flex justify-center items-center py-10">
        <h2 className="text-2xl font-bold mb-5">Recent News</h2>
      </div>
      <div className="relative">
        {screenWidth < 768 && (
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              className={`${
                currentIndex === 0 ? "invisible" : ""
              } h-12 w-12 flex justify-center items-center rounded-full bg-white shadow-md mr-3`}
              onClick={handlePrev}
            >
              <i className="fas fa-chevron-left text-gray-500"></i>
            </button>
            <button
              className={`${
                currentIndex + itemsToShow >= CarouselPost.length
                  ? "invisible"
                  : ""
              } h-12 w-12 flex justify-center items-center rounded-full bg-white shadow-md`}
              onClick={handleNext}
            >
              <i className="fas fa-chevron-right text-gray-500"></i>
            </button>
          </div>
        )}
        <div className="flex justify-center h-full gap-10 items-center">
          {items.map((item, index) => (
            <Link key={item.id} to={`/post/${item.id}`}>
              <div
                className={`w-64 ${
                  index === Math.floor(itemsToShow / 2)
                    ? "transform scale-125"
                    : ""
                }`}
              >
                <div className="p-5 bg-white rounded-lg shadow">
                  <img src={item.image} alt={item.title} />
                  <h2 className="text-xl font-medium mt-5">{item.title}</h2>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
