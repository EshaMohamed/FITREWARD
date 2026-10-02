import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../supabaseClient';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const INITIAL_CHALLENGES = [
  {
    id: 1,
    title: '7 Days of Morning Cardio',
    description: 'Jumpstart your metabolism with 30 minutes of high-energy cardio every morning.',
    category: 'Cardio',
    difficulty: 'Beginner',
    goal: 7,
    type: 'days',
    xp: 250,
    calories: '2,100 kcal',
    icon: '🏃‍♂️',
    participants: 1420
  },
  {
    id: 2,
    title: '10,000 Steps Daily Trek',
    description: 'Hit 10,000 brisk steps every single day for 14 continuous days to boost endurance.',
    category: 'Endurance',
    difficulty: 'Intermediate',
    goal: 14,
    type: 'days',
    xp: 500,
    calories: '5,600 kcal',
    icon: '👟',
    participants: 2890
  },
  {
    id: 3,
    title: 'Push-Up Century Builder',
    description: 'Crush 1,000 total push-ups over 30 days to sculpt upper-body strength and chest power.',
    category: 'Strength',
    difficulty: 'Advanced',
    goal: 1000,
    type: 'reps',
    xp: 800,
    calories: '4,200 kcal',
    icon: '💪',
    participants: 980
  },
  {
    id: 4,
    title: '30-Day Core & Plank Shield',
    description: 'Hold 60 total minutes of planks and core isolation across 30 days for rock-solid stability.',
    category: 'Strength',
    difficulty: 'Intermediate',
    goal: 60,
    type: 'minutes',
    xp: 600,
    calories: '3,000 kcal',
    icon: '🛡️',
    participants: 1650
  },
  {
    id: 5,
    title: 'High-Intensity HIIT Blitz',
    description: 'Complete 10 explosive 20-minute HIIT circuit routines to supercharge cardiovascular power.',
    category: 'HIIT',
    difficulty: 'Advanced',
    goal: 10,
    type: 'sessions',
    xp: 750,
    calories: '4,500 kcal',
    icon: '🔥',
    participants: 1120
  },
  {
    id: 6,
    title: 'Mindful Yoga & Mobility',
    description: 'Restore mobility, reduce stiffness, and unwind with 12 restorative yoga & flexibility flows.',
    category: 'Flexibility',
    difficulty: 'Beginner',
    goal: 12,
    type: 'sessions',
    xp: 400,
    calories: '1,800 kcal',
    icon: '🧘',
    participants: 870
  }
];

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [challenges, setChallenges] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  useEffect(() => {
    // 1. Initialize Local Storage
    const storedUsers = localStorage.getItem('fitness_users');
    if (!storedUsers) {
      localStorage.setItem('fitness_users', JSON.stringify([]));
    } else {
      setUsers(JSON.parse(storedUsers));
    }

    const storedChallenges = localStorage.getItem('fitness_challenges');
    if (!storedChallenges) {
      localStorage.setItem('fitness_challenges', JSON.stringify(INITIAL_CHALLENGES));
      setChallenges(INITIAL_CHALLENGES);
    } else {
      const parsed = JSON.parse(storedChallenges);
      if (parsed.length < INITIAL_CHALLENGES.length || !parsed[0].xp) {
        localStorage.setItem('fitness_challenges', JSON.stringify(INITIAL_CHALLENGES));
        setChallenges(INITIAL_CHALLENGES);
      } else {
        setChallenges(parsed);
      }
    }

    const storedCurrentUser = localStorage.getItem('fitness_current_user');
    if (storedCurrentUser) {
      setCurrentUser(JSON.parse(storedCurrentUser));
    }

    // 2. Fetch challenges directly from Supabase REST Data API (https://plahpnooqgytrmbuzlms.supabase.co/rest/v1/)
    if (supabase) {
      supabase
        .from('challenges')
        .select('*')
        .then(({ data, error }) => {
          if (!error && data && data.length > 0) {
            setChallenges(data);
            localStorage.setItem('fitness_challenges', JSON.stringify(data));
          }
        })
        .catch((err) => {
          console.warn('Supabase REST Data API fetch notice:', err);
        });

      // Listen to Supabase Auth State
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user && !storedCurrentUser) {
          const userMeta = session.user.user_metadata || {};
          const syncedUser = {
            id: session.user.id,
            email: session.user.email,
            name: userMeta.name || session.user.email.split('@')[0],
            xp: 0,
            streak: 1,
            joinedChallenges: [],
            certificates: []
          };
          saveCurrentUser(syncedUser);
        }
      }).catch(console.error);
    }
  }, []);

  const saveUsers = (newUsers) => {
    localStorage.setItem('fitness_users', JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  const saveCurrentUser = (user) => {
    if (user) {
      localStorage.setItem('fitness_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('fitness_current_user');
    }
    setCurrentUser(user);
    
    if (user) {
      const newUsers = users.map((u) => (u.email === user.email ? user : u));
      saveUsers(newUsers);
    }
  };

  const registerUser = async (email, password, name) => {
    // 1. Save in Supabase Auth
    let supabaseUserId = null;
    if (supabase) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { name }
          }
        });
        if (error) {
          console.warn('Supabase signup message:', error.message);
          if (error.message.includes('already registered')) {
            showToast('Email already registered in Supabase. Please sign in.', 'error');
            return { success: false, message: 'Email already registered in Supabase.' };
          }
        } else if (data?.user) {
          supabaseUserId = data.user.id;
          
          // Optionally sync to profiles table via REST Data API
          try {
            await supabase.from('profiles').upsert({
              id: data.user.id,
              name,
              email,
              xp: 0,
              streak: 1
            });
          } catch (profileErr) {
            console.warn('Profile table sync note:', profileErr);
          }
        }
      } catch (err) {
        console.warn('Supabase signup fallback:', err);
      }
    }

    // 2. Check local users
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      showToast('Email already registered. Please sign in.', 'error');
      return { success: false, message: 'Email already registered.' };
    }

    // 3. Register user profile (Starts at 0% progress)
    const newUser = {
      id: supabaseUserId || Date.now(),
      name,
      email,
      password,
      xp: 0,
      streak: 1,
      joinedChallenges: [],
      certificates: []
    };

    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);

    showToast(`Account registered successfully for ${name}! Please sign in now 🚀`, 'success');
    return { success: true };
  };

  const loginUser = async (email, password, rememberMe = false) => {
    if (rememberMe) {
      localStorage.setItem('fitness_remember_email', email);
    } else {
      localStorage.removeItem('fitness_remember_email');
    }

    // 1. Try Supabase Auth Login
    if (supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (!error && data?.user) {
          const userMeta = data.user.user_metadata || {};
          const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
          const loggedIn = existing || {
            id: data.user.id,
            email: data.user.email,
            name: userMeta.name || email.split('@')[0],
            xp: 0,
            streak: 1,
            joinedChallenges: [],
            certificates: []
          };
          saveCurrentUser(loggedIn);
          showToast(`Welcome back, ${loggedIn.name}! 🚀`, 'success');
          return { success: true };
        } else if (error) {
          console.warn('Supabase login check:', error.message);
        }
      } catch (err) {
        console.warn('Supabase login fallback:', err);
      }
    }

    // 2. Fallback check for registered users
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (user) {
      saveCurrentUser(user);
      showToast(`Welcome back, ${user.name}! 🚀`, 'success');
      return { success: true };
    }

    showToast('Invalid email or password. Please register first if you do not have an account.', 'error');
    return { success: false, message: 'Invalid email or password. Please register first.' };
  };

  const logoutUser = async () => {
    if (supabase) {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.warn('Supabase signout warning:', err);
      }
    }
    saveCurrentUser(null);
    showToast('Successfully logged out.', 'info');
  };

  const joinChallenge = (challengeOrId) => {
    if (!currentUser) return false;
    
    const challenge = typeof challengeOrId === 'object' 
      ? challengeOrId 
      : challenges.find((c) => c.id === challengeOrId);
      
    if (!challenge) return false;
    
    if (currentUser.joinedChallenges?.find((jc) => jc.id === challenge.id)) {
      showToast('You are already participating in this challenge!', 'info');
      return false;
    }

    const goal = challenge.goal || challenge.duration || 7;
    const type = challenge.type || 'days';

    // Tasks strictly start from 0 progress
    const updatedUser = {
      ...currentUser,
      joinedChallenges: [
        ...(currentUser.joinedChallenges || []),
        {
          ...challenge,
          goal,
          type,
          progress: 0,
          completed: false,
          joinDate: new Date().toISOString()
        }
      ]
    };
    saveCurrentUser(updatedUser);
    showToast(`Enrolled in "${challenge.title}"! Starting at 0% 💪`, 'success');
    return true;
  };

  const getTodayDateString = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const updateProgress = (challengeId, requestedProgress) => {
    if (!currentUser) return false;
    
    const todayStr = getTodayDateString();
    const existing = (currentUser.joinedChallenges || []).find((c) => c.id === challengeId);
    if (!existing) return false;

    if (existing.completed) {
      showToast('This challenge is already 100% completed! 🏆', 'info');
      return false;
    }

    // STRICT 1 TASK PER CALENDAR DAY ENFORCEMENT:
    if (existing.lastLogDate === todayStr) {
      showToast(`⚠️ You have already completed today's task! Only 1 task per day can be logged. Come back tomorrow for Day ${(existing.progress || 0) + 1} ⏳`, 'error');
      return false;
    }

    const goal = existing.goal || existing.duration || 7;
    const currentProg = typeof existing.progress === 'number' ? existing.progress : 0;
    
    // Increment exactly +1 day per calendar day
    const progress = Math.min(goal, currentProg + 1);
    const completed = progress >= goal;
    const completionDate = completed ? new Date().toISOString() : existing.completionDate;

    let justCompletedChallenge = (completed && !existing.completed) ? { ...existing, goal, progress, completed } : null;

    const updatedChallenges = (currentUser.joinedChallenges || []).map((c) => {
      if (c.id === challengeId) {
        return {
          ...c,
          goal,
          progress,
          completed,
          completionDate,
          lastLogDate: todayStr,
          logHistory: [...(c.logHistory || []), { date: todayStr, day: progress }]
        };
      }
      return c;
    });

    let newCertificates = [...(currentUser.certificates || [])];
    let addedXp = 50;

    if (justCompletedChallenge) {
      const newCert = {
        id: 'FR-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000),
        challengeTitle: justCompletedChallenge.title,
        category: justCompletedChallenge.category,
        date: new Date().toISOString(),
        score: '100% Goal Met'
      };
      newCertificates.push(newCert);
      addedXp += (justCompletedChallenge.xp || 500);
      showToast(`🏆 Challenge Mastered! Earned Official Certificate & +${justCompletedChallenge.xp || 500} XP!`, 'celebrate');
    } else {
      showToast(`✅ Day ${progress} completed for today! (+50 XP). Come back tomorrow for Day ${progress + 1}!`, 'success');
    }

    const updatedUser = {
      ...currentUser,
      xp: (currentUser.xp || 0) + addedXp,
      streak: (currentUser.streak || 1) + 1,
      joinedChallenges: updatedChallenges,
      certificates: newCertificates
    };

    saveCurrentUser(updatedUser);
    return true;
  };

  return (
    <AppContext.Provider value={{
      currentUser,
      challenges,
      toast,
      showToast,
      registerUser,
      loginUser,
      logoutUser,
      joinChallenge,
      updateProgress
    }}>
      {children}
    </AppContext.Provider>
  );
};
