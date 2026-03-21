import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <span className="footer-logo-text">GuiTeach</span>
            </div>
            <p className="footer-tagline">
              Private English learning tailored to your progress.
            </p>
          </div>
          <nav aria-label="Footer Navigation" className="footer-nav">
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="/homepage">
                  <div className="footer-link">
                    <span>Home</span>
                  </div>
                </a>
              </li>
              <li className="footer-link-item">
                <a href="#">
                  <div className="footer-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li className="footer-link-item">
                <a href="#">
                  <div className="footer-link">
                    <span>Methodology</span>
                  </div>
                </a>
              </li>
              <li className="footer-link-item">
                <a href="#">
                  <div className="footer-link">
                    <span>Contact</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer-socials">
            <a href="#">
              <div aria-label="Instagram" className="footer-social-icon">
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
                  <rect x="2" y="2" rx="5" ry="5" width="20" height="20"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                </svg>
              </div>
            </a>
            <a href="#">
              <div aria-label="LinkedIn" className="footer-social-icon">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                  <circle r="2" cx="4" cy="4"></circle>
                </svg>
              </div>
            </a>
            <a href="#">
              <div aria-label="Twitter" className="footer-social-icon">
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &amp;copy; 2026 GuiTeach. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#">
                <div className="footer-legal-link">
                  <span>Privacy Policy</span>
                </div>
              </a>
              <span aria-hidden="true" className="footer-separator">
                •
              </span>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Terms of Service</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-logic">
(function(){
  // Minimalist footer - functionality primarily handled by CSS/HTML
  // No complex JS required for this static, accessible footer component
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
