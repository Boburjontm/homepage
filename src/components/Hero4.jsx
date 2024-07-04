import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Hero4 = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  useEffect(() => {
    import('../../src/data/data')
      .then(module => {
        setCarouselData(module.CarouselData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsToShow, carouselData.length - itemsToShow)
    );
  };

  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <h2 className="mb-6 text-lg font-medium leading-[120%] md:mb-8 md:text-xl lg:mb-10 lg:text-[30px]">
        Комплексное оснащение кабинетов
      </h2>
      <div className="relative">
        <div className="flex overflow-hidden">
          {carouselData.slice(currentIndex, currentIndex + itemsToShow).map((item) => (
            <div key={item.id} className="flex-shrink-0 p-2 w-1/3">
              <div className="rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3]">
                <div className="flex w-full items-center justify-center rounded-t-[10px] border-b border-[#E5E2EE] bg-white">
                  <img
                    src={item.image}
                    alt="Slider Img"
                    className="h-full w-full rounded-t-[10px] object-cover"
                  />
                </div>
                <div className="px-4 py-4 lg:px-6 lg:py-5">
                  <p className="text-[12px] font-medium md:text-sm md:leading-[118%] lg:text-[16px] lg:leading-[140%]">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft className="text-gray-800" />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
          onClick={handleNext}
          disabled={currentIndex >= carouselData.length - itemsToShow}
        >
          <FaArrowRight className="text-gray-800" />
        </button>
      </div>
      <div className="mt-4 flex w-full items-center justify-end">
        <div className="flex gap-[10px] ">
          <button className="rounded-[50px] border border-[#D5D1E1] px-5 py-2 leading-[140%] text-[#088269] outline-none transition duration-300 ease-in-out hover:border-[#088269] focus:outline-none md:text-[12px] lg:px-[30px] lg:py-[11px] lg:text-sm">
            Бесплатная консультация
          </button>
          <button className="rounded-[50px] bg-[#088269] px-5 py-2 leading-[140%] text-[#F8F7F3] outline-none transition duration-300 ease-in-out hover:bg-[#07745E] focus:outline-none md:text-[12px] lg:px-[30px] lg:py-[11px] lg:text-sm">
            Рассчитать стоимость
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
