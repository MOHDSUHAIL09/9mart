
import  { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet, useLocation} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
    const location = useLocation();
  const [cartCount, setCartCount] = useState(0); // ✅ Add this line
  useEffect(() => {
  // जब भी path बदले, कुछ करना हो तो यहां लिखो
  console.log('Current path:', location.pathname);
}, [location.pathname]);

  

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [dispatch]);

   const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header cartCount={cartCount} /> {/* ✅ Pass count to Header */}
        <main>
          <Outlet context={{ handleAddToCart }} /> {/* ✅ Pass function to child */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;