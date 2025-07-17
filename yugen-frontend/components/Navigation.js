import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navigation({ currentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar-container')) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link href="/">
            <img src="/assets/images/yugen-logo.svg" alt="Yūgen" className="logo" />
          </Link>
        </div>
        <div className="nav-controls">
          <button 
            className="mobile-menu-toggle" 
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <Link href="/events" className={currentPage === 'events' ? 'active' : ''} onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          <li>
            <Link href="/releases" className={currentPage === 'releases' ? 'active' : ''} onClick={closeMobileMenu}>
              Releases
            </Link>
          </li>
          <li>
            <Link href="/about" className={currentPage === 'about' ? 'active' : ''} onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="mobile-theme-toggle">
            <ThemeToggle />
          </li>
        </ul>
        {/* Desktop floating theme toggle */}
        <div className="floating-theme-toggle">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
