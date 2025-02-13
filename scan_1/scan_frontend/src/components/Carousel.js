import React from 'react';
import Slider from 'react-slick';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>

      <div>
        <img src='https://sterh-school.ru/docroot/filesup/skan/gr3.png' alt='slide-1' />
        <p align="left">Высокая и оперативная скорость <br />обработки заявки</p>
      </div>
      <div>
        <img src='https://sterh-school.ru/docroot/filesup/skan/gr3.png' alt='slide-2' />
        <p align="left">Огромная комплексная база данных,<br /> обеспечивающая объективный ответ на запрос</p>
      </div>
      <div>
        <img src='https://sterh-school.ru/docroot/filesup/skan/gr3.png' alt='slide-3' />
        <p align="left">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
      </div>
    </Slider>
  );
};

export default Carousel;