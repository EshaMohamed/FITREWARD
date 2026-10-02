import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    q: 'Do I need to pay or provide a credit card to get certificates?',
    a: 'No, FITREWARD is 100% free! You can join any fitness challenge, log daily progress, and generate verified achievement certificates without paying a cent.'
  },
  {
    q: 'Will my workout data be saved if I close or refresh my browser?',
    a: 'Yes! All user profiles, active challenges, and certificate credentials are saved securely in your browser’s high-speed local storage, ensuring fast offline-friendly access across sessions.'
  },
  {
    q: 'How do I download and share my certificates?',
    a: 'Once you hit 100% progress on a challenge, your official certificate is automatically unlocked in the Certificates tab. You can download it as a high-resolution PNG image or share the verified link instantly.'
  },
  {
    q: 'Can I do multiple challenges simultaneously?',
    a: 'Absolutely! You can enroll in as many cardio, strength, HIIT, and flexibility challenges as you want and log them all from your personal dashboard.'
  }
];

export default function Features() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header-center">
          <span className="section-pill-tag">Why Athletes Love FITREWARD</span>
          <h1 className="section-main-title">Powerful Fitness Features</h1>
          <p className="section-main-desc">
            Engineered to remove friction, build discipline, and celebrate every physical achievement.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="feature-cards-grid" style={{ marginBottom: '5rem' }}>
          <div className="feature-card-modern">
            <div className="feature-icon-bubble">⚡</div>
            <h3>Instant Offline & Local Sync</h3>
            <p>
              Log reps and track progress instantly without any slow loading screens or server timeouts. Your progress is synced in real-time.
            </p>
          </div>

          <div className="feature-card-modern">
            <div className="feature-icon-bubble">🏅</div>
            <h3>Official Luxury Certificates</h3>
            <p>
              Every completed goal automatically issues a unique, authenticated certificate with verified serial IDs, gold seals, and your custom name.
            </p>
          </div>

          <div className="feature-card-modern">
            <div className="feature-icon-bubble">🎯</div>
            <h3>Diverse Challenge Catalog</h3>
            <p>
              From 7-Day Morning Cardio to 1,000 Push-ups, HIIT sprints, and yoga mobility—tailored routines for beginners to elite athletes.
            </p>
          </div>

          <div className="feature-card-modern">
            <div className="feature-icon-bubble">🔥</div>
            <h3>Streak & XP Progression</h3>
            <p>
              Gain experience points (XP) with every logged session, maintain daily active streaks, and watch your athlete level rise over time.
            </p>
          </div>

          <div className="feature-card-modern">
            <div className="feature-icon-bubble">📱</div>
            <h3>Responsive On Any Screen</h3>
            <p>
              Engineered with clean modern layouts that look crisp on desktop computers, tablets, and mobile smartphones.
            </p>
          </div>

          <div className="feature-card-modern">
            <div className="feature-icon-bubble">🔒</div>
            <h3>Privacy First</h3>
            <p>
              No intrusive ads, no third-party tracking scripts, and no spam emails. Your health and journey remain entirely yours.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="section-header-center" style={{ marginBottom: '2.5rem' }}>
          <span className="section-pill-tag">Have Questions?</span>
          <h2 className="section-main-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span>{faq.q}</span>
                <span>{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="faq-answer animate-fade-in">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{ textAlign: 'center', marginTop: '4.5rem' }}>
          <Link to="/challenges" className="btn btn-primary btn-lg">
            Start Your First Challenge Today ⚡
          </Link>
        </div>
      </div>
    </main>
  );
}
