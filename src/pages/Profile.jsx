import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Profile() {
  const { currentUser, logoutUser } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  if (!currentUser) return null;

  const joined = currentUser.joinedChallenges?.length || 0;
  const completed = currentUser.joinedChallenges?.filter((c) => c.completed).length || 0;
  const certs = currentUser.certificates?.length || 0;
  const currentXp = currentUser.xp || 100;

  // Calculate Level (Every 500 XP = 1 Level)
  const userLevel = Math.max(1, Math.floor(currentXp / 500) + 1);
  const nextLevelXp = userLevel * 500;
  const levelProgress = Math.min(100, Math.round(((currentXp % 500) / 500) * 100));

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <main className="section-padding">
      <div className="container">
        <div className="profile-layout-card">
          {/* Profile Header */}
          <div className="profile-top-bar">
            <div className="profile-avatar-large">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <div className="profile-meta-info">
              <h1>{currentUser.name}</h1>
              <p>{currentUser.email}</p>
              <span className="profile-rank-badge">
                🎖️ Level {userLevel} Elite Athlete ({currentUser.streak || 1}-Day Streak 🔥)
              </span>
            </div>
          </div>

          {/* XP Progress */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: '700', marginBottom: '0.4rem' }}>
              <span>Level {userLevel} Progress</span>
              <span style={{ color: 'var(--primary-dark)' }}>{currentXp} / {nextLevelXp} XP ({levelProgress}%)</span>
            </div>
            <div className="progress-bar-rail">
              <div className="progress-bar-fill" style={{ width: `${levelProgress}%` }}></div>
            </div>
          </div>

          {/* Numerical Stats */}
          <div className="profile-stats-grid">
            <div className="profile-stat-box">
              <h3>{joined}</h3>
              <p>Challenges Joined</p>
            </div>
            <div className="profile-stat-box">
              <h3>{completed}</h3>
              <p>Challenges Completed</p>
            </div>
            <div className="profile-stat-box">
              <h3>{certs}</h3>
              <p>Certificates Earned</p>
            </div>
          </div>

          {/* Badges Showcase */}
          <div className="badges-showcase">
            <h3>Athlete Achievement Badges</h3>
            <div className="badges-row">
              <div className="badge-achievement">
                <span>🌱</span>
                <div>
                  <div>First Step</div>
                  <small style={{ color: 'var(--text-light)', fontSize: '0.72rem' }}>Joined Platform</small>
                </div>
              </div>

              <div className={`badge-achievement ${joined >= 1 ? '' : 'badge-locked'}`}>
                <span>⚡</span>
                <div>
                  <div>Challenger</div>
                  <small style={{ color: 'var(--text-light)', fontSize: '0.72rem' }}>Enrolled in Challenge</small>
                </div>
              </div>

              <div className={`badge-achievement ${completed >= 1 ? '' : 'badge-locked'}`}>
                <span>🏆</span>
                <div>
                  <div>Victor</div>
                  <small style={{ color: 'var(--text-light)', fontSize: '0.72rem' }}>Completed 1st Challenge</small>
                </div>
              </div>

              <div className={`badge-achievement ${certs >= 2 ? '' : 'badge-locked'}`}>
                <span>👑</span>
                <div>
                  <div>Century Club</div>
                  <small style={{ color: 'var(--text-light)', fontSize: '0.72rem' }}>Multiple Certificates</small>
                </div>
              </div>
            </div>
          </div>

          {/* Logout Action */}
          <div style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Log Out of Account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
