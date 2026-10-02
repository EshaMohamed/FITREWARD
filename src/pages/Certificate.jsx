import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import html2canvas from 'html2canvas';

export default function Certificate() {
  const { currentUser, showToast } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  if (!currentUser) return null;

  const certificates = currentUser.certificates || [];

  const handleDownload = (elementId, filenamePrefix) => {
    const element = document.getElementById(elementId);
    if (element) {
      html2canvas(element, { scale: 2.5, useCORS: true, backgroundColor: '#ffffff' }).then((canvas) => {
        const link = document.createElement('a');
        link.download = `${filenamePrefix}_Official_Certificate.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        if (showToast) showToast('High-resolution certificate downloaded!', 'success');
      });
    }
  };

  const handleShare = (cert) => {
    if (navigator.share) {
      navigator.share({
        title: `My FITREWARD Certificate: ${cert.challengeTitle}`,
        text: `I just completed "${cert.challengeTitle}" on FITREWARD and earned an official verified achievement certificate! 🏆`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      if (showToast) showToast('Certificate link copied to clipboard!', 'info');
      else alert('Certificate link copied to clipboard!');
    }
  };

  return (
    <main className="section-padding">
      <div className="container">
        <div className="section-header-center">
          <span className="section-pill-tag">Verified Credentials</span>
          <h1 className="section-main-title">Achievement Certificates</h1>
          <p className="section-main-desc">
            Official proof of your dedication, discipline, and milestones. Download in high-resolution or share with your network.
          </p>
        </div>

        {certificates.length === 0 ? (
          <div className="empty-state-box">
            <div className="empty-state-icon">🎖️</div>
            <h2>No Certificates Earned Yet</h2>
            <p>
              Complete 100% of any active challenge on your dashboard to unlock your official verified certificate!
            </p>
            <Link to="/dashboard" className="btn btn-primary btn-lg">
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div className="cert-gallery-container">
            {certificates.map((cert) => (
              <div key={cert.id} className="certificate-card-frame">
                {/* Official Certificate Visual Artwork */}
                <div className="certificate-official-art" id={`cert-${cert.id}`}>
                  {/* Ornate Corner Accents */}
                  <div className="cert-corner-ornament corner-tl"></div>
                  <div className="cert-corner-ornament corner-tr"></div>
                  <div className="cert-corner-ornament corner-bl"></div>
                  <div className="cert-corner-ornament corner-br"></div>

                  <div className="cert-top-emblem">
                    <span style={{ fontSize: '2.5rem' }}>🏅</span>
                  </div>

                  <h2 className="cert-main-headline">Certificate of Achievement</h2>
                  <div className="cert-sub-headline">FITREWARD ATHLETIC EXCELLENCE & DISCIPLINE</div>

                  <p className="cert-certify-text">This official certificate is proudly presented to</p>
                  <div className="cert-recipient-name">{currentUser.name}</div>

                  <p className="cert-accomplish-text">
                    for demonstrating exceptional grit and successfully mastering the official challenge
                  </p>

                  <div className="cert-challenge-highlight">"{cert.challengeTitle}"</div>

                  {/* Signatures & Seal */}
                  <div className="cert-bottom-signatures">
                    <div className="cert-meta-block">
                      <strong>Issue Date:</strong>
                      <span>{new Date(cert.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <br />
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Verified Cryptographic Proof</span>
                    </div>

                    <div className="cert-gold-seal">
                      <span className="seal-icon">★</span>
                      <span className="seal-text">VERIFIED</span>
                      <span className="seal-icon">★</span>
                    </div>

                    <div className="cert-sign-block">
                      <span className="signature-line">FitReward Board</span>
                      <strong>Credential ID:</strong>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>{cert.id}</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Action Toolbar */}
                <div className="cert-toolbar-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleDownload(`cert-${cert.id}`, cert.challengeTitle.replace(/\s+/g, '_'))}
                  >
                    📥 Download High-Res (PNG)
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => handleShare(cert)}
                  >
                    🔗 Share Credential
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
