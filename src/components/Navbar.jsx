import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Logo from './Logo';

export default function Navbar() {
  const { currentUser } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-inner">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <Logo />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links desktop-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Home
          </NavLink>
          <NavLink to="/challenges" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Challenges
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Features
          </NavLink>

          {currentUser && (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Dashboard
              </NavLink>
              <NavLink to="/certificates" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Certificates
                {currentUser.certificates?.length > 0 && (
                  <span className="nav-badge-count">{currentUser.certificates.length}</span>
                )}
              </NavLink>
              <NavLink to="/body-goals" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Body Goals
              </NavLink>
            </>
          )}
        </div>

        {/* Right Action */}
        <div className="nav-actions desktop-nav">
          {currentUser ? (
            <NavLink to="/profile" className="user-profile-chip">
              <div className="avatar-mini">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-chip-info">
                <span className="user-chip-name">{currentUser.name}</span>
                <span className="user-chip-xp">⚡ {currentUser.xp || 100} XP</span>
              </div>
            </NavLink>
          ) : (
            <div className="guest-nav-actions">
              <Link to="/login" className="btn btn-outline btn-sm">Log In</Link>
              <Link to="/login" className="btn btn-primary btn-sm">Get Started</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
            🏠 Home
          </NavLink>
          <NavLink to="/challenges" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
            🎯 Challenges
          </NavLink>
          <NavLink to="/features" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
            ✨ Features
          </NavLink>

          {currentUser ? (
            <>
              <NavLink to="/dashboard" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                📊 Dashboard
              </NavLink>
              <NavLink to="/certificates" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                🏆 Certificates ({currentUser.certificates?.length || 0})
              </NavLink>
              <NavLink to="/body-goals" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                ⚖️ Body Goals
              </NavLink>
              <NavLink to="/profile" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}>
                👤 Profile ({currentUser.name})
              </NavLink>
            </>
          ) : (
            <div className="mobile-auth-btns">
              <Link to="/login" onClick={closeMenu} className="btn btn-primary btn-full">
                Login / Register
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
