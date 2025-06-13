import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();

  // ✅ Get logged-in user's email from redux
  const authUser = useSelector((state) => state.auth.userData);
  const userEmail = authUser?.email || 'guest';

  // ✅ Load cart from localStorage based on user email
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(`cart_${userEmail}`);
      setCart(storedCart ? JSON.parse(storedCart) : []);
    } catch (err) {
      setCart([]);
    }
  }, [userEmail]);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cart));
  }, [cart, userEmail]);

  // ✅ Handle auth check and cart clearing on logout
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
          // Clear the cart on logout
          const emailToClear = authUser?.email || 'guest';
          localStorage.removeItem(`cart_${emailToClear}`);
          setCart([]);
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch, location.pathname]);

  // ✅ Handle Add to Cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header cartCount={cart.length} />
        <main>
          {/* Outlet ko context pass karna */}
          <Outlet context={{ handleAddToCart, cart, setCart }} />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
