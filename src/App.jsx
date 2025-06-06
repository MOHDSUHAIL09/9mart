import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"  // तुम्हारा auth service
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)

  // ✅ Step 1: Load cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem('cart')
      return stored ? JSON.parse(stored) : []
    } catch (err) {
      return []
    }
  })




  const location = useLocation();

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch, location.pathname])

   // ✅ Step 2: Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])



  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product])
  }

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header cartCount={cart.length} />
        <main>
          {/* Outlet को context में cart और addToCart दे रहे हैं */}
          <Outlet context={{ handleAddToCart, cart, setCart }} />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App