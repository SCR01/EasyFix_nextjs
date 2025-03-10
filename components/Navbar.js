import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from '../lib/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar-wrap p-4">
      <nav className={`nav-main border navbar fixed-top rounded-4 navbar-expand-lg ${scrolled ? 'scrolled shadow-lg py-2' : 'py-3'}`}>
        <div className="container">
          <Link href="/" className="navbar-brand">
            <div className="d-flex align-items-center">
              <Image 
                src="/images/album/easy-fix-logo-bg-removed-2.png" 
                alt="EasyFix Expert Logo" 
                width={150} 
                height={150} 
                priority
                className="img-fluid"
              />
            </div>
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#nav-main"
            aria-controls="nav-main" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav-main">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/air-conditioner" className="nav-link">
                  Air Conditioner
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/washing-machine" className="nav-link">
                  Washing Machine
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/refrigerator" className="nav-link">
                  Refrigerator
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  id="navbarDropdown" 
                  role="button"
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Services
                </a>
                <div className="dropdown-menu border-0 shadow-lg" aria-labelledby="navbarDropdown">
                  <Link href="/dish-washer" className="dropdown-item">
                    Dish Washer
                  </Link>
                  <Link href="/water-heater" className="dropdown-item">
                    Water Heater
                  </Link>
                  <Link href="/oven" className="dropdown-item">
                    Oven
                  </Link>
                  <Link href="/microwave" className="dropdown-item">
                    Microwave
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item ms-2">
                <button 
                  onClick={toggleTheme} 
                  className="btn btn-sm btn-outline-info rounded-circle p-2"
                  aria-label="Toggle theme"
                >
                  <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
                </button>
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a href="tel:7550331197" className="btn rounded-pill" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #0dcaf0 100%)', color: 'white', border: 'none' }}>
                  <i className="bi bi-telephone-fill me-2"></i> Call Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 