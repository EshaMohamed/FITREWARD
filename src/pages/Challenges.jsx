import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import {
  DURATIONS,
  DURATION_META,
  DAYS_CATEGORIES,
  CAT_COLORS,
  DAYS_CHALLENGES
} from '../data/challengesData';

export default function Challenges() {
  const { currentUser, joinChallenge } = useAppContext();

  // Days-challenge state
  const [selectedDuration, setSelectedDuration] = useState(7);
  const [selectedCategory, setSelectedCategory] = useState('Cardio');
  // Default first week expanded so user immediately sees day-by-day instructions
  const [expandedTask, setExpandedTask] = useState(0);

  const handleJoin = (challenge) => {
    joinChallenge(challenge);
  };

  /* ── filtered data ── */
  const activeDaysChallenge = DAYS_CHALLENGES.find(
    (c) => c.duration === selectedDuration && c.category === selectedCategory
  );

  return (
    <main className="section-padding">
      <div className="container">

        {/* ── Page Header ── */}
        <div className="section-header-center" style={{ marginBottom: '2.5rem' }}>
          <span className="section-pill-tag">Explore Catalog</span>
          <h1 className="section-main-title">Fitness Challenges</h1>
          <p className="section-main-desc">
            Pick a routine that matches your aspirations, track your milestones daily,
            and earn certified rewards.
          </p>
        </div>

        {/* ═══════════════════════════════════
            DAYS CHALLENGE VIEW
        ═══════════════════════════════════ */}
        <div className="ch-days-view">

          {/* Duration Selector */}
          <div className="ch-duration-row">
            {DURATIONS.map((d) => (
              <button
                key={d}
                className={`ch-duration-btn ${selectedDuration === d ? 'active' : ''}`}
                onClick={() => { setSelectedDuration(d); setExpandedTask(0); }}
              >
                <span className="ch-dur-emoji">{DURATION_META[d].emoji}</span>
                <span className="ch-dur-days">{d} Days</span>
              </button>
            ))}
          </div>

          {/* Duration Info Banner */}
          <div className="ch-duration-banner">
            <div>
              <div className="ch-dur-banner-title">{DURATION_META[selectedDuration].label}</div>
              <div className="ch-dur-banner-sub">{DURATION_META[selectedDuration].sub}</div>
            </div>
            <span className="ch-dur-badge">{selectedDuration} Days</span>
          </div>

          {/* Category Selector */}
          <div className="ch-category-row">
            <span className="ch-cat-label">Choose Category:</span>
            <div className="ch-cat-pills">
              {DAYS_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`ch-cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                  style={selectedCategory === cat ? {
                    background: CAT_COLORS[cat].accent,
                    borderColor: CAT_COLORS[cat].accent,
                    color: '#fff'
                  } : {}}
                  onClick={() => { setSelectedCategory(cat); setExpandedTask(0); }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Challenge Detail Card */}
          {activeDaysChallenge && (
            <div className="ch-detail-card">
              <div className="ch-detail-header">
                <div className="ch-detail-icon">{activeDaysChallenge.icon}</div>
                <div className="ch-detail-title-block">
                  <div
                    className="ch-detail-cat-tag"
                    style={{
                      background: CAT_COLORS[activeDaysChallenge.category].bg,
                      color: CAT_COLORS[activeDaysChallenge.category].color
                    }}
                  >
                    {activeDaysChallenge.category}
                  </div>
                  <h2 className="ch-detail-title">{activeDaysChallenge.title}</h2>
                  <p className="ch-detail-desc">{activeDaysChallenge.description}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="ch-detail-metrics">
                <div className="ch-metric">
                  <strong>{activeDaysChallenge.duration} Days</strong>
                  <span>Duration</span>
                </div>
                <div className="ch-metric">
                  <strong>+{activeDaysChallenge.xp} XP</strong>
                  <span>Reward</span>
                </div>
                <div className="ch-metric">
                  <strong>{activeDaysChallenge.difficulty}</strong>
                  <span>Difficulty</span>
                </div>
                <div className="ch-metric">
                  <strong>{activeDaysChallenge.participants.toLocaleString()}+</strong>
                  <span>Athletes</span>
                </div>
              </div>

              {/* Task List / Day-by-day schedule */}
              <div className="ch-task-section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 className="ch-task-title" style={{ margin: 0 }}>📋 Day-by-Day Workout Schedule</h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    💡 Click any week / phase to view every day's detailed workout
                  </span>
                </div>

                <div className="ch-task-list">
                  {activeDaysChallenge.tasks.map((t, i) => {
                    const isExpanded = expandedTask === i;
                    return (
                      <div
                        key={i}
                        className={`ch-task-item ${isExpanded ? 'expanded' : ''}`}
                        onClick={() => setExpandedTask(isExpanded ? null : i)}
                      >
                        <div className="ch-task-row">
                          <div
                            className="ch-task-day-badge"
                            style={{
                              background: CAT_COLORS[activeDaysChallenge.category].bg,
                              color: CAT_COLORS[activeDaysChallenge.category].color
                            }}
                          >
                            {t.day}
                          </div>
                          <div className="ch-task-text">
                            <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.92rem' }}>
                              {t.task}
                            </div>
                            {t.summary && (
                              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                                {t.summary}
                              </div>
                            )}
                          </div>
                          <div className="ch-task-arrow" style={{ fontWeight: 700, fontSize: '0.75rem', color: isExpanded ? 'var(--primary)' : 'var(--text-light)' }}>
                            {isExpanded ? '▲ Hide Days' : '▼ View All Days'}
                          </div>
                        </div>

                        {/* Detailed Daily Breakdown */}
                        {isExpanded && t.dailyBreakdown && (
                          <div className="ch-task-expanded-content" onClick={(e) => e.stopPropagation()}>
                            <div className="ch-daily-grid">
                              {t.dailyBreakdown.map((item, idx) => (
                                <div key={idx} className="ch-daily-sub-item">
                                  <span
                                    className="ch-daily-sub-badge"
                                    style={{ background: CAT_COLORS[activeDaysChallenge.category].accent }}
                                  >
                                    {item.day}
                                  </span>
                                  <div className="ch-daily-sub-desc">
                                    <span className="ch-daily-sub-title">{item.workout}</span>
                                    {item.detail && (
                                      <span className="ch-daily-sub-detail">{item.detail}</span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Join Button */}
              <div className="ch-detail-action" style={{ marginTop: '2rem' }}>
                {!currentUser ? (
                  <Link to="/login" className="btn btn-primary btn-lg">
                    Login to Join Challenge
                  </Link>
                ) : (
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => handleJoin(activeDaysChallenge)}
                  >
                    Join {activeDaysChallenge.duration}-Day {activeDaysChallenge.category} Challenge ⚡
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
