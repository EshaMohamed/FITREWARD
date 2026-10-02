import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand-col">
          <Logo />
          <p className="footer-tagline">
            Empowering everyday fitness enthusiasts to build lasting habits, hit milestone goals, and unlock verified digital achievement certificates.
          </p>
          <div className="footer-socials">
            <span className="social-pill">🔥 100% Free</span>
            <span className="social-pill">📱 Offline & Local Sync</span>
            <span className="social-pill">🎖️ Verified Badges</span>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/challenges">All Challenges</Link>
          <Link to="/features">Core Features</Link>
          <Link to="/dashboard">Athlete Dashboard</Link>
        </div>

        <div className="footer-links-col">
          <h4>Certifications</h4>
          <Link to="/certificates">My Certificates</Link>
          <Link to="/profile">Achievement Badges</Link>
          <Link to="/login">Sign In / Register</Link>
        </div>

        <div className="footer-newsletter-col">
          <h4>Daily Fitness Boost</h4>
          <p>Get motivated with weekly challenge drops and habit building insights.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" aria-label="Email subscription" />
            <button className="btn btn-primary btn-sm" onClick={() => alert('Thanks for subscribing to workout drops!')}>Join</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} FITREWARD Inc. All rights reserved.</p>
          <div className="footer-bottom-tags">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Certificate Verification</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
