import { studioInfo } from '../siteInfo.js'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <img className="footer-logo" src="/images/logo.png" alt="Guru Studio logo" />
      <p className="footer-tagline">{studioInfo.tagline}</p>

      <div className="footer-columns">
        <div className="footer-column">
          <p className="footer-title">Explore</p>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <p className="footer-title">Studio</p>
          <p>{studioInfo.address}</p>
          <p>{studioInfo.phoneDisplay}</p>
          <p>{studioInfo.email}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 {studioInfo.name}. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
