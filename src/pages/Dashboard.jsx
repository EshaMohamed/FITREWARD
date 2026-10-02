import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const getTodayDateString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export default function Dashboard() {
  const { currentUser, updateProgress } = useAppContext();
  const navigate = useNavigate();
  const todayStr = getTodayDateString();

  useEffect(() => {
    if (!currentUser) {
      const timer = setTimeout(() => {
        if (!currentUser) {
          navigate('/login');
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return (
      <main className="section-padding">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <div className="empty-state-box">
            <div className="empty-state-icon">🔒</div>
            <h2>Account Access Required</h2>
            <p>Please log in or create a free account to view your athlete dashboard and active challenges.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/login" className="btn btn-primary btn-lg">
                Log In to Dashboard 🚀
              </Link>
              <Link to="/challenges" className="btn btn-outline btn-lg">
                Explore Challenges ⚡
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const activeChallenges = (currentUser.joinedChallenges || []).map((c) => ({
    ...c,
    goal: c.goal || c.duration || 7,
    type: c.type || 'days',
    progress: typeof c.progress === 'number' ? c.progress : 0,
    category: c.category || 'Cardio',
    icon: c.icon || '🏃‍♂️'
  }));

  const handleLogToday = (id) => {
    const challenge = activeChallenges.find((c) => c.id === id);
    if (!challenge) return;

    if (challenge.lastLogDate === todayStr) {
      alert("⚠️ You have already completed today's task! Only 1 task per day can be completed. Please come back tomorrow!");
      return;
    }

    updateProgress(id, (challenge.progress || 0) + 1);
  };

  return (
    <main className="section-padding">
      <div className="container">
        {/* Dashboard Top Banner */}
        <div className="dashboard-hero-banner">
          <div className="dash-welcome-text">
            <span className="section-pill-tag">Athlete Headquarters</span>
            <h1>Welcome back, {currentUser.name || 'Athlete'}!</h1>
            <p>Keep your momentum alive. Consistent daily discipline is what builds real champions.</p>
          </div>

          <div className="dash-summary-chips">
            <div className="stat-chip">
              <span className="stat-chip-icon">⚡</span>
              <div>
                <div className="stat-chip-val">{currentUser.xp || 100} XP</div>
                <div className="stat-chip-lbl">Total Score</div>
              </div>
            </div>

            <div className="stat-chip">
              <span className="stat-chip-icon">🔥</span>
              <div>
                <div className="stat-chip-val">{currentUser.streak || 1} Days</div>
                <div className="stat-chip-lbl">Daily Streak</div>
              </div>
            </div>

            <div className="stat-chip">
              <span className="stat-chip-icon">🏆</span>
              <div>
                <div className="stat-chip-val">{currentUser.certificates?.length || 0}</div>
                <div className="stat-chip-lbl">Certificates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        {activeChallenges.length === 0 ? (
          <div className="empty-state-box">
            <div className="empty-state-icon">🚀</div>
            <h2>No Active Challenges Yet</h2>
            <p>Select your first fitness challenge from our catalog to start building your streak and unlocking rewards!</p>
            <Link to="/challenges" className="btn btn-primary btn-lg">
              Explore Challenges
            </Link>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', margin: 0 }}>
                  Your Active Challenges ({activeChallenges.length})
                </h2>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Strict limit: 1 task / day per challenge to ensure natural, healthy recovery.
                </span>
              </div>
              <Link to="/challenges" className="btn btn-outline btn-sm">
                + Join Another Challenge
              </Link>
            </div>

            <div className="dashboard-grid">
              {activeChallenges.map((challenge) => {
                const goal = challenge.goal || 7;
                const progress = challenge.progress || 0;
                const type = challenge.type || 'days';
                const percent = Math.min(100, Math.round((progress / goal) * 100)) || 0;
                const remaining = Math.max(0, goal - progress);
                const isLoggedToday = challenge.lastLogDate === todayStr;

                return (
                  <div key={challenge.id} className="dash-challenge-card">
                    <div className="dash-card-top">
                      <span className={`badge-tag badge-${(challenge.category || 'cardio').toLowerCase()}`}>
                        {challenge.icon || '🎯'} {challenge.category || 'Fitness'}
                      </span>
                      {challenge.completed ? (
                        <span className="badge-tag" style={{ background: '#ecfdf5', color: '#047857' }}>
                          ✅ Completed
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                          {remaining} {type} left
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>{challenge.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      {challenge.description}
                    </p>

                    <div className="progress-track-wrapper">
                      <div className="progress-info-row">
                        <span>Milestone Progress</span>
                        <span style={{ color: challenge.completed ? 'var(--primary-dark)' : 'var(--text-main)' }}>
                          {progress} / {goal} {type} ({percent}%)
                        </span>
                      </div>
                      <div className="progress-bar-rail">
                        <div
                          className={`progress-bar-fill ${challenge.completed ? 'completed-fill' : ''}`}
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>

                    {challenge.completed ? (
                      <div className="completed-celebration-box">
                        <p>🎉 Challenge Mastered! Official Certificate issued.</p>
                        <Link to="/certificates" className="btn btn-primary btn-sm btn-full">
                          View & Download Certificate 🏆
                        </Link>
                      </div>
                    ) : isLoggedToday ? (
                      <div className="daily-lock-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                          <span className="daily-lock-status-badge">
                            <span>✅</span> Today's Task Complete
                          </span>
                          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--primary-dark)' }}>
                            Day {progress} of {goal}
                          </span>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
                          🔒 <strong>Daily Limit Reached (1 Task/Day):</strong> You have completed today's workout. <strong>Day {progress + 1}</strong> will unlock tomorrow!
                        </p>
                      </div>
                    ) : (
                      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                        <button
                          type="button"
                          className="btn btn-primary btn-full"
                          onClick={() => handleLogToday(challenge.id)}
                        >
                          ⚡ Mark Day {progress + 1} Completed for Today
                        </button>
                        <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                          📌 Max 1 task per calendar day
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
