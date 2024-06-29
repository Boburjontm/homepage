// src/components/Header.js
import React from 'react';
import { FaUser, FaHeart, FaBalanceScale, FaShoppingCart, FaBars, FaSearch, FaPhone } from 'react-icons/fa';
import Logo from "../../public/img/Logo.svg"
import { IoLocationOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-[#F8F7F3] shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">О компании</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Доставка</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Оплата</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Гарантии</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Блог</a>
          </nav>
          <nav className="hidden md:flex space-x-4">
            <a href="mailto: info@mail.ru"className="text-gray-600 hover:text-gray-800">info@mail.ru</a>
            <a href="https://www.google.com/maps/dir/GMT+International+Properties/%D0%9A%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0+%D1%8D%D1%81%D1%82%D0%B5%D1%82%D0%B8%D0%BA%D0%B8+%D0%B8+%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0+%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8+GMTClinic,+%D0%9D%D0%BE%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%B1%D1%83%D0%BB.,+20+%D0%B0,+%D1%81%D1%82%D1%80.+9,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+121069/@55.7550014,37.5030499,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4887c7505ad38d35:0xab3b475826a2627d!2m2!1d86.3811287!2d54.8329454!1m5!1m1!1s0x46b54a4aa2b7feb7:0xbb7d6188055700cd!2m2!1d37.58545!2d55.755029!5m1!1e1?entry=ttu" className="text-gray-600 hover:text-gray-800">г. Москва, ул. Московская, д. 35</a>
            
          </nav>

        </div>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-8" />
          
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
          <select class="w-[40%] rounded-l-full bg-[#EFEFEF] px-[15px] py-[6px] text-[#7A7687] outline-none sm:w-[30%]">
                <option value="Все категории">Все категории</option>
                <option value="Хирургия">Хирургия</option>
                <option value="Офтальмология">Офтальмология</option>
                <option value="Лабораторная диагностика">
                  Лабораторная диагностика
                </option>
                <option value="Акушерство">Акушерство</option>
                <option value="Гинекология">Гинекология</option>
                <option value="Гистология">Гистология</option>
                <option value="Косметология">Косметология</option>
                <option value="Оториноларингология">Оториноларингология</option>
                <option value="Рентгенология и томография">
                  Рентгенология и томография
                </option>
                <option value="Стерилизация">Стерилизация</option>
                <option value="Физиотерапия и реабилитация">
                  Физиотерапия и реабилитация
                </option>
                <option value="Функциональная диагностика">
                  Функциональная диагностика
                </option>
                <option value="Эндоскопия">Эндоскопия</option>
              </select>
            <input type="text" placeholder="Поиск" className="border border-gray-300 rounded-r-full rounded-l-[-50px] py-1 px-4 pr-10 focus:outline-none" />


            <button className="absolute  mr-20 top-1/2 transform -translate-y-1/2">
              <FaSearch className="text-gray-500 " />
            </button>
          </div>
          
          
         
        </div>
        <div className="hidden lg:flex flex-col text-sm text-gray-600">
            <span>Пн-Пт с 09:00-19:00</span>
            <span>Сб-Вс - выходной</span>
          </div>
        <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center flex-col">
              <FaUser className="mr-1" />
              Войти
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center flex-col">
              <FaHeart className="mr-1" />
              Избранное
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center flex-col">
              <FaBalanceScale className="mr-1" />
              Сравнить
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center flex-col">
              <FaShoppingCart className="mr-1" />
              Корзина
            </a>
          </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-gray-600">
          <button className="flex items-center space-x-2">
            <FaBars />
            <span>Каталог</span>
          </button>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-800">Производители</a>
            <a href="#" className="hover:text-gray-800">Кабинеты под ключ</a>
            <a href="#" className="hover:text-gray-800">Услуги</a>
            <a href="#" className="hover:text-gray-800">Акции</a>
            <a href="#" className="hover:text-gray-800">Покупателям</a>
            <a href="#" className="hover:text-gray-800">Контакты</a>
          </nav>
           <div className="hidden lg:flex  items-center text-sm text-gray-600 gap-4">
            <a href="https://www.google.com/maps/dir/GMT+International+Properties/%D0%9A%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0+%D1%8D%D1%81%D1%82%D0%B5%D1%82%D0%B8%D0%BA%D0%B8+%D0%B8+%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0+%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8+GMTClinic,+%D0%9D%D0%BE%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%B1%D1%83%D0%BB.,+20+%D0%B0,+%D1%81%D1%82%D1%80.+9,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+121069/@55.7550014,37.5030499,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4887c7505ad38d35:0xab3b475826a2627d!2m2!1d86.3811287!2d54.8329454!1m5!1m1!1s0x46b54a4aa2b7feb7:0xbb7d6188055700cd!2m2!1d37.58545!2d55.755029!5m1!1e1?entry=ttu"><span className='flex items-center border py-1 px-6 rounded-3xl'>Москва <IoLocationOutline /></span></a>
            <a href="tel:+74950000000" className="text-green-600 flex items-center border py-1 px-6 rounded-3xl">
              <FaPhone className="mr-1" />
              +7(495)000-00-00
            </a>
          </div>
          <button className="bg-green-600 text-white py-1 px-4 rounded-full"><a href="tel:+74950000000">Заказать звонок</a></button>

        </div>
      </div>
    </header>
  );
};

export default Header;
