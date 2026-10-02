import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import gsap from 'gsap';
import { useAppContext } from '../context/AppContext';
import { Navigate } from 'react-router-dom';

Chart.register(...registerables);

export default function BodyGoals() {
  const { currentUser, showToast } = useAppContext();
  
  // State for the user's setup goal
  const [goalSettings, setGoalSettings] = useState(() => {
    const saved = localStorage.getItem('fitreward_bodyGoals');
    return saved ? JSON.parse(saved) : null;
  });

  // State for weight history
  const [weightHistory, setWeightHistory] = useState(() => {
    const saved = localStorage.getItem('fitreward_weightHistory');
    return saved ? JSON.parse(saved) : [];
  });

  // Form states
  const [isEditingGoal, setIsEditingGoal] = useState(!goalSettings);
  const [formData, setFormData] = useState(
    goalSettings || {
      height: '',
      age: '',
      currentWeight: '',
      targetWeight: '',
      goalType: 'loss' // loss, gain, maintain
    }
  );

  // New weight entry state
  const [newWeight, setNewWeight] = useState('');
  const [newWeightDate, setNewWeightDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [formError, setFormError] = useState('');

  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const pageRef = useRef(null);

  // Initial animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.body-goals-header',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.bg-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [isEditingGoal]);

  // Chart setup and update
  useEffect(() => {
    if (isEditingGoal || !goalSettings || weightHistory.length === 0) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;
    
    // Sort history by date
    const sortedHistory = [...weightHistory].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    const labels = sortedHistory.map(entry => entry.date);
    const dataPoints = sortedHistory.map(entry => entry.weight);
    
    // Create target line data
    const targetData = new Array(labels.length).fill(goalSettings.targetWeight);

    // Get CSS variables for chart colors
    const rootStyles = getComputedStyle(document.documentElement);
    const primaryColor = rootStyles.getPropertyValue('--primary').trim() || '#10b981';
    const accentColor = rootStyles.getPropertyValue('--accent').trim() || '#3b82f6';
    const textColor = rootStyles.getPropertyValue('--text-main').trim() || '#1e293b';
    const textMutedColor = rootStyles.getPropertyValue('--text-muted').trim() || '#64748b';

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Weight (kg)',
            data: dataPoints,
            borderColor: primaryColor,
            backgroundColor: `rgba(16, 185, 129, 0.1)`,
            tension: 0.3,
            fill: true,
            pointBackgroundColor: '#fff',
            pointBorderColor: primaryColor,
            pointRadius: 4,
            pointHoverRadius: 6
          },
          {
            label: 'Target Weight',
            data: targetData,
            borderColor: accentColor,
            borderDash: [5, 5],
            borderWidth: 2,
            pointRadius: 0,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: textColor }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            ticks: { color: textMutedColor }
          },
          y: {
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            ticks: { color: textMutedColor }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [goalSettings, weightHistory, isEditingGoal]);

  const handleGoalSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    const height = parseFloat(formData.height);
    const weight = parseFloat(formData.currentWeight);
    const target = parseFloat(formData.targetWeight);
    const age = parseInt(formData.age);

    if (isNaN(height) || height <= 0) return setFormError('Height must be a positive number.');
    if (isNaN(weight) || weight <= 0) return setFormError('Current weight must be a positive number.');
    if (isNaN(target) || target <= 0) return setFormError('Target weight must be a positive number.');
    if (isNaN(age) || age <= 0) return setFormError('Age must be a valid positive number.');

    if (formData.goalType === 'loss' && target >= weight) {
      return setFormError('For weight loss, target weight must be below current weight.');
    }
    if (formData.goalType === 'gain' && target <= weight) {
      return setFormError('For weight gain, target weight must be above current weight.');
    }
    if (formData.goalType === 'maintain' && target !== weight) {
      return setFormError('For maintenance, target weight should match your current starting weight.');
    }

    const setupData = {
      height,
      age,
      startingWeight: weight,
      currentWeight: weight,
      targetWeight: target,
      goalType: formData.goalType,
      startDate: new Date().toISOString().split('T')[0]
    };

    setGoalSettings(setupData);
    localStorage.setItem('fitreward_bodyGoals', JSON.stringify(setupData));
    
    // Set initial history
    const newHistory = [{
      date: setupData.startDate,
      weight: setupData.startingWeight
    }];
    setWeightHistory(newHistory);
    localStorage.setItem('fitreward_weightHistory', JSON.stringify(newHistory));

    setIsEditingGoal(false);
    showToast('Goal saved successfully!', 'success');
  };

  const handleAddWeight = (e) => {
    e.preventDefault();
    setFormError('');
    
    const weightVal = parseFloat(newWeight);
    if (isNaN(weightVal) || weightVal <= 0) {
      return setFormError('Please enter a valid weight.');
    }
    
    const entryDate = new Date(newWeightDate);
    const startDate = new Date(goalSettings.startDate);
    if (entryDate < startDate) {
      return setFormError('Date cannot be before your goal start date.');
    }

    const newEntry = {
      date: newWeightDate,
      weight: weightVal
    };

    const updatedHistory = weightHistory.filter(item => item.date !== newWeightDate);
    updatedHistory.push(newEntry);
    updatedHistory.sort((a, b) => new Date(a.date) - new Date(b.date));

    setWeightHistory(updatedHistory);
    localStorage.setItem('fitreward_weightHistory', JSON.stringify(updatedHistory));

    const latestWeight = updatedHistory[updatedHistory.length - 1].weight;
    const updatedGoals = { ...goalSettings, currentWeight: latestWeight };
    setGoalSettings(updatedGoals);
    localStorage.setItem('fitreward_bodyGoals', JSON.stringify(updatedGoals));

    setNewWeight('');
    showToast('Weight logged successfully!', 'success');
  };

  const calculateBMI = (heightCm, weightKg) => {
    if (!heightCm || !weightKg) return 0;
    const heightM = heightCm / 100;
    return (weightKg / (heightM * heightM)).toFixed(2);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { label: 'Underweight', color: '#38bdf8' }; // accent like
    if (bmi >= 18.5 && bmi <= 24.9) return { label: 'Normal weight', color: '#10b981' }; // primary
    if (bmi >= 25 && bmi <= 29.9) return { label: 'Overweight', color: '#f59e0b' }; // warning
    return { label: 'Obese', color: '#ef4444' }; // error
  };

  const calculateProgress = () => {
    if (!goalSettings) return { percent: 0, diff: 0, isMet: false };
    const { startingWeight, targetWeight, currentWeight, goalType } = goalSettings;
    
    if (goalType === 'maintain') {
      const diff = Math.abs(currentWeight - targetWeight);
      const isMet = diff <= 1.0; 
      return { percent: isMet ? 100 : 0, diff: diff.toFixed(1), isMet };
    }

    const totalToLose = Math.abs(startingWeight - targetWeight);
    const currentProgress = Math.abs(startingWeight - currentWeight);
    
    let percent = (currentProgress / totalToLose) * 100;
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;

    let isMet = false;
    if (goalType === 'loss' && currentWeight <= targetWeight) isMet = true;
    if (goalType === 'gain' && currentWeight >= targetWeight) isMet = true;

    if (isMet) percent = 100;

    const diff = Math.abs(currentWeight - targetWeight).toFixed(1);
    
    return { percent: percent.toFixed(1), diff, isMet };
  };

  const renderSmartAssistance = () => {
    if (!goalSettings) return null;
    const { goalType } = goalSettings;
    
    return (
      <div className="bg-smart-assistance">
        <h3>
          💡 Goal Guidance
        </h3>
        {goalType === 'loss' && (
          <ul>
            <li>Track changes in weight over time using the chart above.</li>
            <li>Focus on general healthy habits, not just the number on the scale.</li>
            <li>Avoid crash diets; aim for sustainable, gradual progress.</li>
          </ul>
        )}
        {goalType === 'gain' && (
          <ul>
            <li>Track your weight increases consistently.</li>
            <li>Combine nutrition with strength-building exercises.</li>
            <li>If you experience unexplained weight changes, consult a professional.</li>
          </ul>
        )}
        {goalType === 'maintain' && (
          <ul>
            <li>Fluctuations are normal; track changes without treating every shift as a failure.</li>
            <li>Focus on weekly or monthly trends rather than daily numbers.</li>
            <li>Keep a balanced diet and regular activity level.</li>
          </ul>
        )}
      </div>
    );
  };

  const progressData = calculateProgress();
  const currentBMI = goalSettings ? calculateBMI(goalSettings.height, goalSettings.currentWeight) : 0;
  const bmiCategory = getBMICategory(currentBMI);

  // Redirect if not logged in
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="section-padding" ref={pageRef}>
      <div className="container">
        <div className="body-goals-header">
          <div>
            <h1 className="body-goals-title">Body Goals</h1>
            <p className="body-goals-subtitle">Track, analyze, and achieve your target weight.</p>
          </div>
          {!isEditingGoal && goalSettings && (
            <button 
              className="btn btn-outline"
              onClick={() => setIsEditingGoal(true)}
            >
              Edit Goal
            </button>
          )}
        </div>

        {formError && (
          <div className="bg-error">
            {formError}
          </div>
        )}

        {isEditingGoal ? (
          <div className="bg-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="bg-card-header">Setup Your Goal</h2>
            <form onSubmit={handleGoalSubmit}>
              <div className="bg-form-grid">
                <div className="bg-form-group">
                  <label>Height (cm)</label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="e.g. 170"
                    value={formData.height}
                    onChange={(e) => setFormData({...formData, height: e.target.value})}
                    required
                  />
                </div>
                <div className="bg-form-group">
                  <label>Age (years)</label>
                  <input
                    type="number"
                    placeholder="e.g. 25"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    required
                  />
                </div>
                <div className="bg-form-group">
                  <label>Current Weight (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="e.g. 70"
                    value={formData.currentWeight}
                    onChange={(e) => setFormData({...formData, currentWeight: e.target.value})}
                    required
                  />
                </div>
                <div className="bg-form-group">
                  <label>Target Weight (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="e.g. 65"
                    value={formData.targetWeight}
                    onChange={(e) => setFormData({...formData, targetWeight: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="bg-form-group">
                <label style={{ marginBottom: '0.75rem' }}>Goal Type</label>
                <div className="goal-type-grid">
                  {['loss', 'gain', 'maintain'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      className={`goal-type-btn ${formData.goalType === type ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, goalType: type})}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-actions" style={{ marginTop: '2rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Save Goal
                </button>
                {goalSettings && (
                  <button type="button" className="btn btn-outline" onClick={() => setIsEditingGoal(false)}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-dashboard-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="bg-card bg-status-card">
                <h3 className="bg-card-header" style={{ marginBottom: '0.5rem' }}>Goal Status</h3>
                
                {progressData.isMet ? (
                  <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.5rem', margin: '1rem 0' }}>
                    🏆 Goal Reached!
                  </div>
                ) : (
                  <div style={{ margin: '1rem 0' }}>
                    <span className="bg-status-value">{progressData.percent}%</span>
                    <span className="bg-status-label" style={{ marginLeft: '0.5rem' }}>completed</span>
                  </div>
                )}
                
                <div className="bg-progress-bar-rail">
                  <div 
                    className="bg-progress-bar-fill"
                    style={{ width: `${progressData.percent}%` }}
                  ></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div className="bg-status-label">Current</div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{goalSettings.currentWeight} kg</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="bg-status-label">Target</div>
                    <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{goalSettings.targetWeight} kg</div>
                  </div>
                </div>

                {!progressData.isMet && goalSettings.goalType !== 'maintain' && (
                  <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>{progressData.diff} kg</span> remaining to reach your goal.
                  </div>
                )}
              </div>

              <div className="bg-card">
                <h3 className="bg-card-header" style={{ marginBottom: '1rem' }}>Body Mass Index (BMI)</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
                  <span className="bg-status-value">{currentBMI}</span>
                  <span 
                    style={{ 
                      backgroundColor: `${bmiCategory.color}15`, 
                      color: bmiCategory.color, 
                      border: `1px solid ${bmiCategory.color}40`,
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      fontWeight: '700'
                    }}
                  >
                    {bmiCategory.label}
                  </span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  BMI is a screening measurement, not a complete assessment of health. Adult BMI categories should not be applied to children or teenagers.
                </p>
              </div>

              {renderSmartAssistance()}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="bg-card">
                <h3 className="bg-card-header">Weight Progress</h3>
                <div className="bg-chart-container">
                  <canvas ref={chartRef}></canvas>
                </div>
              </div>

              <div className="bg-card">
                <h3 className="bg-card-header">Log New Weight</h3>
                <form onSubmit={handleAddWeight} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                  <div className="bg-form-group" style={{ flex: '1', minWidth: '200px' }}>
                    <label>Date</label>
                    <input
                      type="date"
                      value={newWeightDate}
                      onChange={(e) => setNewWeightDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="bg-form-group" style={{ flex: '1', minWidth: '200px' }}>
                    <label>Weight (kg)</label>
                    <input
                      type="number"
                      step="0.1"
                      placeholder="e.g. 68.5"
                      value={newWeight}
                      onChange={(e) => setNewWeight(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ height: '44px', padding: '0 2rem' }}>
                    Log Weight
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
