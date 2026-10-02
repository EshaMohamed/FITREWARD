import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Home() {
  const { currentUser, challenges, joinChallenge } = useAppContext();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content-col">
            <div className="hero-badge-pill">
              <span>🔥</span>
              <span>Join 12,000+ Active Athletes Worldwide</span>
            </div>

            <h1 className="hero-title">
              Crush Fitness Goals. <br />
              <span className="gradient-text">Earn Real Certificates.</span>
            </h1>

            <p className="hero-subtitle">
              Transform your daily workouts into verified milestones. Choose challenges, track real-time progress on any device, and celebrate your victory with official shareable certificates.
            </p>

            <div className="hero-cta-group">
              <Link to="/challenges" className="btn btn-primary btn-lg">
                Explore Challenges ⚡
              </Link>
              {!currentUser ? (
                <Link to="/login" className="btn btn-outline btn-lg">
                  Sign Up Free
                </Link>
              ) : (
                <Link to="/dashboard" className="btn btn-outline btn-lg">
                  Open Dashboard 📊
                </Link>
              )}
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <span className="hero-stat-number">100%</span>
                <span className="hero-stat-label">Free & Offline Ready</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">45,000+</span>
                <span className="hero-stat-label">Certificates Issued</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">4.9 / 5</span>
                <span className="hero-stat-label">Athlete Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Interactive Preview */}
          <div className="hero-visual-col">
            <div className="hero-visual-card">
              <div className="hero-floating-tag">
                <span>🏆</span>
                <span>Verified Achievement</span>
              </div>

              <div className="hero-card-header">
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Today's Highlight</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Popular among community</p>
                </div>
                <div className="hero-live-badge">
                  <span className="live-dot"></span>
                  Trending
                </div>
              </div>

              {/* Sample Challenge Item */}
              <div className="hero-preview-item">
                <div className="hero-preview-top">
                  <span className="badge-tag badge-cardio">🏃‍♂️ Cardio Booster</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-dark)' }}>+250 XP</span>
                </div>
                <h4 className="hero-preview-title">7 Days of Morning Cardio</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Complete 30 minutes of cardio every day for a week.
                </p>
                <div className="progress-bar-rail" style={{ height: '8px', marginBottom: '0.5rem' }}>
                  <div className="progress-bar-fill" style={{ width: '72%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-light)' }}>
                  <span>5 of 7 Days Done</span>
                  <span style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>72%</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Link to="/challenges" className="btn btn-primary btn-full">
                  Browse 6+ Challenges
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill-tag">Simple 3-Step Process</span>
            <h2 className="section-main-title">How FITREWARD Works</h2>
            <p className="section-main-desc">
              Built for seamless habit building. No complicated setup, no expensive paywalls.
            </p>
          </div>

          <div className="steps-timeline-grid">
            <div className="step-box-card">
              <div className="step-node-header">
                <div className="step-number-circle">1</div>
                <span className="step-emoji">🎯</span>
              </div>
              <h3>Choose Your Challenge</h3>
              <p>
                Pick from curated cardio, strength, HIIT, or flexibility routines tailored for all fitness levels.
              </p>
            </div>

            <div className="step-box-card">
              <div className="step-node-header">
                <div className="step-number-circle">2</div>
                <span className="step-emoji">📈</span>
              </div>
              <h3>Log Daily Progress</h3>
              <p>
                Update your active milestones right from your personal dashboard. Your data persists locally with zero lag.
              </p>
            </div>

            <div className="step-box-card">
              <div className="step-node-header">
                <div className="step-number-circle">3</div>
                <span className="step-emoji">🎖️</span>
              </div>
              <h3>Earn & Share Certificate</h3>
              <p>
                Hit 100% completion to unlock a certified, downloadable credential you can share on social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Challenges Carousel / Grid Preview */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill-tag">Featured Routines</span>
            <h2 className="section-main-title">Popular Challenges</h2>
            <p className="section-main-desc">
              Kickstart your fitness journey with our highest-rated athlete challenges.
            </p>
          </div>

          <div className="challenges-grid">
            {challenges.slice(0, 3).map((ch) => (
              <div key={ch.id} className="challenge-card-modern">
                <div>
                  <div className="challenge-top-meta">
                    <span className={`badge-tag badge-${(ch.category || 'cardio').toLowerCase()}`}>
                      {ch.category || 'Fitness'}
                    </span>
                    <span className="difficulty-pill">{ch.difficulty || 'All Levels'}</span>
                  </div>

                  <div className="challenge-main-info">
                    <div className="challenge-icon-title">
                      <span className="challenge-card-icon">{ch.icon || '⚡'}</span>
                      <div>
                        <h3>{ch.title}</h3>
                      </div>
                    </div>
                    <p>{ch.description}</p>
                  </div>

                  <div className="challenge-metrics-bar">
                    <div className="metric-item">
                      <strong>{ch.goal} {ch.type}</strong>
                      <span>Target Goal</span>
                    </div>
                    <div className="metric-item">
                      <strong>+{ch.xp || 250} XP</strong>
                      <span>Reward</span>
                    </div>
                    <div className="metric-item">
                      <strong>{ch.calories || '2,000 kcal'}</strong>
                      <span>Est. Burn</span>
                    </div>
                  </div>
                </div>

                <div className="challenge-action-row">
                  <Link to="/challenges" className="btn btn-outline btn-full">
                    View Challenge
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/challenges" className="btn btn-primary btn-lg">
              View All Challenges →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
