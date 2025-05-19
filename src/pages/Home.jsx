import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import DownloadApp from './DownloadApp/Download';
import Visit from './visit/Visit';
import Categories from './categories/Categories';
import Cardbanner from './cardbanner/Cardbanner';
import Product from './product/Product';
import Sells from './sells/Sells';
import Features from './Features/Features';
import Slider from './slider-bottom/Slider';


const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Get the authentication status from Redux store
  const authStatus = useSelector(state => state.auth.status);

  useEffect(() => {
    if (!authStatus) {
      // If not authenticated, redirect to login page
      navigate('/login');
    } else {
      setLoading(false);
    }
  }, [authStatus, navigate]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
        <Swiper 
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          modules={[EffectFade, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="image-wrapper">
              <img src="/slide-1.jpg" alt="Slide 1" />
              <div className="overlay">
                <h2>SuperMarket Daily Fresh Grocery</h2>
                <p>Feel the beauty of untouched wilderness.</p>
                <button>Explore More</button>
              </div>
            </div>
          </SwiperSlide>
    
          <SwiperSlide>
            <div className="image-wrapper">
              <img src="/slider-2.jpg" alt="Slide 2" />
              <div className="overlay">
                <h2>Adventure Awaits</h2>
                <p>Start your next journey with us today.</p>
                <button>Get Started</button>
              </div>
            </div>
          </SwiperSlide>
    
          <SwiperSlide>
            <div className="image-wrapper">
              <img src="/slide-1.jpg" alt="Slide 3" />
              <div className="overlay">
                <h2>Find Your Freedom</h2>
                <p>Explore landscapes that take your breath away.</p>
                <button>Join Now</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>






<DownloadApp />
<Visit />
<Categories />
<Cardbanner />
<Product />
<Sells />
<Features />
<Slider />


</>
   
  );
}


export default Home;
