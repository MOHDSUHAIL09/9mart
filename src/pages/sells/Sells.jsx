import { useOutletContext } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './Sells.css'; // अपना custom CSS

export default function DailyBestSells() {
  const { handleAddToCart } = useOutletContext(); // function App.jsx से मिल रहा
  const products = [
    {
      title: "Golden Pineapple",
      price: 13,
      oldPrice: 18,
      rating: 4.5,
      image: "product-img-15.jpg"
    },
    {
      title: "Golden Pineapple",
      price: 13,
      oldPrice: 18,
      rating: 4.5,
      image: "product-img-19.jpg"
    },
    {
      title: "Golden Pineapple",
      price: 13,
      oldPrice: 18,
      rating: 4.5,
      image: "product-img-11.jpg"
    },
    {
      title: "Golden Pineapple",
      price: 13,
      oldPrice: 18,
      rating: 4.5,
      image: "product-img-17.jpg"
    },
    {
      title: "Golden Pineapple",
      price: 13,
      oldPrice: 18,
      rating: 4.5,
      image: "product-img-18.jpg"
    }
  ];

  return (
    <div className="daily-best-sells-container">
      <h2 className="section-title"> Daily Best Sells </h2>
      <div className="underline"></div>

      <div className="sells-wrapper">
        {/* Left Promo Box */}
        <div className="promo-box">
          <img src="banner-deal.jpg" alt="Promo" />
          <div className="promo-content">
            <h3>100% Organic Coffee Beans.</h3>
            <p>Get the best deal before close.</p>
            <button className="shop-now">Shop Now</button>
          </div>
        </div>

        {/* Right Swiper Product Slider */}
        <div className="swiper-wrapper">
          <Swiper
            breakpoints={{
                600: { slidesPerView: 3, },
                480: { slidesPerView: 2, },
                0: {slidesPerView: 1,}
              }}

            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="product-swiper"
          >
            
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product-card0">
                  <img src={product.image} alt={product.title} />
                  <p className="category">Fruits & Vegetables</p>
                  <h3>{product.title}</h3>
                  <p className="price">
                    <span className="new-price">${product.price}</span>{' '}
                    <span className="old-price">${product.oldPrice}</span>
                  </p>
                  <p className="rating">⭐ {product.rating}</p>
                  <button onClick={handleAddToCart} className="add-cart">+ Add to cart</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
