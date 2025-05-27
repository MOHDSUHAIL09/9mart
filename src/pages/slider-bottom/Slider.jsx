// CategorySlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css'; // custom styles

import { Pagination } from 'swiper/modules';

const categories = [
  {
    title: "Dairy, Bread & Eggs",
    image: "product-img-1.jpg"
  },
  {
    title: "Dairy, Bread & Eggs",
    image: "product-img-11.jpg"
  },
  {
    title: "Instant Food",
    image: "product-img-3.jpg"
  },
  {
    title: "Pet Care",
    image: "product-img-4.jpg"
  },
  {
    title: "Snack & Munchies",
    image: "product-img-5.jpg"
  },
  {
    title: "Tea, Coffee & Drinks",
    image: "product-img-6.jpg"
  },
];

const CategorySlider = () => {
  return (
    <Swiper
      slidesPerView={5} // Default for larger screens
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="categorySlider"
      breakpoints={{
        // When the screen width is >= 1200px (large screens)
        1200: {
          slidesPerView: 5, // Show 5 items
        },
        // When the screen width is >= 992px (medium screens like tablets)
        992: {
          slidesPerView: 4, // Show 4 items
        },
        // When the screen width is >= 768px (small tablets)
        768: {
          slidesPerView: 3, // Show 3 items
        },
        // When the screen width is >= 480px (mobile screens)
        480: {
          slidesPerView: 2, // Show 2 items
        },
        // For screens smaller than 480px (mobile phones)
        0: {
          slidesPerView: 1, // Show 1 item
        },
      }}
    >
      {categories.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="category-card">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default CategorySlider;
