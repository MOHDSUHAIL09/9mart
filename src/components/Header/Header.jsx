import { Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
    { name: 'Service', slug: '/service', active: authStatus },
    { name: 'About', slug: '/about', active: authStatus },
    { name: "Contact", slug: 'contact', active: authStatus},
  ]



  return (
    <header className="main-header">

        <nav className="nav-bar">
          <div className="logo">
            <Link to="/">
              <Logo width="80px" />
            </Link>
          </div>

          <div className="search-container01">
        <input type="text" className="search-input01" placeholder="Search Xcart" />
        <button className="search-button01">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

          <ul className={`nav-center ${isMenuOpen ? 'show' : ''}`}>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)} className="nav-link">
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
    </header>
  )
}

export default Header
