import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useAppContext } from '../context/AppContext';
import Logo from '../components/Logo';

export default function Login() {
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  
  // Controlled inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Error & Feedback state
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser, loginUser, registerUser } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, redirect to Home page
    if (currentUser) {
      navigate('/');
    }
    const savedEmail = localStorage.getItem('fitness_remember_email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, [currentUser, navigate]);

  // 1) Handle Sign In
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      setError('Please enter both your email address and password.');
      return;
    }

    setIsLoading(true);

    let authSuccess = false;

    // A. Try direct Supabase Auth Sign In
    if (supabase) {
      try {
        const { data, error: authError } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password: cleanPassword
        });

        if (!authError && data?.user) {
          authSuccess = true;
        }
      } catch (err) {
        console.warn('Supabase signIn network check:', err);
      }
    }

    // B. Also check App Context / Registered users fallback
    const result = await loginUser(cleanEmail, cleanPassword, rememberMe);
    if (result.success || authSuccess) {
      if (rememberMe) {
        localStorage.setItem('fitness_remember_email', cleanEmail);
      } else {
        localStorage.removeItem('fitness_remember_email');
      }
      setIsLoading(false);
      // 3) Redirect to Home page ("/")
      navigate('/');
      return;
    }

    setIsLoading(false);
    // User friendly and clear error explanation
    setError('Invalid login credentials. If you haven\'t registered yet, please click "Sign Up" above to create your account first.');
  };

  // 2) Handle Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();
    const cleanConfirm = confirmPassword.trim();

    if (!cleanName || !cleanEmail || !cleanPassword || !cleanConfirm) {
      setError('Please fill in all registration fields.');
      return;
    }

    if (cleanPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (cleanPassword !== cleanConfirm) {
      setError('Passwords do not match! Please make sure both password fields are identical.');
      return;
    }

    setIsLoading(true);

    // A. Direct Supabase Auth Sign Up
    if (supabase) {
      try {
        const { data, error: authError } = await supabase.auth.signUp({
          email: cleanEmail,
          password: cleanPassword,
          options: {
            data: { name: cleanName }
          }
        });

        if (authError && !authError.message.includes('already registered')) {
          console.warn('Supabase signUp note:', authError.message);
        }
      } catch (err) {
        console.warn('Supabase signUp notice:', err);
      }
    }

    // B. Register in App Context
    const regResult = await registerUser(cleanEmail, cleanPassword, cleanName);
    setIsLoading(false);

    if (regResult.success) {
      setSuccessMsg(`Account registered successfully for ${cleanName}! Now enter your password and click "Sign In" below.`);
      setIsLoginTab(true); // Switch to Sign In tab so user can immediately sign in
      setPassword(cleanPassword);
      setConfirmPassword('');
    } else {
      setError(regResult.message || 'Registration error. Please try again.');
    }
  };

  return (
    <main className="auth-split-wrapper">
      <div className="auth-split-card">
        {/* Left Side: Professional Fitness Feature Showcase Panel */}
        <div className="auth-brand-panel">
          <div className="auth-panel-glow"></div>
          
          <div className="auth-panel-top">
            <div className="auth-panel-badge">
              <span>⚡</span>
              <span>Supabase Cloud Connected</span>
            </div>
            <h2 className="auth-panel-title">
              Turn Daily Sweat <br />
              <span className="auth-text-gradient">Into Verified Badges.</span>
            </h2>
            <p className="auth-panel-desc">
              Track your milestones from day 0, complete workouts, and earn verifiable achievement credentials.
            </p>
          </div>

          <div className="auth-panel-features">
            <div className="auth-feature-pill">
              <span className="pill-icon">🎯</span>
              <div>
                <strong>Milestones Start at 0%</strong>
                <p>Track clean daily habits starting fresh from zero.</p>
              </div>
            </div>

            <div className="auth-feature-pill">
              <span className="pill-icon">🏆</span>
              <div>
                <strong>Official Certificates</strong>
                <p>Download certified high-resolution credentials upon 100% completion.</p>
              </div>
            </div>

            <div className="auth-feature-pill">
              <span className="pill-icon">☁️</span>
              <div>
                <strong>Supabase Authentication</strong>
                <p>Secure cloud database storage and instant account sync.</p>
              </div>
            </div>
          </div>

          <div className="auth-panel-footer">
            <div className="athlete-avatar-stack">
              <div className="stack-avatar bg-1">J</div>
              <div className="stack-avatar bg-2">M</div>
              <div className="stack-avatar bg-3">A</div>
              <div className="stack-avatar bg-4">+12k</div>
            </div>
            <span>Athletes registered & active worldwide</span>
          </div>
        </div>

        {/* Right Side: Professional Authentication Form */}
        <div className="auth-form-panel">
          <div className="auth-form-header">
            <Logo size="large" />
            <p className="auth-header-tagline">
              {isLoginTab 
                ? 'Sign in to access your workout challenges & certificates' 
                : 'Create your official athlete account stored in Supabase'}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="auth-tab-pill-container">
            <button
              type="button"
              className={`auth-tab-pill ${isLoginTab ? 'active' : ''}`}
              onClick={() => { setIsLoginTab(true); setError(''); setSuccessMsg(''); }}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`auth-tab-pill ${!isLoginTab ? 'active' : ''}`}
              onClick={() => { setIsLoginTab(false); setError(''); setSuccessMsg(''); }}
            >
              Sign Up
            </button>
          </div>

          {/* Success Feedback Alert */}
          {successMsg && (
            <div style={{ background: '#ecfdf5', color: '#047857', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem', fontWeight: '600', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>✅</span>
              <span>{successMsg}</span>
            </div>
          )}

          {/* Error Feedback Alert */}
          {error && (
            <div className="auth-error-alert animate-shake" style={{ marginBottom: '1.25rem' }}>
              <span>⚠️</span>
              <div style={{ flex: 1 }}>
                <div>{error}</div>
                {isLoginTab && error.includes('Sign Up') && (
                  <button
                    type="button"
                    style={{ background: 'transparent', border: 'none', color: '#991b1b', textDecoration: 'underline', fontWeight: '800', cursor: 'pointer', marginTop: '0.3rem', display: 'block', fontSize: '0.84rem' }}
                    onClick={() => { setIsLoginTab(false); setError(''); }}
                  >
                    👉 Click here to Switch to Sign Up
                  </button>
                )}
              </div>
            </div>
          )}

          {isLoginTab ? (
            /* ================= SIGN IN FORM ================= */
            <form onSubmit={handleSignIn} className="auth-inputs-form animate-fade-in">
              <div className="auth-field-wrapper">
                <label htmlFor="signin-email">Email Address</label>
                <div className="auth-input-container">
                  <span className="input-prefix-icon">✉️</span>
                  <input
                    type="email"
                    id="signin-email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="auth-field-wrapper">
                <label htmlFor="signin-password">Password</label>
                <div className="auth-input-container">
                  <span className="input-prefix-icon">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="signin-password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {/* Action row: Left = Remember Me checkbox, Right = Sign Up link */}
              <div className="auth-actions-row">
                <label className="remember-me-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="checkbox-custom"
                  />
                  <span>Remember me</span>
                </label>

                <div className="auth-right-link">
                  <span>Don't have an account? </span>
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => { setIsLoginTab(false); setError(''); setSuccessMsg(''); }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-full btn-lg auth-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In 🚀'}
              </button>
            </form>
          ) : (
            /* ================= SIGN UP FORM ================= */
            <form onSubmit={handleSignUp} className="auth-inputs-form animate-fade-in">
              <div className="auth-field-wrapper">
                <label htmlFor="signup-name">Full Name</label>
                <div className="auth-input-container">
                  <span className="input-prefix-icon">👤</span>
                  <input
                    type="text"
                    id="signup-name"
                    required
                    placeholder="e.g. Esha Mohamed"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                </div>
              </div>

              <div className="auth-field-wrapper">
                <label htmlFor="signup-email">Email Address</label>
                <div className="auth-input-container">
                  <span className="input-prefix-icon">✉️</span>
                  <input
                    type="email"
                    id="signup-email"
                    required
                    placeholder="e.g. esha12@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="auth-field-wrapper">
                <label htmlFor="signup-password">Password (min 6 chars)</label>
                <div className="auth-input-container">
                  <span className="input-prefix-icon">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="signup-password"
                    required
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              <div className="auth-field-wrapper">
                <label htmlFor="signup-confirm-password">Confirm Password</label>
                <div className="auth-input-container">
                  <span className="input-prefix-icon">🔒</span>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="signup-confirm-password"
                    required
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {/* Action row: Left = Terms check, Right = Already registered link */}
              <div className="auth-actions-row">
                <label className="remember-me-label">
                  <input
                    type="checkbox"
                    defaultChecked
                    required
                    className="checkbox-custom"
                  />
                  <span>I agree to terms (0% Start)</span>
                </label>

                <div className="auth-right-link">
                  <span>Already registered? </span>
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => { setIsLoginTab(true); setError(''); setSuccessMsg(''); }}
                  >
                    Sign In
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-full btn-lg auth-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Sign Up ⚡'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
