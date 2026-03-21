import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <Link to="/">
            <div className="navigation-logo-link">
              <span className="navigation-brand section-title">GuiTeach</span>
            </div>
          </Link>
          <div className="navigation-desktop-menu">
            <div className="navigation-links">
              <Link to="/">
                <div className="navigation-link">
                  <span>Home</span>
                </div>
              </Link>
              <Link to="/">
                <div className="navigation-link">
                  <span>About</span>
                </div>
              </Link>
              <Link to="/">
                <div className="navigation-link">
                  <span>Services</span>
                </div>
              </Link>
            </div>
            <div className="navigation-actions">
              <Link to="/">
                <div className="navigation-login-btn btn-primary btn-sm btn">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <circle r="3" cx="12" cy="10"></circle>
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                  </svg>
                  <span>Login</span>
                </div>
              </Link>
            </div>
          </div>
          <button
            id="navToggle"
            aria-label="Open Menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              fill="none"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobileOverlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <Link to="/">
            <div className="navigation-logo-link">
              <span className="navigation-brand section-title">GuiTeach</span>
            </div>
          </Link>
          <button
            id="navClose"
            aria-label="Close Menu"
            className="navigation-mobile-close"
          >
            <svg
              fill="none"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <div className="navigation-overlay-links">
            <Link to="/">
              <div className="navigation-overlay-link">
                <span>Home</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-overlay-link">
                <span>About</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-overlay-link">
                <span>Services</span>
              </div>
            </Link>
          </div>
          <div className="navigation-overlay-actions">
            <Link to="/">
              <div className="btn-primary btn btn-lg navigation-overlay-btn">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <circle r="3" cx="12" cy="10"></circle>
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                </svg>
                <span>Student Login</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const mobileOverlay = document.getElementById("mobileOverlay")

  const openMenu = () => {
    mobileOverlay.style.display = "flex"
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.style.display = "none"
    navToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMenu)
  navClose.addEventListener("click", closeMenu)

  const mobileLinks = mobileOverlay.querySelectorAll(".navigation-overlay-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && mobileOverlay.style.display === "flex") {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
