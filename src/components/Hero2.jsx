import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { LuBarChartBig } from "react-icons/lu";
import { ProductsData } from '../../src/data/data'; // Adjust this path as necessary

const Hero2 = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; // Adjust this value to 3 items visible at once

  useEffect(() => {
    setProducts(ProductsData); // Set the product data directly
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, products.length - itemsToShow));
  };

  return (
    <div className="bg-[#F8F7F3] py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Каталог товаров</h2>
        <div className="flex mb-4 space-x-4">
          <div className="text-gray-600">Хиты продаж</div>
          <div className="text-gray-600">Новинки</div>
          <div className="text-gray-600">Акции</div>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
              {products.map(product => (
                <div key={product.id} className="w-1/3 flex-shrink-0 px-2"> {/* Adjust width based on itemsToShow */}
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between gap-4 mb-4">
                      {product.title && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded border-green-800 border">Новинка</span>
                      )}
                      <div className="div flex justify-end gap-4">
                        <FaRegHeart className="cursor-pointer flex justify-end" />
                        <LuBarChartBig className='cursor-pointer' />
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-center rounded-t-[10px] border-b border-[#E5E2EE] bg-white">
                      <img src={product.img} alt={product.title} className="w-full h-40 object-cover mb-4" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-500 mb-2">Артикул: {product.desc}</p>
                    <p className="text-lg font-bold mb-4">{product.price}</p>
                    <button className="bg-white border border-green-600 text-green-600 py-2 px-4 rounded-full w-full">Добавить в корзину</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" onClick={handlePrev}>
            <FaArrowLeft className="text-gray-800" />
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" onClick={handleNext}>
            <FaArrowRight className="text-gray-800" />
          </button>
        </div>
        <div className="flex justify-end mt-6">
          <div className="flex space-x-4">
            <button className="bg-white border border-green-600 text-green-600 py-2 px-4 rounded-full">Бесплатная консультация</button>
            <button className="bg-green-600 text-white py-2 px-4 rounded-full">Все товары</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
