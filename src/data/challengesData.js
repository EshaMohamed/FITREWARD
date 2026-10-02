export const DURATIONS = [7, 30, 40, 50, 60];

export const DURATION_META = {
  7: { label: '7-Day Starter', sub: 'Beginner • Easy to Medium', emoji: '🌱' },
  30: { label: '30-Day Consistency', sub: 'Beginner–Intermediate • Medium', emoji: '🔥' },
  40: { label: '40-Day Cardio & Stamina', sub: 'Intermediate • Medium to Hard', emoji: '⚡' },
  50: { label: '50-Day Strength Builder', sub: 'Intermediate • Medium to Hard', emoji: '🏋️' },
  60: { label: '60-Day Complete Fitness', sub: 'Progressive • Easy to Hard', emoji: '🏆' },
};

export const DAYS_CATEGORIES = ['Cardio', 'Strength', 'Running', 'HIIT', 'Flexibility'];

export const CAT_COLORS = {
  Cardio: { bg: '#dbeafe', color: '#1e40af', accent: '#3b82f6' },
  Strength: { bg: '#fee2e2', color: '#991b1b', accent: '#ef4444' },
  Running: { bg: '#e0f2fe', color: '#0369a1', accent: '#0ea5e9' },
  Walking: { bg: '#fef08a', color: '#854d0e', accent: '#eab308' },
  HIIT: { bg: '#ffedd5', color: '#9a3412', accent: '#f97316' },
  Flexibility: { bg: '#f3e8ff', color: '#6b21a8', accent: '#a855f7' },
  Endurance: { bg: '#dcfce7', color: '#166534', accent: '#22c55e' },
};

export const DAYS_CHALLENGES = [
  /* ============================================================
     7-DAY CHALLENGES (ALL 5 CATEGORIES)
     ============================================================ */
  {
    id: 'd7-cardio',
    duration: 7,
    durationLabel: '7-Day Starter Challenge',
    level: 'Beginner • Easy to Medium',
    category: 'Cardio',
    title: '7-Day Cardio Spark',
    description: 'Ignite your cardio engine with 7 days of progressive aerobic conditioning and stamina building.',
    icon: '🏃‍♂️',
    difficulty: 'Easy to Medium',
    xp: 250,
    participants: 1420,
    tasks: [
      {
        day: 'Day 1',
        task: '20 min brisk walk & light jog',
        summary: 'Warm up your cardiovascular system with low-impact brisk movement.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '10 min brisk walk (warm-up pace) + 10 min light jog at conversational pace', detail: 'Target heart rate zone 2. Cool down with 3 min gentle breathing.' }
        ]
      },
      {
        day: 'Day 2',
        task: '25 min steady aerobic jog',
        summary: 'Establish a rhythm you can maintain without gasping for breath.',
        dailyBreakdown: [
          { day: 'Day 2', workout: '25 min continuous jogging on flat surface + arm swings', detail: 'Focus on tall posture, midfoot strike, and steady inhale-exhale rhythm.' }
        ]
      },
      {
        day: 'Day 3',
        task: 'Active Recovery & mobility flow',
        summary: 'Allow muscle fibers to rebuild while keeping blood circulating.',
        dailyBreakdown: [
          { day: 'Day 3', workout: '15 min gentle walk + 10 min lower body stretching (hamstrings & calves)', detail: 'Drink at least 2.5L water; focus on hips and ankle rotations.' }
        ]
      },
      {
        day: 'Day 4',
        task: '30 min steady-state endurance run',
        summary: 'Cross the half-way mark by extending your aerobic duration.',
        dailyBreakdown: [
          { day: 'Day 4', workout: '30 min uninterrupted steady cardio jog', detail: 'Keep a consistent cadence of 160–170 steps per min.' }
        ]
      },
      {
        day: 'Day 5',
        task: '25 min cycling or cross-training',
        summary: 'Low-impact cross training to protect joints while torching calories.',
        dailyBreakdown: [
          { day: 'Day 5', workout: '25 min moderate cycling (outdoor bike or stationary RPM 75–85)', detail: 'Engage glutes and maintain flat back posture.' }
        ]
      },
      {
        day: 'Day 6',
        task: '35 min interval speedplay (Fartlek)',
        summary: 'Introduce speed variance to boost VO2 max and burn extra fat.',
        dailyBreakdown: [
          { day: 'Day 6', workout: '5 min warm-up → (1 min fast sprint / 2 min easy jog) × 8 rounds → 5 min cool-down', detail: 'Push hard during the 1-minute surges.' }
        ]
      },
      {
        day: 'Day 7',
        task: '40 min victory long slow distance',
        summary: 'Complete your 7-day milestone and unlock your achievement reward!',
        dailyBreakdown: [
          { day: 'Day 7', workout: '40 min continuous easy endurance session + full-body celebration stretch', detail: 'Congratulations! Log your workout to earn +250 XP.' }
        ]
      },
    ],
  },
  {
    id: 'd7-strength',
    duration: 7,
    durationLabel: '7-Day Starter Challenge',
    level: 'Beginner • Easy to Medium',
    category: 'Strength',
    title: '7-Day Bodyweight Strength',
    description: 'Build foundational muscular endurance with push-ups, squats, planks, and glute bridges.',
    icon: '💪',
    difficulty: 'Easy to Medium',
    xp: 250,
    participants: 1100,
    tasks: [
      {
        day: 'Day 1',
        task: 'Upper & Lower Foundation',
        summary: '3 sets of 10 push-ups + 3 sets of 15 bodyweight squats',
        dailyBreakdown: [
          { day: 'Day 1', workout: 'Push-ups: 3 sets × 10 reps (knees or standard) | Squats: 3 sets × 15 reps', detail: 'Rest 60 sec between sets. Keep core tight and chest upright on squats.' }
        ]
      },
      {
        day: 'Day 2',
        task: 'Triceps & Posterior Chain',
        summary: '3 sets of 12 bench dips + 3 sets of 20 glute bridges',
        dailyBreakdown: [
          { day: 'Day 2', workout: 'Chair/Bench Dips: 3 × 12 reps | Glute Bridges: 3 × 20 reps (hold 2 sec at top)', detail: 'Squeeze glutes at peak of bridge and control descent on dips.' }
        ]
      },
      {
        day: 'Day 3',
        task: 'Core Stability & Mobility',
        summary: 'Active rest with planks and spinal mobility flows',
        dailyBreakdown: [
          { day: 'Day 3', workout: 'Plank: 3 sets × 30 sec | Bird-Dog: 3 sets × 10 each side | Cat-Cow: 10 reps', detail: 'Focus on neutral spine and steady breathing.' }
        ]
      },
      {
        day: 'Day 4',
        task: 'Explosive Power Day',
        summary: '4 sets of 10 push-ups + 4 sets of 15 squat jumps',
        dailyBreakdown: [
          { day: 'Day 4', workout: 'Standard Push-ups: 4 × 10 reps | Squat Jumps: 4 × 15 reps', detail: 'Land softly on the balls of your feet to protect knees.' }
        ]
      },
      {
        day: 'Day 5',
        task: 'Arms & Leg Endurance',
        summary: '3 sets of 15 tricep dips + 3 sets of 20 walking lunges',
        dailyBreakdown: [
          { day: 'Day 5', workout: 'Tricep Dips: 3 × 15 reps | Lunges: 3 × 20 reps (10 per leg)', detail: 'Front knee stays aligned over ankle, back knee gently taps floor.' }
        ]
      },
      {
        day: 'Day 6',
        task: 'Shoulders & Calves Builder',
        summary: '4 sets of 12 diamond/incline push-ups + 4 sets of 25 calf raises',
        dailyBreakdown: [
          { day: 'Day 6', workout: 'Diamond Push-ups: 4 × 12 reps | Standing Calf Raises: 4 × 25 reps', detail: 'Pause at the top of calf raises for maximum contraction.' }
        ]
      },
      {
        day: 'Day 7',
        task: 'Grand Strength Circuit',
        summary: 'Full-body 3-round gauntlet of all exercises',
        dailyBreakdown: [
          { day: 'Day 7', workout: '3 rounds: 15 squats → 12 push-ups → 20 glute bridges → 45s plank', detail: 'Rest 90 sec between rounds. Claim your +250 XP reward!' }
        ]
      },
    ],
  },
  {
    id: 'd7-running',
    duration: 7,
    durationLabel: '7-Day Starter Challenge',
    level: 'Beginner • Easy to Medium',
    category: 'Running',
    title: '7-Day Running Spark',
    description: 'A progressive walk-to-run routine designed to build running confidence and leg strength.',
    icon: '🏃‍♂️',
    difficulty: 'Easy to Medium',
    xp: 250,
    participants: 1300,
    tasks: [
      {
        day: 'Day 1',
        task: '15 min walk + 5 min light jog',
        summary: 'Introductory walk/run intervals to acclimatize calves and ankles.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '5 min brisk walk → (1 min jog / 2 min walk) × 5 rounds → 5 min cool-down', detail: 'Jog at an easy conversational speed.' }
        ]
      },
      {
        day: 'Day 2',
        task: '20 min continuous jog',
        summary: 'Maintain a steady, slow running cadence without stopping.',
        dailyBreakdown: [
          { day: 'Day 2', workout: '20 min slow steady jog + 3 min quad stretches', detail: 'Focus on landing softly with short strides.' }
        ]
      },
      {
        day: 'Day 3',
        task: 'Rest & Mobility day',
        summary: 'Active recovery with dynamic lower-body mobility.',
        dailyBreakdown: [
          { day: 'Day 3', workout: '15 min walk + leg swings, calf stretches, and foam rolling', detail: 'Helps prevent shin splints and tight IT bands.' }
        ]
      },
      {
        day: 'Day 4',
        task: '25 min steady-state run',
        summary: 'Increase your running volume with a continuous 25-minute effort.',
        dailyBreakdown: [
          { day: 'Day 4', workout: '25 min sustained run at steady aerobic pace', detail: 'Breathe through both nose and mouth in a 2:2 rhythm.' }
        ]
      },
      {
        day: 'Day 5',
        task: '30 min brisk walk recovery',
        summary: 'Low-impact aerobic base building.',
        dailyBreakdown: [
          { day: 'Day 5', workout: '30 min outdoor brisk walking + arm pump', detail: 'Keep heart rate in zone 1–2 to encourage recovery.' }
        ]
      },
      {
        day: 'Day 6',
        task: '10 min walk + 20 min tempo run',
        summary: 'Build lactate threshold with a slightly brisker running pace.',
        dailyBreakdown: [
          { day: 'Day 6', workout: '5 min walk → 20 min comfortably hard run → 5 min walk', detail: 'You should only be able to speak short phrases.' }
        ]
      },
      {
        day: 'Day 7',
        task: '30 min free run celebration',
        summary: 'Run freely for 30 minutes and claim your 7-day runner badge.',
        dailyBreakdown: [
          { day: 'Day 7', workout: '30 min continuous run at your favorite pace + victory stretch', detail: 'Complete the 7-day run series and unlock +250 XP!' }
        ]
      },
    ],
  },
  {
    id: 'd7-hiit',
    duration: 7,
    durationLabel: '7-Day Starter Challenge',
    level: 'Beginner • Easy to Medium',
    category: 'HIIT',
    title: '7-Day HIIT Ignition',
    description: 'High-intensity interval bursts that maximize calorie afterburn in just 15 minutes a day.',
    icon: '🔥',
    difficulty: 'Easy to Medium',
    xp: 280,
    participants: 980,
    tasks: [
      {
        day: 'Day 1',
        task: 'Jumping Jacks & Core Blast',
        summary: '3 rounds: 30s jumping jacks / 30s rest + 30s high knees',
        dailyBreakdown: [
          { day: 'Day 1', workout: '3 rounds: 30s Jumping Jacks → 30s rest → 30s High Knees → 30s rest', detail: 'Total 12 min. Keep intensity high during work intervals.' }
        ]
      },
      {
        day: 'Day 2',
        task: 'Squat Jumps & Mountain Climbers',
        summary: '3 rounds: 30s squat jumps / 30s rest + 30s mountain climbers',
        dailyBreakdown: [
          { day: 'Day 2', workout: '3 rounds: 30s Jump Squats → 30s rest → 30s Mountain Climbers → 30s rest', detail: 'Engage core and drive knees rapidly toward chest.' }
        ]
      },
      {
        day: 'Day 3',
        task: 'Active Rest Day',
        summary: '20 min light walk and deep breathing exercises',
        dailyBreakdown: [
          { day: 'Day 3', workout: '20 min easy walk + gentle torso twists and hamstring stretches', detail: 'Recover nervous system for the heavier HIIT days.' }
        ]
      },
      {
        day: 'Day 4',
        task: 'Burpee Intensity Push',
        summary: '4 rounds: 40s burpees / 20s rest',
        dailyBreakdown: [
          { day: 'Day 4', workout: '4 rounds: 40s Burpees → 20s rest → 40s Skater Hops → 20s rest', detail: 'Step back into plank if full jump burpee becomes too intense.' }
        ]
      },
      {
        day: 'Day 5',
        task: 'Speed Climber Circuit',
        summary: '4 rounds: 40s fast mountain climbers / 20s rest',
        dailyBreakdown: [
          { day: 'Day 5', workout: '4 rounds: 40s Mountain Climbers → 20s rest → 40s Butt Kicks → 20s rest', detail: 'Keep shoulders directly over wrists during climbers.' }
        ]
      },
      {
        day: 'Day 6',
        task: 'Plyo Burn Finisher',
        summary: '5 rounds: 45s jump squats / 15s rest',
        dailyBreakdown: [
          { day: 'Day 6', workout: '5 rounds: 45s Squat Jumps → 15s rest → 45s Shadow Boxing → 15s rest', detail: 'Push through the quad burn; explode on every jump.' }
        ]
      },
      {
        day: 'Day 7',
        task: '15-Min Ultimate HIIT Gauntlet',
        summary: 'Non-stop combination circuit of all 7-day movements',
        dailyBreakdown: [
          { day: 'Day 7', workout: '3 cycles: 40s Burpees → 40s High Knees → 40s Mountain Climbers → 40s Jump Squats (20s rest between)', detail: 'All out effort! Log your workout to receive +280 XP.' }
        ]
      },
    ],
  },
  {
    id: 'd7-flexibility',
    duration: 7,
    durationLabel: '7-Day Starter Challenge',
    level: 'Beginner • Easy to Medium',
    category: 'Flexibility',
    title: '7-Day Mobility Reset',
    description: 'Restore muscle length, relieve back stiffness, and improve overall flexibility with 20-min daily flows.',
    icon: '🧘',
    difficulty: 'Easy',
    xp: 200,
    participants: 760,
    tasks: [
      {
        day: 'Day 1',
        task: 'Neck, Shoulders & Upper Back',
        summary: '20 min decompression flow for desk posture and tech neck',
        dailyBreakdown: [
          { day: 'Day 1', workout: 'Neck rolls, Cross-body shoulder stretch, Eagle arms, and Thread-the-needle (hold each 45 sec)', detail: 'Breathe into tight spots; avoid forcing or straining.' }
        ]
      },
      {
        day: 'Day 2',
        task: 'Hip Flexor & Quad Opening',
        summary: '20 min targeted stretch for tight hip flexors and thighs',
        dailyBreakdown: [
          { day: 'Day 2', workout: 'Low lunge hip opener (1 min each side) + Standing quad stretch + Lizard pose', detail: 'Tuck pelvis slightly in low lunge to deepen psoas stretch.' }
        ]
      },
      {
        day: 'Day 3',
        task: 'Hamstrings & Glute Release',
        summary: '20 min posterior chain elongation flow',
        dailyBreakdown: [
          { day: 'Day 3', workout: 'Seated forward bend + Standing single-leg hamstring stretch + Figure-4 glute stretch', detail: 'Hinge at hips rather than rounding the lower back.' }
        ]
      },
      {
        day: 'Day 4',
        task: 'Spine & Thoracic Rotation',
        summary: '20 min full spinal mobility and rotation exercises',
        dailyBreakdown: [
          { day: 'Day 4', workout: 'Cat-Cow (2 min) + Supine spinal twist (2 min each side) + Cobra to Child pose', detail: 'Synchronize breath with movement — inhale arch, exhale round.' }
        ]
      },
      {
        day: 'Day 5',
        task: 'Chest Opener & Lat Stretch',
        summary: '20 min posture-correcting chest and lat routines',
        dailyBreakdown: [
          { day: 'Day 5', workout: 'Doorway chest stretch (3 × 45s) + Puppy pose (lat opener) + Reverse prayer pose', detail: 'Great for opening rounded shoulders.' }
        ]
      },
      {
        day: 'Day 6',
        task: 'Pigeon Pose & Deep Hip Release',
        summary: '20 min deep hip capsule flexibility flow',
        dailyBreakdown: [
          { day: 'Day 6', workout: 'Pigeon pose (2 min each leg) + Butterfly stretch (3 min) + Happy baby pose', detail: 'Use a pillow under hip if tight.' }
        ]
      },
      {
        day: 'Day 7',
        task: 'Full-Body Sun Salutation Flow',
        summary: '20 min dynamic yoga flow combining all stretch milestones',
        dailyBreakdown: [
          { day: 'Day 7', workout: '5 cycles Sun Salutation A & B + 5 min Savasana meditation', detail: 'Feel the new mobility! Unlock your +200 XP certificate.' }
        ]
      },
    ],
  },

  /* ============================================================
     30-DAY CHALLENGES (ALL 5 CATEGORIES)
     ============================================================ */
  {
    id: 'd30-cardio',
    duration: 30,
    durationLabel: '30-Day Fitness Consistency',
    level: 'Beginner to Intermediate • Medium',
    category: 'Cardio',
    title: '30-Day Cardio Consistency',
    description: '30 days of daily structured cardio — progressively building stamina from 20 minutes to 50 minutes.',
    icon: '🏅',
    difficulty: 'Medium',
    xp: 600,
    participants: 3100,
    tasks: [
      {
        day: 'Week 1 (Days 1–7)',
        task: 'Aerobic Base Foundation',
        summary: '20–25 min brisk walks or light jogs daily to establish your cardio rhythm.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '20 min brisk walk + 5 min gentle stretches', detail: 'Set an easy pace (zone 2) to build aerobic capacity.' },
          { day: 'Day 2', workout: '20 min continuous light jog', detail: 'Focus on smooth breathing and short strides.' },
          { day: 'Day 3', workout: '25 min brisk walk on hilly/incline route', detail: 'Engage glutes and calves on inclines.' },
          { day: 'Day 4', workout: '20 min jog (3 min jog / 1 min walk intervals)', detail: 'Total 5 cycles of run/walk.' },
          { day: 'Day 5', workout: '25 min brisk outdoor walking', detail: 'Arm swings at 90 degrees for extra calorie burn.' },
          { day: 'Day 6', workout: '25 min steady-pace jog', detail: 'Maintain conversation pace without stopping.' },
          { day: 'Day 7', workout: 'Active Recovery: 20 min easy walk + foam rolling', detail: 'Hydrate well and log your 1st week streak!' },
        ]
      },
      {
        day: 'Week 2 (Days 8–14)',
        task: 'Endurance & Cross-Training Push',
        summary: '30 min steady jog sessions with cross-training days to ramp up lung capacity.',
        dailyBreakdown: [
          { day: 'Day 8', workout: '30 min steady cardio jog', detail: 'Increase duration by 5 minutes from week 1.' },
          { day: 'Day 9', workout: '30 min cycling / stationary bike (RPM 80)', detail: 'Low impact cross-training for knee recovery.' },
          { day: 'Day 10', workout: '30 min jog with 4 × 30s brisk pickups', detail: 'Introduce brief surges of faster running.' },
          { day: 'Day 11', workout: '25 min brisk power walking', detail: 'Keep cadence high (130+ steps/min).' },
          { day: 'Day 12', workout: '30 min continuous jog at comfortable pace', detail: 'Focus on relaxed shoulders and deep breathing.' },
          { day: 'Day 13', workout: '35 min mixed cardio (20 min jog + 15 min brisk walk)', detail: 'Build progressive aerobic volume.' },
          { day: 'Day 14', workout: 'Active Rest: 20 min walk + full-body stretch', detail: 'Two weeks completed — halfway to your goal!' },
        ]
      },
      {
        day: 'Week 3 (Days 15–21)',
        task: 'Speedplay & Interval Conditioning',
        summary: '35 min runs with 2 dedicated interval sessions to burn fat and increase speed.',
        dailyBreakdown: [
          { day: 'Day 15', workout: '35 min steady-state jog', detail: 'Comfortable aerobic zone, stay consistent.' },
          { day: 'Day 16', workout: 'Intervals: 5 min warm-up → (2 min fast / 1 min walk) × 8 → 5 min cool-down', detail: 'Push your pace during the 2-minute segments.' },
          { day: 'Day 17', workout: '30 min recovery jog or brisk walk', detail: 'Keep effort low to let leg muscles recover.' },
          { day: 'Day 18', workout: '35 min steady run with 2 hills', detail: 'Drive knees up on hill climbs.' },
          { day: 'Day 19', workout: 'Intervals: (1 min sprint / 1 min jog) × 10 rounds', detail: 'Max speed surges to elevate VO2 max.' },
          { day: 'Day 20', workout: '40 min long steady endurance jog', detail: 'Longest session yet; hydrate before starting.' },
          { day: 'Day 21', workout: 'Active Recovery: 20 min gentle walk + yoga cool-down', detail: '3 weeks down, 9 days to the finish line!' },
        ]
      },
      {
        day: 'Week 4 (Days 22–28)',
        task: 'Peak Distance & Elevation Work',
        summary: '40–45 min sustained runs plus stair/incline challenges for maximum stamina.',
        dailyBreakdown: [
          { day: 'Day 22', workout: '40 min continuous endurance run', detail: 'Smooth, rhythmic breathing throughout.' },
          { day: 'Day 23', workout: '35 min tempo run (comfortably hard pace)', detail: 'Sustain 75–85% max heart rate.' },
          { day: 'Day 24', workout: '30 min recovery walk or easy spin', detail: 'Flush lactic acid out of working muscles.' },
          { day: 'Day 25', workout: '40 min run with 5 × 100m strides', detail: 'Accelerate smoothly to top speed on strides.' },
          { day: 'Day 26', workout: 'Stair climbing challenge: 20 min stairs + 20 min walk', detail: 'Serious quad, glute, and heart workout.' },
          { day: 'Day 27', workout: '45 min long slow endurance run', detail: 'Your peak endurance milestone before final days.' },
          { day: 'Day 28', workout: 'Active Rest: 25 min gentle walk + deep stretch', detail: 'Final prep for the 30-day grand finale.' },
        ]
      },
      {
        day: 'Days 29–30',
        task: 'Grand Finale Milestone',
        summary: '50 min endurance victory run to solidify your 30-day cardio transformation.',
        dailyBreakdown: [
          { day: 'Day 29', workout: '30 min easy jog to stay loose and primed', detail: 'Hydrate and fuel up for Day 30.' },
          { day: 'Day 30', workout: '50 min non-stop celebration run + finish line stretch', detail: 'You conquered 30 days of Cardio! Claim +600 XP & Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd30-strength',
    duration: 30,
    durationLabel: '30-Day Fitness Consistency',
    level: 'Beginner to Intermediate • Medium',
    category: 'Strength',
    title: '30-Day Strength Foundation',
    description: 'Systematic push-pull-legs bodyweight & resistance split to build full-body muscle and power.',
    icon: '🏋️',
    difficulty: 'Medium',
    xp: 650,
    participants: 2200,
    tasks: [
      {
        day: 'Week 1 (Days 1–7)',
        task: 'Split Intro: Push / Pull / Legs',
        summary: 'Establish proper form across upper, lower, and core muscle groups.',
        dailyBreakdown: [
          { day: 'Day 1', workout: 'Push Day: Push-ups 3×10, Dips 3×12, Pike Push-ups 3×8', detail: 'Chest, shoulders, triceps focus. Rest 60s between sets.' },
          { day: 'Day 2', workout: 'Pull Day: Inverted Rows / Band Pulls 3×12, Doorframe Rows 3×15, Superman 3×15', detail: 'Upper back and biceps development.' },
          { day: 'Day 3', workout: 'Leg Day: Bodyweight Squats 3×20, Lunges 3×12/leg, Calf Raises 3×25', detail: 'Quads, hamstrings, glutes, and calves.' },
          { day: 'Day 4', workout: 'Core Shield: Plank 3×45s, Russian Twists 3×20, Bicycle Crunches 3×20', detail: 'Abdominals and obliques stability.' },
          { day: 'Day 5', workout: 'Upper Body Blend: Push-ups 3×12 + Rows 3×12 supersets', detail: 'Pair antagonist muscle groups.' },
          { day: 'Day 6', workout: 'Lower Body Burn: Glute Bridges 3×25, Wall Sit 3×45s, Squats 3×20', detail: 'High repetition endurance.' },
          { day: 'Day 7', workout: 'Rest & Mobility: Full-body foam roll & active stretches', detail: 'Rest is where muscle growth actually happens.' },
        ]
      },
      {
        day: 'Week 2 (Days 8–14)',
        task: 'Volume & Progressive Overload',
        summary: 'Increase total reps and add tempo pauses (2s eccentric control).',
        dailyBreakdown: [
          { day: 'Day 8', workout: 'Push Day: Push-ups 4×12, Chair Dips 4×12, Decline Push-ups 3×10', detail: 'Elevate feet on chair for decline push-ups.' },
          { day: 'Day 9', workout: 'Pull Day: Back Rows 4×12, Prone Y-T-W raises 3×10 each, Bicep curls 3×15', detail: 'Focus on scapular retraction.' },
          { day: 'Day 10', workout: 'Leg Day: Jump Squats 4×15, Bulgarian Split Squats 3×10/leg, Glute bridges 3×25', detail: 'Rear foot elevated on couch or bench.' },
          { day: 'Day 11', workout: 'Core & Balance: Side Planks 3×30s/side, Hollow Body Hold 3×20s, Deadbug 3×12', detail: 'Deep core activation.' },
          { day: 'Day 12', workout: 'Push & Pull Circuit: 4 rounds of Push-ups (12) + Rows (12) + Dips (12)', detail: 'Short rest (45 sec) to build density.' },
          { day: 'Day 13', workout: 'Leg & Calf Power: Walking lunges 4×15/leg + Single-leg calf raises 3×15', detail: 'Unilateral leg strength.' },
          { day: 'Day 14', workout: 'Active Recovery: 20 min walk + hamstring/hip stretches', detail: 'Week 2 crushed! Keep the streak alive.' },
        ]
      },
      {
        day: 'Week 3 (Days 15–21)',
        task: 'Intensity & Isometric Holds',
        summary: 'Integrate pause reps and time-under-tension for hypertrophy stimulus.',
        dailyBreakdown: [
          { day: 'Day 15', workout: 'Push Power: Diamond Push-ups 4×10, Dips 4×15, Pike Push-ups 4×10', detail: 'Target triceps and anterior deltoids.' },
          { day: 'Day 16', workout: 'Pull Strength: Towel pull-ups/rows 4×10, Supermans 4×20s hold', detail: 'Hold contraction for 2 full seconds.' },
          { day: 'Day 17', workout: 'Leg Hypertrophy: 1.5-Rep Squats 4×15, Step-ups 3×12/leg, Wall Sit 3×60s', detail: 'Go down, come up halfway, back down, then all the way up.' },
          { day: 'Day 18', workout: 'Core Fortress: Plank-to-Pushup 3×12, V-ups 3×12, Hanging/Lying leg raises 3×15', detail: 'Strict form with zero swinging.' },
          { day: 'Day 19', workout: 'Upper Body Pump: Standard Push-ups 5×15, Tricep extensions 4×15', detail: 'Maximum volume session.' },
          { day: 'Day 20', workout: 'Lower Body Endurance: 100 total bodyweight squats for time + 50 calf raises', detail: 'Record your time and try to beat it.' },
          { day: 'Day 21', workout: 'Rest & Deep Stretch: Hip flexors, lats, chest release', detail: '3 weeks complete! Final 9 days ahead.' },
        ]
      },
      {
        day: 'Week 4 (Days 22–28)',
        task: 'Compound Density & Complexes',
        summary: 'Multi-exercise complexes designed to build lean, functional muscle.',
        dailyBreakdown: [
          { day: 'Day 22', workout: 'Push Complex: 5 rounds of (10 push-ups → 10 dips → 20s push-up hold)', detail: 'Rest 90 sec between rounds.' },
          { day: 'Day 23', workout: 'Pull Complex: 5 rounds of (12 rows → 15 face pulls → 15s superman hold)', detail: 'Upper back and rear shoulder pump.' },
          { day: 'Day 24', workout: 'Leg Complex: 4 rounds of (15 jump squats → 10 lunges/leg → 30s wall sit)', detail: 'Heavy leg burn; breathe through the fatigue.' },
          { day: 'Day 25', workout: 'Core Domination: 4 rounds: 45s Plank → 15 Leg Raises → 20 Russian Twists', detail: 'Rock solid abdominal shield.' },
          { day: 'Day 26', workout: 'Full Body Compound: Push-ups + Squats + Rows circuit (5 rounds of 15 each)', detail: 'Full body conditioning.' },
          { day: 'Day 27', workout: 'Max-Rep Test Day: 1 set max push-ups, 1 set max squats, 1 max plank hold', detail: 'Log your record numbers!' },
          { day: 'Day 28', workout: 'Deload Rest: Light 15 min walk & joint mobility', detail: 'Rest up for the final 2 championship days.' },
        ]
      },
      {
        day: 'Days 29–30',
        task: 'Grand Strength Milestone',
        summary: 'Final testing and 30-day championship full-body gauntlet.',
        dailyBreakdown: [
          { day: 'Day 29', workout: 'Primer: 3 sets of 10 push-ups + 10 squats + 30s plank', detail: 'Keep muscles loose and primed.' },
          { day: 'Day 30', workout: 'Championship 300 Rep Challenge: 100 Squats + 100 Push-ups + 100 Core Reps', detail: 'Legendary finish! Claim +650 XP and your Certificate!' },
        ]
      },
    ],
  },
  {
    id: 'd30-running',
    duration: 30,
    durationLabel: '30-Day Consistency',
    level: 'Beginner–Intermediate • Medium',
    category: 'Running',
    title: '30-Day 5K Builder',
    description: 'Build your running endurance steadily over 30 days to comfortably complete a continuous 5K (3.1 miles).',
    icon: '🏃',
    difficulty: 'Medium',
    xp: 600,
    participants: 2200,
    tasks: [
      {
        day: 'Week 1 (Days 1–7)',
        task: 'Walk-to-Run Base Building',
        summary: 'Introductory walk/jog intervals to condition leg bones and tendons.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '5 min walk → (1 min jog / 2 min walk) × 6 → 5 min cool-down', detail: 'Total 25 min. Focus on landing softly.' },
          { day: 'Day 2', workout: '20 min brisk recovery walk + calf stretches', detail: 'Active recovery to prevent shin tightness.' },
          { day: 'Day 3', workout: '5 min walk → (2 min jog / 1.5 min walk) × 5 → 5 min cool-down', detail: 'Slightly longer jog intervals.' },
          { day: 'Day 4', workout: 'Rest day or 15 min light yoga flow', detail: 'Rest your knees and ankles.' },
          { day: 'Day 5', workout: '5 min walk → (3 min jog / 2 min walk) × 4 → 5 min cool-down', detail: 'Jog segments now total 12 minutes.' },
          { day: 'Day 6', workout: '25 min continuous brisk walking outdoors', detail: 'Keep pace above 4 mph.' },
          { day: 'Day 7', workout: '15 min continuous slow jog test', detail: 'First continuous run milestone of the month!' },
        ]
      },
      {
        day: 'Week 2 (Days 8–14)',
        task: 'Endurance Push (15 to 20 min continuous)',
        summary: 'Transition to sustained running blocks with minimal walking.',
        dailyBreakdown: [
          { day: 'Day 8', workout: '18 min continuous jog at conversational pace', detail: 'Keep your gaze 20 feet ahead, shoulders down.' },
          { day: 'Day 9', workout: '25 min brisk walk + core plank holds (3×30s)', detail: 'Core stability improves running posture.' },
          { day: 'Day 10', workout: '20 min continuous jog', detail: 'Notice how your breathing is becoming more relaxed.' },
          { day: 'Day 11', workout: 'Rest & foam rolling (quads, IT bands, calves)', detail: 'Hydrate and replenish electrolytes.' },
          { day: 'Day 12', workout: '22 min continuous jog with 3 × 20s strides at the end', detail: 'Finish with short speed bursts.' },
          { day: 'Day 13', workout: '30 min brisk walk on hilly terrain', detail: 'Strengthen glutes and hip extensors.' },
          { day: 'Day 14', workout: '25 min continuous run benchmark', detail: 'Two full weeks completed! Halfway to 5K.' },
        ]
      },
      {
        day: 'Week 3 (Days 15–21)',
        task: 'Pace Discovery & Mid-Distance (2–2.5 Miles)',
        summary: 'Solidify your aerobic engine with 25–30 minute continuous runs.',
        dailyBreakdown: [
          { day: 'Day 15', workout: '25 min continuous steady run', detail: 'Lock into a cadence of ~165 steps per minute.' },
          { day: 'Day 16', workout: 'Intervals: 5 min warm-up → (3 min fast / 1.5 min jog) × 5 → 5 min cool-down', detail: 'Builds cardiac stroke volume.' },
          { day: 'Day 17', workout: '30 min easy recovery walk or light cycle', detail: 'Zero impact active recovery.' },
          { day: 'Day 18', workout: '28 min continuous steady run (~2.3 miles)', detail: 'Passing the 2-mile mark with ease.' },
          { day: 'Day 19', workout: 'Rest day + hamstring and glute mobility', detail: 'Prepare for weekend long run.' },
          { day: 'Day 20', workout: '30 min continuous run (~2.5 miles)', detail: 'You are now capable of running 30 minutes non-stop!' },
          { day: 'Day 21', workout: '20 min gentle walk + full body stretch', detail: 'Week 3 completed! 5K race week ahead.' },
        ]
      },
      {
        day: 'Week 4 (Days 22–28)',
        task: 'Peak Distance & Final Preparation',
        summary: 'Approaching the 3.1 mile (5K) mark with progressive distance.',
        dailyBreakdown: [
          { day: 'Day 22', workout: '32 min continuous run (~2.7 miles)', detail: 'Focus on rhythm and deep belly breathing.' },
          { day: 'Day 23', workout: '25 min recovery walk + light bodyweight squats', detail: 'Leg maintenance session.' },
          { day: 'Day 24', workout: '25 min tempo run (first 10 min easy, last 15 min brisk)', detail: 'Teaches pacing control.' },
          { day: 'Day 25', workout: '35 min continuous run (2.8 – 3.0 miles)', detail: 'Almost a full 5K in training!' },
          { day: 'Day 26', workout: 'Rest day — hydrate, foam roll, sleep 8+ hours', detail: 'Tapering phase begins.' },
          { day: 'Day 27', workout: '20 min easy shakeout run + 4 × 50m strides', detail: 'Keep legs sharp and responsive.' },
          { day: 'Day 28', workout: 'Rest day before the 5K celebration weekend', detail: 'Plan your favorite running route or track.' },
        ]
      },
      {
        day: 'Days 29–30',
        task: 'The 5K (3.1 Miles) Finish Line',
        summary: 'Run your full 5K distance without stopping and celebrate your medal!',
        dailyBreakdown: [
          { day: 'Day 29', workout: '15 min easy walk & mental prep', detail: 'Hydrate well and rest.' },
          { day: 'Day 30', workout: 'Official 5K Run: 3.1 Miles (5.0 km) continuous finish + celebration!', detail: 'You are now an official 5K runner! Claim +600 XP & Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd30-hiit',
    duration: 30,
    durationLabel: '30-Day Fitness Consistency',
    level: 'Beginner to Intermediate • Medium',
    category: 'HIIT',
    title: '30-Day HIIT Fat Burn',
    description: '20-minute daily HIIT circuits that ignite your metabolism, spike EPOC afterburn, and melt body fat.',
    icon: '🔥',
    difficulty: 'Medium',
    xp: 700,
    participants: 1880,
    tasks: [
      {
        day: 'Week 1 (Days 1–7)',
        task: 'Metabolic Awakening (30s on / 30s off)',
        summary: 'Foundational bodyweight circuits targeting major calorie-burning muscle groups.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '4 rounds: 30s Jumping Jacks → 30s Mountain Climbers → 30s Squats (30s rest between)', detail: 'High cadence, keep heart rate elevated.' },
          { day: 'Day 2', workout: '4 rounds: 30s High Knees → 30s Push-ups → 30s Skater Hops', detail: 'Land softly on skater hops.' },
          { day: 'Day 3', workout: 'Active Recovery: 20 min walk + mobility stretches', detail: 'Flush out lactic acid.' },
          { day: 'Day 4', workout: '4 rounds: 30s Burpees → 30s Butt Kicks → 30s Plank Hold', detail: 'Modulate burpees with or without push-up.' },
          { day: 'Day 5', workout: '4 rounds: 30s Jump Squats → 30s Shadow Boxing → 30s Bicycle Crunches', detail: 'Explode up on jump squats.' },
          { day: 'Day 6', workout: '15-min Tabata: 20s sprint in place / 10s rest × 8 rounds (2 cycles)', detail: 'True Tabata intensity.' },
          { day: 'Day 7', workout: 'Rest Day: Foam rolling & deep hydration', detail: 'Week 1 fat burn accomplished!' },
        ]
      },
      {
        day: 'Week 2 (Days 8–14)',
        task: 'Work-to-Rest Ratio Upgrade (40s on / 20s off)',
        summary: 'Increase time under tension to 40 seconds with reduced 20-second rest intervals.',
        dailyBreakdown: [
          { day: 'Day 8', workout: '4 rounds (40s on / 20s off): Jump Lunges → Push-ups → High Knees', detail: 'Feel the cardiovascular burn.' },
          { day: 'Day 9', workout: '4 rounds (40s on / 20s off): Burpees → Mountain Climbers → Squat Pulses', detail: 'Keep breathing rhythmic.' },
          { day: 'Day 10', workout: 'Active Recovery: 25 min outdoor brisk walk', detail: 'Low-intensity recovery session.' },
          { day: 'Day 11', workout: '4 rounds (40s on / 20s off): Tuck Jumps → Plank Jacks → Lateral Skaters', detail: 'Explosive plyometric workout.' },
          { day: 'Day 12', workout: 'Tabata Double: 8 rounds Mountain Climbers + 8 rounds High Knees (20s on/10s off)', detail: 'Pure aerobic capacity builder.' },
          { day: 'Day 13', workout: 'Full Body EMOM (Every Minute On the Minute) for 15 min: 10 Burpees each min', detail: 'Rest remainder of each minute.' },
          { day: 'Day 14', workout: 'Rest Day: Deep tissue massage/stretching', detail: 'Halfway through the 30-day HIIT challenge!' },
        ]
      },
      {
        day: 'Week 3 (Days 15–21)',
        task: 'High-Volume Plyo Circuits',
        summary: 'Explosive multi-joint sequences that maximize EPOC oxygen consumption.',
        dailyBreakdown: [
          { day: 'Day 15', workout: '5 rounds (40s on / 20s off): Burpee Broad Jumps → Mountain Climbers → Jump Squats', detail: 'Push distance on broad jumps.' },
          { day: 'Day 16', workout: '5 rounds (40s on / 20s off): Pike Push-ups → High Knees → Flutter Kicks', detail: 'Shoulders, cardio, and core.' },
          { day: 'Day 17', workout: 'Active Recovery: 20 min easy walk + yoga twists', detail: 'Nervous system recovery.' },
          { day: 'Day 18', workout: 'Pyramid HIIT: 20s → 30s → 40s → 50s → 40s → 30s → 20s intervals (Burpees & Squats)', detail: 'Climb the pyramid with power.' },
          { day: 'Day 19', workout: '5 rounds (45s on / 15s off): Star Jumps → Sprawls → Bear Crawls', detail: 'Unconventional functional cardio.' },
          { day: 'Day 20', workout: '16-min Tabata Blitz: Jump squats, Pushups, High Knees, Mountain Climbers (4 min each)', detail: 'Non-stop intensity.' },
          { day: 'Day 21', workout: 'Rest Day: Rehydrate, replenish glycogen, sleep well', detail: '3 weeks down, final stretch begins!' },
        ]
      },
      {
        day: 'Week 4 (Days 22–28)',
        task: 'Elite AMRAP & Density Drills',
        summary: 'As Many Rounds As Possible protocols designed to push peak athletic limits.',
        dailyBreakdown: [
          { day: 'Day 22', workout: '20 min AMRAP: 10 Burpees + 15 Jump Squats + 20 Mountain Climbers + 10 Pushups', detail: 'Record total rounds completed.' },
          { day: 'Day 23', workout: '5 rounds (45s on / 15s off): Speed Skaters → Jump Lunges → Commandos', detail: 'Cardio agility and core.' },
          { day: 'Day 24', workout: 'Active Recovery: 25 min brisk walk & hamstring mobility', detail: 'Rest muscles before final pushes.' },
          { day: 'Day 25', workout: 'Death by Burpees: Min 1: 3 burpees, Min 2: 6, Min 3: 9... up to 15 min', detail: 'Test your mental fortitude.' },
          { day: 'Day 26', workout: '5 rounds (45s on / 15s off): High Knees → Diamond Push-ups → V-ups', detail: 'Max effort during every 45s interval.' },
          { day: 'Day 27', workout: '20 min Tabata Championship (5 exercises × 8 rounds each)', detail: 'Your highest calorie burn day!' },
          { day: 'Day 28', workout: 'Rest Day: Light stretching & deep breathing', detail: 'Two days left to complete your transformation.' },
        ]
      },
      {
        day: 'Days 29–30',
        task: 'Grand 30-Day HIIT Crucible',
        summary: 'Final benchmark test and celebration workout to earn your certificate.',
        dailyBreakdown: [
          { day: 'Day 29', workout: '15 min moderate HIIT primer: 30s on / 30s off easy movements', detail: 'Prime your nervous system.' },
          { day: 'Day 30', workout: 'The 30-Day HIIT Crucible: 20 min non-stop multi-exercise finisher + cool-down', detail: 'Crushed it! You earned +700 XP and the HIIT Master Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd30-flexibility',
    duration: 30,
    durationLabel: '30-Day Fitness Consistency',
    level: 'Beginner to Intermediate • Medium',
    category: 'Flexibility',
    title: '30-Day Flexibility Journey',
    description: 'A progressive daily stretching journey to eliminate body stiffness, open hips, and improve mobility.',
    icon: '🧘',
    difficulty: 'Medium',
    xp: 500,
    participants: 1250,
    tasks: [
      {
        day: 'Week 1 (Days 1–7)',
        task: 'Joint Mobility & Spinal Decompression',
        summary: 'Awaken stiff joints, release lower back tension, and open shoulders.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '20 min Spine & Neck Flow: Cat-Cow (10 reps), Child Pose (2 min), Thread-the-Needle (1 min/side)', detail: 'Breathe smoothly through nose.' },
          { day: 'Day 2', workout: '20 min Hips & Glutes: Pigeon pose (2 min/side) + Butterfly stretch (3 min)', detail: 'Keep hips square to the ground.' },
          { day: 'Day 3', workout: '20 min Hamstrings: Seated forward fold + Standing single-leg hamstring stretch', detail: 'Hold stretches for at least 45 seconds.' },
          { day: 'Day 4', workout: '20 min Chest & Shoulders: Doorway chest opener + Puppy pose + Reverse prayer', detail: 'Relieve rounded posture from desk work.' },
          { day: 'Day 5', workout: '20 min Lower Back & Hips: Supine spinal twists + Figure-4 stretch + Happy Baby', detail: 'Decompress lumbar vertebrae.' },
          { day: 'Day 6', workout: '25 min Full Body Sun Salutation series (6 slow rounds)', detail: 'Combine dynamic movement with static holds.' },
          { day: 'Day 7', workout: 'Restorative: 15 min Legs-up-the-wall pose + breathwork', detail: 'Week 1 complete! Notice newfound lightness.' },
        ]
      },
      {
        day: 'Week 2 (Days 8–14)',
        task: 'Deep Hamstring & Hip Flexor Opening',
        summary: 'Target the major contributors to pelvic tilt and tightness.',
        dailyBreakdown: [
          { day: 'Day 8', workout: '25 min Low Lunge & Lizard Pose progression (2 min each leg)', detail: 'Deep psoas and hip flexor release.' },
          { day: 'Day 9', workout: '25 min PNF Hamstring stretch (contract 5s / relax & stretch 25s × 4 rounds)', detail: 'Proprioceptive neuromuscular facilitation.' },
          { day: 'Day 10', workout: '20 min Quad & Hip flexor: King Arthur pose (foot against wall) + Standing quad pull', detail: 'Intense front-chain lengthening.' },
          { day: 'Day 11', workout: '20 min Thoracic Spine: Foam roller thoracic extension + Open-book stretch', detail: 'Improves upper back mobility.' },
          { day: 'Day 12', workout: '25 min Frog Pose & Straddle Stretch for inner thighs / adductors', detail: 'Open groin and inner hamstrings.' },
          { day: 'Day 13', workout: '25 min Downward Dog to Cobra flow + Triangle pose', detail: 'Calf, hamstring, and abdominal elongation.' },
          { day: 'Day 14', workout: 'Restorative Yin Yoga: 20 min long-hold Dragon pose & Child pose', detail: 'Two full weeks complete! Feeling flexible.' },
        ]
      },
      {
        day: 'Week 3 (Days 15–21)',
        task: 'Middle Splits & Lateral Mobility',
        summary: 'Progress toward deeper lateral split and pancake stretches.',
        dailyBreakdown: [
          { day: 'Day 15', workout: '25 min Pancake Stretch & Wide-leg seated forward bend', detail: 'Reach chest toward the floor.' },
          { day: 'Day 16', workout: '25 min Deep Pigeon + Cow Face Pose (Gomukhasana) for outer hips', detail: 'Releases piriformis and IT band.' },
          { day: 'Day 17', workout: '20 min Shoulder & Overhead Mobility: Wall angels + Lat stretches with towel', detail: 'Enhances overhead reach.' },
          { day: 'Day 18', workout: '30 min Front Split Preparation (Half-split, Low lunge, Full split block support)', detail: 'Use yoga blocks or pillows under hips.' },
          { day: 'Day 19', workout: '20 min Backbend prep: Bridge pose + Camel pose (Ustrasana)', detail: 'Open heart and stretch anterior chain.' },
          { day: 'Day 20', workout: '30 min Vinyasa Yoga Flow combining all peak stretches', detail: 'Continuous, mindful breathing flow.' },
          { day: 'Day 21', workout: 'Restorative: 20 min Savasana and gentle spinal decompression', detail: '3 weeks finished! 9 days to full transformation.' },
        ]
      },
      {
        day: 'Week 4 (Days 22–28)',
        task: 'Full Splits & Advanced Range of Motion',
        summary: 'Unlock maximum joint range of motion and effortless posture.',
        dailyBreakdown: [
          { day: 'Day 22', workout: '30 min Front Split Deep Holds (3 min per leg with support)', detail: 'Relax into the stretch without tensing.' },
          { day: 'Day 23', workout: '25 min Side Split / Frog Pose Deep Hold (3 min holds)', detail: 'Dramatic adductor flexibility gains.' },
          { day: 'Day 24', workout: '25 min Wheel Pose (Urdhva Dhanurasana) & Full Backbend Mobility', detail: 'Shoulder, hip, and chest opening.' },
          { day: 'Day 25', workout: '25 min Standing Balance & Flexibility (Dancer Pose, Extended Hand-to-Big-Toe)', detail: 'Combines strength with flexibility.' },
          { day: 'Day 26', workout: '30 min Deep Tissue Release & Passive Stretch Sequence', detail: 'Unwind any remaining muscle knots.' },
          { day: 'Day 27', workout: '30 min Full Splits & Pancake Milestone Assessment', detail: 'Take a photo to measure your 30-day progress!' },
          { day: 'Day 28', workout: 'Restorative: 20 min Gentle yoga flow + meditation', detail: 'Prepare for the final celebration days.' },
        ]
      },
      {
        day: 'Days 29–30',
        task: 'Flexibility Mastery Celebration',
        summary: 'Celebrate your elongated, supple, pain-free body with a complete yoga routine.',
        dailyBreakdown: [
          { day: 'Day 29', workout: '20 min gentle joint mobility & full spinal flow', detail: 'Stay loose and relaxed.' },
          { day: 'Day 30', workout: '40 min Master Yoga & Flexibility Flow + Medal Celebration', detail: 'Mastery achieved! Claim your +500 XP and Certificate.' },
        ]
      },
    ],
  },

  /* ============================================================
     40-DAY CHALLENGES (ALL 5 CATEGORIES)
     ============================================================ */
  {
    id: 'd40-cardio',
    duration: 40,
    durationLabel: '40-Day Cardio & Stamina',
    level: 'Intermediate • Medium to Hard',
    category: 'Cardio',
    title: '40-Day Cardio Stamina Builder',
    description: 'Push your aerobic threshold with 40 days of structured cardio, tempo runs, and interval training.',
    icon: '🚀',
    difficulty: 'Medium to Hard',
    xp: 900,
    participants: 1600,
    tasks: [
      {
        day: 'Week 1 (Days 1–7)',
        task: 'Aerobic Base Foundation (30 min daily)',
        summary: 'Establish a reliable aerobic baseline with steady-state runs.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '30 min easy jog (conversational pace)', detail: 'Heart rate zone 2.' },
          { day: 'Day 2', workout: '30 min brisk walk with 5 incline surges', detail: 'Calf and glute conditioning.' },
          { day: 'Day 3', workout: '30 min steady jog', detail: 'Focus on smooth, quiet footstrikes.' },
          { day: 'Day 4', workout: '30 min cross-training (cycling or swimming)', detail: 'Low-impact cardio.' },
          { day: 'Day 5', workout: '30 min jog with 4 × 100m strides', detail: 'Neuromuscular speed priming.' },
          { day: 'Day 6', workout: '35 min long slow jog', detail: 'Building weekly mileage.' },
          { day: 'Day 7', workout: 'Active Recovery: 20 min walk + full stretch', detail: 'Week 1 complete!' },
        ]
      },
      {
        day: 'Week 2 (Days 8–14)',
        task: 'Tempo & Threshold Introduction',
        summary: '35 min sessions incorporating threshold pace segments.',
        dailyBreakdown: [
          { day: 'Day 8', workout: '35 min jog with 15 min tempo block at 80% effort', detail: 'Comfortably hard pacing.' },
          { day: 'Day 9', workout: '30 min easy recovery jog', detail: 'Zone 1–2 easy effort.' },
          { day: 'Day 10', workout: '35 min undulating hills run', detail: 'Drive arms uphill.' },
          { day: 'Day 11', workout: '30 min spin bike or brisk walk', detail: 'Joint relief day.' },
          { day: 'Day 12', workout: '35 min tempo run (2 × 10 min hard / 3 min easy)', detail: 'Lactate threshold stimulus.' },
          { day: 'Day 13', workout: '40 min long steady run', detail: 'Hydrate well during the run.' },
          { day: 'Day 14', workout: 'Active Rest: 20 min walk + mobility', detail: 'Week 2 finished strong!' },
        ]
      },
      {
        day: 'Week 3 (Days 15–21)',
        task: 'Intervals & Speed Endurance',
        summary: 'Track/interval repeats to elevate VO2 max and anaerobic capacity.',
        dailyBreakdown: [
          { day: 'Day 15', workout: '40 min session: 10 min warm-up + 6 × 400m fast intervals + 10 min cool-down', detail: 'Push pace on 400m repeats.' },
          { day: 'Day 16', workout: '30 min easy recovery jog', detail: 'Flush legs.' },
          { day: 'Day 17', workout: '40 min aerobic run with 5 × 30s hill sprints', detail: 'Power generation.' },
          { day: 'Day 18', workout: '35 min cycling or rower cross-training', detail: 'Zero pounding on knees.' },
          { day: 'Day 19', workout: 'Intervals: 8 × 200m sprints with 60s jog recovery', detail: 'Fast leg turnover.' },
          { day: 'Day 20', workout: '45 min weekend long distance run', detail: 'Sustain comfortable rhythm.' },
          { day: 'Day 21', workout: 'Active Recovery: 25 min walk & foam roll', detail: 'Halfway point reached!' },
        ]
      },
      {
        day: 'Week 4 (Days 22–28)',
        task: 'Endurance Escalation (45–50 min)',
        summary: 'Extend continuous running duration and mental resilience.',
        dailyBreakdown: [
          { day: 'Day 22', workout: '45 min continuous steady-state run', detail: 'Consistent splits throughout.' },
          { day: 'Day 23', workout: '35 min recovery jog + core stability (3×45s planks)', detail: 'Running economy maintenance.' },
          { day: 'Day 24', workout: '45 min fartlek run (alternating 2 min fast / 2 min slow)', detail: 'Speed endurance.' },
          { day: 'Day 25', workout: '35 min brisk walk or indoor spin', detail: 'Keep heart rate in zone 2.' },
          { day: 'Day 26', workout: '45 min run with 6 × 100m strides', detail: 'Light and bouncy stride.' },
          { day: 'Day 27', workout: '50 min long slow endurance run', detail: 'Peak volume for the week.' },
          { day: 'Day 28', workout: 'Active Rest: 20 min walk + leg stretches', detail: '4 weeks down, 12 days to go!' },
        ]
      },
      {
        day: 'Week 5 (Days 29–35)',
        task: 'Peak Volume & Sprint Finishers',
        summary: '50 min endurance blocks with high-intensity surge finishes.',
        dailyBreakdown: [
          { day: 'Day 29', workout: '50 min aerobic endurance run', detail: 'Smooth breathing, strong posture.' },
          { day: 'Day 30', workout: '40 min tempo run (20 min continuous tempo effort)', detail: 'Sustain 85% heart rate.' },
          { day: 'Day 31', workout: '30 min easy recovery walk/spin', detail: 'Recovery day.' },
          { day: 'Day 32', workout: '45 min interval ladder: 1 min, 2 min, 3 min, 2 min, 1 min fast surges', detail: 'Adapt to pace changes.' },
          { day: 'Day 33', workout: '35 min easy jog + 5 hill sprints', detail: 'Strength-endurance.' },
          { day: 'Day 34', workout: '55 min peak long run of the entire challenge', detail: 'Your highest mileage achievement!' },
          { day: 'Day 35', workout: 'Active Rest: 25 min gentle walk & yoga', detail: 'Final 5-day taper begins.' },
        ]
      },
      {
        day: 'Finale (Days 36–40)',
        task: 'The 40-Day Cardio Championship',
        summary: 'Tapering and final 60-minute endurance triumph.',
        dailyBreakdown: [
          { day: 'Day 36', workout: '35 min easy maintenance jog', detail: 'Keep legs fresh.' },
          { day: 'Day 37', workout: '30 min run with 4 × 50m strides', detail: 'Fast, sharp turnover.' },
          { day: 'Day 38', workout: '20 min light walk + full-body stretch', detail: 'Hydrate and sleep.' },
          { day: 'Day 39', workout: '25 min easy shakeout run', detail: 'Mental preparation.' },
          { day: 'Day 40', workout: '60 min Grand Victory Run & Medal Celebration!', detail: '40 Days of Cardio conquered! Earn +900 XP & Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd40-strength',
    duration: 40,
    durationLabel: '40-Day Cardio & Stamina',
    level: 'Intermediate • Medium to Hard',
    category: 'Strength',
    title: '40-Day Power & Hypertrophy',
    description: 'Combine progressive overload, density complexes, and periodization over 40 days to pack on lean muscle.',
    icon: '⚡',
    difficulty: 'Medium to Hard',
    xp: 950,
    participants: 1100,
    tasks: [
      {
        day: 'Week 1 (Days 1–7)',
        task: 'Hypertrophy Foundations: 4×10 Splits',
        summary: 'Target chest, back, legs, shoulders, and arms with strict 4×10 protocols.',
        dailyBreakdown: [
          { day: 'Day 1', workout: 'Chest & Triceps: Push-ups 4×12, Dips 4×12, Diamond Push-ups 3×10', detail: 'Rest 60s between sets.' },
          { day: 'Day 2', workout: 'Back & Biceps: Inverted Rows 4×12, Towel Rows 4×12, Supermans 4×15', detail: 'Squeeze shoulder blades.' },
          { day: 'Day 3', workout: 'Legs & Calves: Squats 4×20, Lunges 4×12/leg, Calf raises 4×25', detail: 'Full depth on squats.' },
          { day: 'Day 4', workout: 'Shoulders & Core: Pike Push-ups 4×10, Plank 4×45s, Side Planks 3×30s', detail: 'Vertical push focus.' },
          { day: 'Day 5', workout: 'Full Body Compound: Pushups 4×15 + Squats 4×20 superset', detail: 'High density conditioning.' },
          { day: 'Day 6', workout: 'Glutes & Hamstrings: Glute Bridges 4×25, Step-ups 4×12/leg', detail: 'Posterior chain focus.' },
          { day: 'Day 7', workout: 'Rest & Mobility: Foam roll & hamstring stretches', detail: 'Week 1 in the books.' },
        ]
      },
      {
        day: 'Week 2 (Days 8–14)',
        task: 'Time Under Tension (TUT) Phase',
        summary: '3-second eccentric descents on every rep to maximize micro-tear adaptations.',
        dailyBreakdown: [
          { day: 'Day 8', workout: 'Tempo Push: 3s descent pushups 4×10, Slow tempo dips 4×10', detail: 'Control the lowering phase.' },
          { day: 'Day 9', workout: 'Tempo Pull: 3s hold at top of rows 4×10, Prone Y-T-W 3×12', detail: 'Maximum back contraction.' },
          { day: 'Day 10', workout: 'Tempo Legs: 3s descent squats 4×15, Bulgarian split squats 3×10/leg', detail: 'Quad and glute burn.' },
          { day: 'Day 11', workout: 'Core Stability: Hollow body holds 4×25s, Deadbug 4×12, Russian Twists 4×20', detail: 'Deep core engagement.' },
          { day: 'Day 12', workout: 'Upper Body Superset: Pushups + Inverted rows (4 sets of 12 each)', detail: 'Short 45s rest.' },
          { day: 'Day 13', workout: 'Leg Endurance: 100 Squats + 50 Jump Lunges for time', detail: 'Record time.' },
          { day: 'Day 14', workout: 'Rest Day: Muscle recovery & hydration', detail: 'Week 2 complete!' },
        ]
      },
      {
        day: 'Week 3 (Days 15–21)',
        task: 'Supersets & Giant Sets',
        summary: 'Zero-rest antagonist supersets for immense muscle pump and metabolic conditioning.',
        dailyBreakdown: [
          { day: 'Day 15', workout: 'Giant Set 1: Push-ups (12) → Dips (12) → Pike Push-ups (10) × 4 rounds', detail: 'Upper body annihilation.' },
          { day: 'Day 16', workout: 'Giant Set 2: Rows (12) → Facepulls (15) → Superman hold (30s) × 4 rounds', detail: 'Back density.' },
          { day: 'Day 17', workout: 'Giant Set 3: Squats (20) → Jump Lunges (12) → Wall sit (45s) × 4 rounds', detail: 'Leg hypertrophy.' },
          { day: 'Day 18', workout: 'Core Giant Set: Plank (60s) → V-ups (15) → Bicycle Crunches (25) × 4 rounds', detail: 'Abdominal endurance.' },
          { day: 'Day 19', workout: 'Arm Specialization: Diamond pushups 4×12, Chair dips 4×15, Towel curls 4×15', detail: 'Biceps & triceps.' },
          { day: 'Day 20', workout: 'Lower Body Strength: Single-leg squats (pistol progression) 4×6/leg + Bridges 4×25', detail: 'Unilateral power.' },
          { day: 'Day 21', workout: 'Rest & Mobility: Deep hip flexor & chest openers', detail: 'Passing the halfway mark!' },
        ]
      },
      {
        day: 'Week 4 (Days 22–28)',
        task: 'Mechanical Drop Sets & Max Volume',
        summary: 'Progress from hardest variation to easiest without rest to exhaust all muscle fibers.',
        dailyBreakdown: [
          { day: 'Day 22', workout: 'Push Drop Set: Decline pushups (8) → Standard (10) → Knee pushups (12) × 4 rounds', detail: 'Total chest exhaustion.' },
          { day: 'Day 23', workout: 'Pull Drop Set: Single-arm rows (8/arm) → Two-arm rows (12) → Supermans (15) × 4', detail: 'Complete back stimulation.' },
          { day: 'Day 24', workout: 'Leg Drop Set: Jump squats (10) → Standard squats (15) → Wall sit (45s) × 4', detail: 'Lactate tolerance.' },
          { day: 'Day 25', workout: 'Core Matrix: Hanging/Lying leg raises 4×15, Russian twists 4×25, Planks 4×60s', detail: 'Iron core.' },
          { day: 'Day 26', workout: 'Upper Power: Clap/Explosive push-ups 4×8, Dips 4×15, Rows 4×15', detail: 'Fast-twitch fiber recruiting.' },
          { day: 'Day 27', workout: 'Lower Power: Broad jumps 4×8, Box/Chair step jumps 4×10/leg', detail: 'Explosive vertical and horizontal force.' },
          { day: 'Day 28', workout: 'Active Recovery: 20 min walk + light stretch', detail: '4 weeks complete! 12 days left.' },
        ]
      },
      {
        day: 'Week 5 (Days 29–35)',
        task: 'Heavy Density Complexes',
        summary: 'Complexes consisting of 4 movements performed back-to-back with minimal rest.',
        dailyBreakdown: [
          { day: 'Day 29', workout: 'Upper Complex: 5 rounds (12 pushups + 12 dips + 12 rows + 30s plank)', detail: 'Rest 90s between rounds.' },
          { day: 'Day 30', workout: 'Lower Complex: 5 rounds (15 squats + 10 lunges/leg + 20 calf raises + 30s wall sit)', detail: 'Leg stamina.' },
          { day: 'Day 31', workout: 'Core Complex: 4 rounds (15 leg raises + 20 twists + 15 v-ups + 45s side plank)', detail: 'Core stability.' },
          { day: 'Day 32', workout: 'Full Body Barbell/Bodyweight Simulation: 5 rounds of 20 squats + 15 pushups + 15 rows', detail: 'Total metabolic conditioning.' },
          { day: 'Day 33', workout: 'Arms & Shoulders Blast: Pike pushups 4×12, Dips 4×15, Bicep isometric holds 4×30s', detail: 'Upper body definition.' },
          { day: 'Day 34', workout: 'Leg Finisher: 150 bodyweight squats in minimal time', detail: 'Log your time.' },
          { day: 'Day 35', workout: 'Deload Rest: Light 15 min walk and deep stretching', detail: 'Final 5-day championship countdown.' },
        ]
      },
      {
        day: 'Finale (Days 36–40)',
        task: '40-Day Strength Championship',
        summary: 'Final PR testing and the 400-rep ultimate strength crucible.',
        dailyBreakdown: [
          { day: 'Day 36', workout: 'PR Testing Day 1: Max push-ups in 2 min + Max continuous plank hold', detail: 'Set new personal bests!' },
          { day: 'Day 37', workout: 'PR Testing Day 2: Max unbroken bodyweight squats + Max dips', detail: 'Compare with Day 1 numbers.' },
          { day: 'Day 38', workout: 'Deload Primer: 3 sets of 10 pushups + 10 squats + 30s plank', detail: 'Rest and fuel.' },
          { day: 'Day 39', workout: 'Rest Day: Foam roll and mental prep for final day', detail: 'Stay hydrated.' },
          { day: 'Day 40', workout: 'The 40-Day 400-Rep Crucible: 100 Push-ups + 150 Squats + 100 Core + 50 Dips!', detail: 'Legendary strength triumph! Claim +950 XP & Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd40-running',
    duration: 40,
    durationLabel: '40-Day Cardio & Stamina',
    level: 'Intermediate • Medium to Hard',
    category: 'Running',
    title: '40-Day Speed & Stamina',
    description: 'A 40-day intermediate running block designed to improve 5K/10K pace, track speed, and weekly distance.',
    icon: '💨',
    difficulty: 'Medium to Hard',
    xp: 850,
    participants: 1800,
    tasks: [
      {
        day: 'Week 1 (Days 1–7)',
        task: 'Baseline Mileage (3 to 3.5 miles steady)',
        summary: 'Establish weekly mileage rhythm and stride consistency.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '3.0 miles easy conversational run', detail: 'Check baseline pace.' },
          { day: 'Day 2', workout: '2.5 miles recovery jog + 4 × 50m strides', detail: 'Light and smooth.' },
          { day: 'Day 3', workout: '3.0 miles steady run with 2 hills', detail: 'Glute and knee drive.' },
          { day: 'Day 4', workout: 'Rest day or 20 min light spin', detail: 'Protect joints.' },
          { day: 'Day 5', workout: '3.5 miles steady aerobic run', detail: 'Pacing control.' },
          { day: 'Day 6', workout: '4.0 miles weekend long slow distance', detail: 'Fuel with water.' },
          { day: 'Day 7', workout: 'Active Recovery: 20 min walk & calf stretch', detail: 'Week 1 finished.' },
        ]
      },
      {
        day: 'Week 2 (Days 8–14)',
        task: 'Track Repeats (400m & 800m repeats)',
        summary: 'Introduce track intervals to build top-end aerobic power.',
        dailyBreakdown: [
          { day: 'Day 8', workout: '1 mile warm-up → 6 × 400m fast repeats (90s rest) → 1 mile cool-down', detail: 'Push your speed.' },
          { day: 'Day 9', workout: '3.0 miles easy recovery run', detail: 'Zone 2 heart rate.' },
          { day: 'Day 10', workout: '3.5 miles tempo run with 15 min at threshold pace', detail: 'Hold comfortably hard pace.' },
          { day: 'Day 11', workout: 'Rest day or 25 min walk', detail: 'Recovery.' },
          { day: 'Day 12', workout: '1 mile warm-up → 3 × 800m repeats (2 min rest) → 1 mile cool-down', detail: 'Sustain speed over 2 laps.' },
          { day: 'Day 13', workout: '4.5 miles steady weekend run', detail: 'Comfortable pace.' },
          { day: 'Day 14', workout: 'Active Rest: 20 min walk + foam rolling', detail: 'Week 2 in the books!' },
        ]
      },
      {
        day: 'Week 3 (Days 15–21)',
        task: 'Tempo Runs & Lactate Threshold',
        summary: 'Sustain brisk race-pace efforts for 20–25 minutes without fading.',
        dailyBreakdown: [
          { day: 'Day 15', workout: '4.0 miles: 1 mile warm-up → 2 miles continuous tempo → 1 mile cool-down', detail: 'Simulate race pace.' },
          { day: 'Day 16', workout: '3.0 miles recovery jog', detail: 'Keep effort low.' },
          { day: 'Day 17', workout: '1 mile warm-up → 8 × 200m sprint intervals → 1 mile cool-down', detail: 'Fast leg turnover.' },
          { day: 'Day 18', workout: 'Rest day + runner core routine (planks, bird-dogs)', detail: 'Core stability.' },
          { day: 'Day 19', workout: '4.0 miles steady aerobic run with 5 × 100m strides', detail: 'Light on feet.' },
          { day: 'Day 20', workout: '5.0 miles progressive long run (speed up last mile)', detail: 'Longest run of the block so far.' },
          { day: 'Day 21', workout: 'Active Recovery: 25 min walk & hamstring release', detail: 'Halfway point reached!' },
        ]
      },
      {
        day: 'Week 4 (Days 22–28)',
        task: 'Long Slow Distance (LSD) Progression (5.5–6 miles)',
        summary: 'Extend endurance capacity up to 6 continuous miles.',
        dailyBreakdown: [
          { day: 'Day 22', workout: '4.5 miles steady aerobic run', detail: 'Lock in 165+ cadence.' },
          { day: 'Day 23', workout: '3.0 miles easy shakeout run', detail: 'Active recovery.' },
          { day: 'Day 24', workout: '1 mile warm-up → (3 min fast / 2 min easy) × 6 → 1 mile cool-down', detail: 'Fartlek speedplay.' },
          { day: 'Day 25', workout: 'Rest day or 20 min light spin', detail: 'Rest joints.' },
          { day: 'Day 26', workout: '4.0 miles tempo run with 20 min at threshold', detail: 'Strong, rhythmic breathing.' },
          { day: 'Day 27', workout: '6.0 miles (10K equivalent) weekend long run', detail: 'Hydrate well; huge milestone!' },
          { day: 'Day 28', workout: 'Active Rest: 20 min walk + full lower body stretch', detail: 'Week 4 crushed! 12 days left.' },
        ]
      },
      {
        day: 'Week 5 (Days 29–35)',
        task: 'Speed Endurance & Hill Surges',
        summary: 'Hill workouts to build muscular power in quads, calves, and hips.',
        dailyBreakdown: [
          { day: 'Day 29', workout: '4.5 miles continuous steady run', detail: 'Feel the endurance gains.' },
          { day: 'Day 30', workout: '1 mile warm-up → 8 × 45s hill sprint surges → 1 mile cool-down', detail: 'Drive knees up high.' },
          { day: 'Day 31', workout: '3.5 miles recovery jog', detail: 'Easy recovery pace.' },
          { day: 'Day 32', workout: '1 mile warm-up → 5 × 1000m (1K) repeats at 5K pace → 1 mile cool-down', detail: 'Peak speed-endurance.' },
          { day: 'Day 33', workout: 'Rest day + foam roll and hydrate', detail: 'Taper phase approaching.' },
          { day: 'Day 34', workout: '6.2 miles (Official 10K distance) long run', detail: 'Full 10K distance in training!' },
          { day: 'Day 35', workout: 'Active Recovery: 25 min walk & yoga flow', detail: 'Final 5-day championship week.' },
        ]
      },
      {
        day: 'Finale (Days 36–40)',
        task: 'The 40-Day Runner Championship',
        summary: 'Tapering and final 10K personal record time-trial.',
        dailyBreakdown: [
          { day: 'Day 36', workout: '3.0 miles easy shakeout run with 4 × 50m strides', detail: 'Keep legs sharp.' },
          { day: 'Day 37', workout: '2.5 miles easy jog', detail: 'Save energy for the finale.' },
          { day: 'Day 38', workout: 'Rest day + hydrate, carb replenish', detail: 'Full recovery.' },
          { day: 'Day 39', workout: '15 min light jog & mental focus', detail: 'Ready for race day.' },
          { day: 'Day 40', workout: 'Official 10K (6.2 Miles) PR Race & Medal Celebration!', detail: '40-Day Speed & Stamina conquered! Claim +850 XP & Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd40-hiit',
    duration: 40,
    durationLabel: '40-Day Cardio & Stamina',
    level: 'Intermediate • Medium to Hard',
    category: 'HIIT',
    title: '40-Day HIIT & Endurance Fusion',
    description: 'Alternate HIIT intervals and aerobic endurance for 40 days to build explosive athleticism and stamina.',
    icon: '🔥',
    difficulty: 'Medium to Hard',
    xp: 980,
    participants: 900,
    tasks: [
      {
        day: 'Week 1 (Days 1–7)',
        task: 'Metabolic & Aerobic Foundation',
        summary: '3 HIIT days + 2 steady cardio recovery days per week.',
        dailyBreakdown: [
          { day: 'Day 1', workout: 'HIIT: 4 rounds: 40s Burpees / 20s rest + 40s High Knees / 20s rest', detail: '20 min total.' },
          { day: 'Day 2', workout: 'Steady Cardio: 25 min easy jog or spin', detail: 'Aerobic recovery.' },
          { day: 'Day 3', workout: 'HIIT: 4 rounds: 40s Jump Squats / 20s rest + 40s Mountain Climbers', detail: 'High intensity.' },
          { day: 'Day 4', workout: 'Rest & Mobility: 20 min stretch', detail: 'Joint relief.' },
          { day: 'Day 5', workout: 'HIIT: Tabata 8 rounds sprint in place + 8 rounds push-ups', detail: 'Tabata protocol.' },
          { day: 'Day 6', workout: 'Steady Cardio: 30 min continuous jog', detail: 'Base endurance.' },
          { day: 'Day 7', workout: 'Active Recovery: 20 min walk + foam rolling', detail: 'Week 1 done.' },
        ]
      },
      {
        day: 'Week 2 (Days 8–14)',
        task: 'Plyometrics & Speed Agility',
        summary: 'Incorporate box jumps, skater hops, and lateral agility drills.',
        dailyBreakdown: [
          { day: 'Day 8', workout: 'HIIT Plyo: 4 rounds (45s on / 15s off): Skater Jumps → Tuck Jumps → Sprawls', detail: 'Explosive power.' },
          { day: 'Day 9', workout: 'Steady Cardio: 30 min jog with 4 × 50m strides', detail: 'Aerobic maintenance.' },
          { day: 'Day 10', workout: 'HIIT Core & Cardio: 4 rounds (45s on / 15s off): Burpees → V-ups → Bear Crawls', detail: 'Full body burn.' },
          { day: 'Day 11', workout: 'Rest Day: Deep tissue massage and hydration', detail: 'Recovery.' },
          { day: 'Day 12', workout: 'HIIT EMOM for 16 min: Min 1: 12 Jump Squats, Min 2: 12 Pushups, Min 3: 15 Mountain Climbers, Min 4: 10 Burpees', detail: 'EMOM density.' },
          { day: 'Day 13', workout: 'Steady Cardio: 35 min continuous run', detail: 'Longer aerobic block.' },
          { day: 'Day 14', workout: 'Active Rest: 20 min gentle walk', detail: 'Week 2 complete!' },
        ]
      },
      {
        day: 'Week 3 (Days 15–21)',
        task: 'Pyramids & AMRAP Circuits',
        summary: 'Escalating interval durations to challenge anaerobic capacity.',
        dailyBreakdown: [
          { day: 'Day 15', workout: 'HIIT Pyramid: 20s → 30s → 40s → 50s → 40s → 30s → 20s (Burpees & High knees)', detail: 'High lactate tolerance.' },
          { day: 'Day 16', workout: 'Steady Cardio: 35 min easy jog', detail: 'Flush metabolic waste.' },
          { day: 'Day 17', workout: '20 min AMRAP: 10 Burpees + 15 Squat Jumps + 20 Mountain Climbers + 10 Pushups', detail: 'Count rounds.' },
          { day: 'Day 18', workout: 'Rest day + full spinal mobility', detail: 'Midpoint rest.' },
          { day: 'Day 19', workout: 'HIIT Tabata Double: 16 min non-stop Tabata (4 movements)', detail: 'Max heart rate.' },
          { day: 'Day 20', workout: 'Steady Cardio: 40 min long steady endurance run', detail: 'Weekend aerobic volume.' },
          { day: 'Day 21', workout: 'Active Recovery: 25 min walk and stretch', detail: 'Halfway point reached!' },
        ]
      },
      {
        day: 'Week 4 (Days 22–28)',
        task: 'Escalated Intensity & Density',
        summary: '5 HIIT days with max effort power intervals.',
        dailyBreakdown: [
          { day: 'Day 22', workout: 'HIIT: 5 rounds (45s on / 15s off): Burpee Broad Jumps → High Knees → Plank Jacks', detail: 'Explosive power.' },
          { day: 'Day 23', workout: 'HIIT: 5 rounds (45s on / 15s off): Jump Lunges → Push-ups → Mountain Climbers', detail: 'Leg and chest pump.' },
          { day: 'Day 24', workout: 'Steady Cardio: 30 min recovery walk/spin', detail: 'Active recovery.' },
          { day: 'Day 25', workout: 'HIIT: 20 min Death by Burpees protocol', detail: 'Mental toughness.' },
          { day: 'Day 26', workout: 'HIIT: 5 rounds (45s on / 15s off): Star Jumps → Sprawls → Bicycle Crunches', detail: 'Cardio core.' },
          { day: 'Day 27', workout: 'Steady Cardio: 45 min long slow run', detail: 'Peak weekend endurance.' },
          { day: 'Day 28', workout: 'Rest Day: Foam rolling & deep hydration', detail: '4 weeks down, 12 days left!' },
        ]
      },
      {
        day: 'Week 5 (Days 29–35)',
        task: 'Elite Conditioning Protocols',
        summary: 'High-speed complex circuits combining strength and plyometrics.',
        dailyBreakdown: [
          { day: 'Day 29', workout: 'HIIT: 5 rounds (50s on / 10s off): Burpees → Jump Squats → Push-ups', detail: 'Extreme density.' },
          { day: 'Day 30', workout: 'Steady Cardio: 35 min tempo run', detail: 'Sustain threshold.' },
          { day: 'Day 31', workout: 'HIIT: 25 min AMRAP Challenge (5 exercises × 15 reps each)', detail: 'Record total score.' },
          { day: 'Day 32', workout: 'Rest day + hamstring and quad mobility', detail: 'Rest up.' },
          { day: 'Day 33', workout: 'HIIT: 20 min Tabata Championship', detail: 'Max speed.' },
          { day: 'Day 34', workout: 'Steady Cardio: 50 min endurance jog', detail: 'Long aerobic test.' },
          { day: 'Day 35', workout: 'Active Recovery: 25 min walk and yoga', detail: 'Final 5-day taper begins.' },
        ]
      },
      {
        day: 'Finale (Days 36–40)',
        task: '40-Day HIIT Crucible Championship',
        summary: 'Final testing and 25-minute ultimate endurance gauntlet.',
        dailyBreakdown: [
          { day: 'Day 36', workout: 'HIIT Primer: 15 min 30s on / 30s off easy movements', detail: 'Nervous system priming.' },
          { day: 'Day 37', workout: '30 min easy recovery jog', detail: 'Keep muscles loose.' },
          { day: 'Day 38', workout: 'Rest day + hydration and sleep', detail: 'Full replenishment.' },
          { day: 'Day 39', workout: '15 min shakeout walk and mobility', detail: 'Mental preparation.' },
          { day: 'Day 40', workout: 'The 40-Day 25-Min Non-Stop Ultimate HIIT Gauntlet + Medal Celebration!', detail: 'Conquered! Earn +980 XP and the Elite HIIT Athlete Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd40-flexibility',
    duration: 40,
    durationLabel: '40-Day Cardio & Stamina',
    level: 'Intermediate • Medium to Hard',
    category: 'Flexibility',
    title: '40-Day Deep Stretch Mastery',
    description: 'Achieve deep muscle flexibility, spinal health, and full split milestones through 40 days of PNF & Yin yoga.',
    icon: '🧘',
    difficulty: 'Medium',
    xp: 700,
    participants: 680,
    tasks: [
      {
        day: 'Week 1 (Days 1–7)',
        task: 'PNF Method & Fascial Release',
        summary: 'Contract-relax stretching for hamstrings, hips, and calves.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '25 min PNF Hamstring Routine: 5s contract / 25s relax (4 cycles per leg)', detail: 'Faster flexibility gains.' },
          { day: 'Day 2', workout: '25 min Hip Flexor PNF: Low lunge push against floor + deep sink', detail: 'Open tight hip flexors.' },
          { day: 'Day 3', workout: '20 min Spine & Thoracic: Foam roll extensions + Cat-Cow flows', detail: 'Decompress vertebrae.' },
          { day: 'Day 4', workout: '20 min Shoulder & Chest PNF: Doorway isometric press & release', detail: 'Correct rounded shoulders.' },
          { day: 'Day 5', workout: '25 min Pigeon pose & Figure-4 deep glute release', detail: 'Relieve sciatic tension.' },
          { day: 'Day 6', workout: '30 min Sun Salutation Vinyasa Flow', detail: 'Dynamic full-body warmup.' },
          { day: 'Day 7', workout: 'Restorative: 20 min Legs-up-the-wall + breathwork', detail: 'Week 1 complete.' },
        ]
      },
      {
        day: 'Week 2 (Days 8–14)',
        task: 'Passive 60-Second Holds',
        summary: 'Longer duration holds to stimulate deep tendon and fascial lengthening.',
        dailyBreakdown: [
          { day: 'Day 8', workout: '30 min Passive Hamstring & Calf: 60s holds per position', detail: 'Breathe into deep stretch.' },
          { day: 'Day 9', workout: '30 min Dragon Pose & Lizard Pose (2 min holds per side)', detail: 'Intense hip opening.' },
          { day: 'Day 10', workout: '25 min Pancake Stretch & Wide-leg seated forward fold', detail: 'Adductors and lower back.' },
          { day: 'Day 11', workout: '25 min Puppy Pose & Lat Openers (90s holds)', detail: 'Upper back expansion.' },
          { day: 'Day 12', workout: '30 min Frog Pose & Butterfly Pose deep groin release', detail: 'Inner thigh mobility.' },
          { day: 'Day 13', workout: '30 min Cobra, Camel, and Wheel pose progression', detail: 'Backbend flexibility.' },
          { day: 'Day 14', workout: 'Restorative: 20 min Yin yoga long holds', detail: 'Week 2 finished!' },
        ]
      },
      {
        day: 'Week 3 (Days 15–21)',
        task: 'Active Flexibility & End-Range Strength',
        summary: 'Build muscular strength at the limits of your range of motion.',
        dailyBreakdown: [
          { day: 'Day 15', workout: '30 min Active Hamstring: Leg lifts at end-range + seated forward fold', detail: 'Strength protects flexibility.' },
          { day: 'Day 16', workout: '30 min Standing Split & Warrior 3 balance flow', detail: 'Single-leg strength and flexibility.' },
          { day: 'Day 17', workout: '25 min Shoulder Dislocates with stick/band + Overhead squat mobility', detail: 'Scapular health.' },
          { day: 'Day 18', workout: '30 min Front Split Supported Holds (3 min per leg)', detail: 'Use yoga blocks.' },
          { day: 'Day 19', workout: '25 min Camel Pose to Bridge Pose active backbends', detail: 'Spinal extensor strength.' },
          { day: 'Day 20', workout: '35 min Full Body Power Yoga Flow', detail: 'Flow with continuous breath.' },
          { day: 'Day 21', workout: 'Restorative: 20 min Savasana and gentle spinal twist', detail: 'Halfway mark reached!' },
        ]
      },
      {
        day: 'Week 4 (Days 22–28)',
        task: 'Middle Split & Lateral Mastery',
        summary: 'Target deep pelvic mobility and side split progression.',
        dailyBreakdown: [
          { day: 'Day 22', workout: '35 min Middle Split Progression: Frog pose + Wall straddle stretch', detail: 'Gravity-assisted stretch.' },
          { day: 'Day 23', workout: '30 min Deep Pigeon & Double Pigeon (Firelog pose)', detail: 'Extreme outer hip opening.' },
          { day: 'Day 24', workout: '30 min Wheel Pose & Shoulder Inversion Mobility', detail: 'Open heart and chest.' },
          { day: 'Day 25', workout: '30 min Standing Dancer Pose & King Pigeon prep', detail: 'Full-body quad and backbend balance.' },
          { day: 'Day 26', workout: '35 min Yin Yoga: 4-minute holds per posture', detail: 'Deep fascial release.' },
          { day: 'Day 27', workout: '35 min Front & Side Split Benchmark Assessment', detail: 'Measure progress.' },
          { day: 'Day 28', workout: 'Restorative: 20 min Gentle meditation & breathwork', detail: 'Week 4 complete! 12 days left.' },
        ]
      },
      {
        day: 'Week 5 (Days 29–35)',
        task: 'Full Splits & Advanced Flows',
        summary: 'Sustain full split attempts with ease and deep diaphragmatic breath.',
        dailyBreakdown: [
          { day: 'Day 29', workout: '35 min Front Split Mastery Flow (4 min per leg)', detail: 'Relax pelvic floor.' },
          { day: 'Day 30', workout: '35 min Middle Split & Pancake Mastery Flow', detail: 'Chest flat on floor.' },
          { day: 'Day 31', workout: '30 min Full Backbend & Bridge walk-overs', detail: 'Supple spine.' },
          { day: 'Day 32', workout: '30 min Deep Joint Traction & Foam Rolling', detail: 'Unwind residual tightness.' },
          { day: 'Day 33', workout: '40 min Advanced Vinyasa Yoga Sequence', detail: 'Effortless fluid movement.' },
          { day: 'Day 34', workout: '35 min Restorative Long Holds', detail: 'Joint preservation.' },
          { day: 'Day 35', workout: 'Active Recovery: 25 min walking and light mobility', detail: 'Final 5-day celebration week.' },
        ]
      },
      {
        day: 'Finale (Days 36–40)',
        task: 'The 40-Day Flexibility Mastery Championship',
        summary: 'Final split testing and full 45-minute master yoga flow.',
        dailyBreakdown: [
          { day: 'Day 36', workout: '25 min gentle full body alignment flow', detail: 'Stay primed.' },
          { day: 'Day 37', workout: '25 min hip and hamstring light stretches', detail: 'Easy mobility.' },
          { day: 'Day 38', workout: '20 min spinal decompression & meditation', detail: 'Rest and recover.' },
          { day: 'Day 39', workout: '20 min gentle joint mobility warmup', detail: 'Mental focus.' },
          { day: 'Day 40', workout: '45 min Master Yoga & Full Splits Milestone Ceremony!', detail: '40-Day Flexibility Mastered! Claim +700 XP & Certificate.' },
        ]
      },
    ],
  },

  /* ============================================================
     50-DAY & 60-DAY CHALLENGES (ALL 5 CATEGORIES)
     ============================================================ */
  {
    id: 'd50-cardio',
    duration: 50,
    durationLabel: '50-Day Strength Builder',
    level: 'Intermediate • Medium to Hard',
    category: 'Cardio',
    title: '50-Day Cardio Transformation',
    description: '50-day structured cardio program evolving from 30-minute base jogs to 60-minute race readiness.',
    icon: '🏃',
    difficulty: 'Medium to Hard',
    xp: 1100,
    participants: 1300,
    tasks: [
      {
        day: 'Phase 1 (Days 1–10)',
        task: 'Aerobic Base Construction (30–35 min daily)',
        summary: '10 continuous days of base aerobic building to establish high capillary density.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '30 min easy jog at conversational pace', detail: 'Zone 2 aerobic foundation.' },
          { day: 'Day 2', workout: '30 min brisk walk with 4 incline surges', detail: 'Low-impact uphill conditioning.' },
          { day: 'Day 3', workout: '35 min continuous steady jog', detail: 'Smooth, relaxed cadence.' },
          { day: 'Day 4', workout: '30 min cycling cross-training', detail: 'Knee and ankle recovery.' },
          { day: 'Day 5', workout: '35 min jog with 4 × 100m strides', detail: 'Leg turnover speed.' },
          { day: 'Day 6', workout: '40 min weekend long easy run', detail: 'Hydrate before starting.' },
          { day: 'Day 7', workout: 'Active Recovery: 20 min walk + full-body stretch', detail: 'Flush metabolic waste.' },
          { day: 'Day 8', workout: '35 min steady jog on rolling terrain', detail: 'Strengthen calves on small hills.' },
          { day: 'Day 9', workout: '30 min recovery run + 3×45s planks', detail: 'Core stability for runners.' },
          { day: 'Day 10', workout: '40 min continuous aerobic run', detail: 'Phase 1 complete! Aerobic base locked in.' },
        ]
      },
      {
        day: 'Phase 2 (Days 11–20)',
        task: 'Tempo & Threshold Development (35–45 min)',
        summary: 'Lactate threshold intervals combined with cross-training sessions.',
        dailyBreakdown: [
          { day: 'Day 11', workout: '35 min tempo run (15 min continuous threshold pace)', detail: 'Hold comfortably hard pace.' },
          { day: 'Day 12', workout: '30 min recovery jog or light spin', detail: 'Keep effort in zone 1.' },
          { day: 'Day 13', workout: '40 min run with 5 × 45s hill sprint surges', detail: 'Develop glute and quad power.' },
          { day: 'Day 14', workout: '35 min stationary bike or outdoor cycling (RPM 85)', detail: 'Zero pounding cross-training.' },
          { day: 'Day 15', workout: '40 min tempo run (2 × 12 min hard / 3 min recovery)', detail: 'Expand lactate clearance.' },
          { day: 'Day 16', workout: '30 min easy recovery jog', detail: 'Stay relaxed and loose.' },
          { day: 'Day 17', workout: '45 min long steady run', detail: 'Consistent splits throughout.' },
          { day: 'Day 18', workout: 'Active Rest: 25 min walk & foam rolling', detail: 'Protect tendons and joints.' },
          { day: 'Day 19', workout: '40 min fartlek run (2 min fast / 2 min easy × 8)', detail: 'Speed endurance.' },
          { day: 'Day 20', workout: '45 min continuous steady-state run', detail: 'Phase 2 complete! 20 days strong.' },
        ]
      },
      {
        day: 'Phase 3 (Days 21–30)',
        task: 'Track Intervals & Speed Endurance (40–50 min)',
        summary: '8×400m track intervals and mid-distance speedplay.',
        dailyBreakdown: [
          { day: 'Day 21', workout: '10 min warmup → 8 × 400m fast repeats (75s rest) → 10 min cool-down', detail: 'Push pace on each 400m lap.' },
          { day: 'Day 22', workout: '35 min easy recovery run', detail: 'Flush lactic acid.' },
          { day: 'Day 23', workout: '45 min progressive run (speed up last 15 min)', detail: 'Teach body to finish fast.' },
          { day: 'Day 24', workout: '35 min cycling or rowing cross-training', detail: 'Aerobic recovery.' },
          { day: 'Day 25', workout: '10 min warmup → 4 × 800m repeats (2 min rest) → 10 min cool-down', detail: 'Sustain race pace.' },
          { day: 'Day 26', workout: '35 min easy recovery run + 5 strides', detail: 'Stay bouncy.' },
          { day: 'Day 27', workout: '50 min weekend long slow distance', detail: 'Fuel with water and electrolytes.' },
          { day: 'Day 28', workout: 'Active Recovery: 20 min walk & deep stretch', detail: 'Full lower body stretch.' },
          { day: 'Day 29', workout: '45 min tempo run (20 min sustained threshold)', detail: 'Strong aerobic power.' },
          { day: 'Day 30', workout: '50 min continuous steady run', detail: 'Phase 3 complete! 30 days down.' },
        ]
      },
      {
        day: 'Phase 4 (Days 31–40)',
        task: 'Progressive Long Distance (50–55 min)',
        summary: 'Weekend long runs increasing from 50 to 55 minutes.',
        dailyBreakdown: [
          { day: 'Day 31', workout: '50 min continuous aerobic run', detail: 'Steady breathing and cadence.' },
          { day: 'Day 32', workout: '35 min easy recovery jog', detail: 'Zone 1 recovery.' },
          { day: 'Day 33', workout: '45 min hill run with 6 × 60s hill charges', detail: 'Leg power building.' },
          { day: 'Day 34', workout: '40 min cycling or swimming', detail: 'Low-impact cross training.' },
          { day: 'Day 35', workout: '50 min tempo run (2 × 15 min at threshold pace)', detail: 'High aerobic output.' },
          { day: 'Day 36', workout: '35 min easy recovery run', detail: 'Stay loose.' },
          { day: 'Day 37', workout: '55 min peak weekend long run', detail: 'Longest continuous run yet.' },
          { day: 'Day 38', workout: 'Active Rest: 25 min walk + foam rolling', detail: 'Tendon and muscle care.' },
          { day: 'Day 39', workout: '45 min fartlek speedplay (1 min sprint / 1 min jog × 12)', detail: 'High VO2 max stimulation.' },
          { day: 'Day 40', workout: '50 min continuous steady-state run', detail: 'Phase 4 complete! 40 days conquered.' },
        ]
      },
      {
        day: 'Phase 5 (Days 41–50)',
        task: 'Peak 60-Min Victory & Championship',
        summary: 'Tapering and the grand 60-minute continuous run celebration.',
        dailyBreakdown: [
          { day: 'Day 41', workout: '50 min aerobic run with 5 × 100m strides', detail: 'Sharp turnover.' },
          { day: 'Day 42', workout: '40 min easy recovery jog', detail: 'Keep effort light.' },
          { day: 'Day 43', workout: '45 min tempo run (15 min at 10K race pace)', detail: 'Race simulation.' },
          { day: 'Day 44', workout: '30 min easy spin or walk', detail: 'Tapering begins.' },
          { day: 'Day 45', workout: '35 min easy jog + 4 strides', detail: 'Stay primed.' },
          { day: 'Day 46', workout: '30 min easy shakeout run', detail: 'Relaxed breathing.' },
          { day: 'Day 47', workout: 'Rest day: Hydrate, foam roll, sleep 8+ hours', detail: 'Full replenishment.' },
          { day: 'Day 48', workout: '20 min light jog & mental visualization', detail: 'Almost at the summit.' },
          { day: 'Day 49', workout: '15 min gentle walk + full body stretch', detail: 'Final prep before Day 50.' },
          { day: 'Day 50', workout: '60 Min Grand Victory Run & Half-Marathon Readiness Celebration!', detail: '50 Days of Cardio conquered! Claim +1,100 XP & Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd50-strength',
    duration: 50,
    durationLabel: '50-Day Strength Builder',
    level: 'Intermediate • Medium to Hard',
    category: 'Strength',
    title: '50-Day Elite Strength Program',
    description: 'Periodized 50-day strength protocols — Accumulation, Intensification, Peaking, and Realization.',
    icon: '🏋️',
    difficulty: 'Medium to Hard',
    xp: 1200,
    participants: 850,
    tasks: [
      {
        day: 'Phase 1: Accumulation (Days 1–12)',
        task: 'High Volume Hypertrophy (4×12 all muscle groups)',
        summary: '12 days of high-volume foundation work to maximize muscular hypertrophy.',
        dailyBreakdown: [
          { day: 'Day 1', workout: 'Chest & Triceps: Push-ups 4×12, Dips 4×12, Incline Push-ups 4×12', detail: '60s rest.' },
          { day: 'Day 2', workout: 'Back & Biceps: Inverted Rows 4×12, Towel Pulls 4×12, Supermans 4×15', detail: 'Squeeze lats.' },
          { day: 'Day 3', workout: 'Legs: Squats 4×20, Lunges 4×12/leg, Glute Bridges 4×25', detail: 'Full range of motion.' },
          { day: 'Day 4', workout: 'Shoulders & Core: Pike Pushups 4×10, Plank 4×60s, Russian Twists 4×20', detail: 'Deltoid and core.' },
          { day: 'Day 5', workout: 'Rest & Mobility: Foam rolling & hamstring stretches', detail: 'Active recovery.' },
          { day: 'Day 6', workout: 'Upper Body Blend: Push-ups 4×15 + Inverted Rows 4×12 superset', detail: 'Antagonist pairs.' },
          { day: 'Day 7', workout: 'Lower Body Burn: Bulgarian Split Squats 4×10/leg + Calf raises 4×25', detail: 'Unilateral focus.' },
          { day: 'Day 8', workout: 'Arms & Core: Diamond pushups 4×12, Chair dips 4×15, Leg raises 4×15', detail: 'Arm specialization.' },
          { day: 'Day 9', workout: 'Full Body Circuit: 4 rounds (15 squats + 12 pushups + 12 rows + 30s plank)', detail: 'High density.' },
          { day: 'Day 10', workout: 'Posterior Chain: Glute Bridges 4×30, Supermans 4×20s, Single-leg deadlifts 3×10/leg', detail: 'Hamstrings & lower back.' },
          { day: 'Day 11', workout: 'Core Fortress: Hollow body hold 4×30s, Side planks 3×45s/side', detail: 'Core stability.' },
          { day: 'Day 12', workout: 'Deload Rest Day: 20 min walk + light mobility', detail: 'Accumulation phase complete!' },
        ]
      },
      {
        day: 'Phase 2: Intensification (Days 13–25)',
        task: 'Heavy Progressive Overload (5×5 / 5×8 Protocols)',
        summary: 'Increase resistance and mechanical tension on major compound patterns.',
        dailyBreakdown: [
          { day: 'Day 13', workout: 'Heavy Push: Decline Push-ups 5×8, Weighted/Deep Dips 5×8', detail: 'Focus on pure force.' },
          { day: 'Day 14', workout: 'Heavy Pull: Single-Arm Rows 5×8/arm, Towel Chin-ups 5×6', detail: 'Max back tension.' },
          { day: 'Day 15', workout: 'Heavy Legs: Jump Squats 5×8 (explosive) + Pistol squat progressions 4×5/leg', detail: 'Lower power.' },
          { day: 'Day 16', workout: 'Heavy Shoulders & Core: Wall Handstand Hold 4×30s, Pike Push-ups 5×8', detail: 'Shoulder stability.' },
          { day: 'Day 17', workout: 'Rest & Deep Stretch: Hip flexors and thoracic release', detail: 'Recovery.' },
          { day: 'Day 18', workout: 'Compound Power: 5 rounds (8 explosive pushups + 8 jump squats + 8 rows)', detail: 'Fast-twitch power.' },
          { day: 'Day 19', workout: 'Unilateral Legs: Step-ups 5×8/leg + Single-leg glute bridges 4×12/leg', detail: 'Glute max activation.' },
          { day: 'Day 20', workout: 'Upper Density: 5 rounds of 10 push-ups + 10 dips + 10 rows (45s rest)', detail: 'Dense upper volume.' },
          { day: 'Day 21', workout: 'Core Iron: Hanging/Lying strict leg raises 5×10 + Ab wheel/walkouts 4×8', detail: 'Strict form.' },
          { day: 'Day 22', workout: 'Posterior Power: Broad jumps 5×5 + Nordic curl progressions 4×6', detail: 'Hamstring strength.' },
          { day: 'Day 23', workout: 'Upper Body Pump: Diamond pushups 5×10 + Dips 5×12 + Rows 5×12', detail: 'Upper exhaustion.' },
          { day: 'Day 24', workout: 'Leg Endurance: 150 bodyweight squats for time', detail: 'Record time.' },
          { day: 'Day 25', workout: 'Rest Day: Muscle replenishment & hydration', detail: 'Halfway mark reached (25 days)!' },
        ]
      },
      {
        day: 'Phase 3: Peaking (Days 26–38)',
        task: 'Near-Max Loads & Density Complexes',
        summary: 'Peak neuromuscular efficiency and maximum force output.',
        dailyBreakdown: [
          { day: 'Day 26', workout: 'Peak Push: 6 sets of 6 strict deficit push-ups + 6 heavy dips', detail: 'Full 90s rest.' },
          { day: 'Day 27', workout: 'Peak Pull: 6 sets of 6 strict horizontal rows + 6 single-arm rows', detail: 'Heavy contraction.' },
          { day: 'Day 28', workout: 'Peak Legs: 6 sets of 6 maximal jump squats + 6 step-jumps/leg', detail: 'Vertical force.' },
          { day: 'Day 29', workout: 'Peak Core: 5 sets of 15 V-ups + 5 sets of 60s planks', detail: 'Rock solid midsection.' },
          { day: 'Day 30', workout: 'Rest & Mobility: Deep tissue massage and mobility flows', detail: 'Prime nervous system.' },
          { day: 'Day 31', workout: 'Complex 1: 5 rounds (10 pushups → 10 dips → 10 rows → 10 squats)', detail: 'Zero rest in complex.' },
          { day: 'Day 32', workout: 'Complex 2: 5 rounds (15 jump squats → 10 lunges/leg → 45s wall sit)', detail: 'Leg power.' },
          { day: 'Day 33', workout: 'Complex 3: 5 rounds (12 diamond pushups → 12 pike pushups → 20 twists)', detail: 'Shoulder & arm density.' },
          { day: 'Day 34', workout: 'Rest Day: Foam rolling & nutrition replenishment', detail: 'Rest.' },
          { day: 'Day 35', workout: 'Speed-Strength: 6 sets of 4 explosive clap pushups + 6 sets of 4 box jumps', detail: 'Fast power.' },
          { day: 'Day 36', workout: 'Strength Endurance: 200 total squats + 100 pushups partitioned', detail: 'Record time.' },
          { day: 'Day 37', workout: 'Core & Grip: 5 rounds of 45s plank + 20s active hang/superman', detail: 'Grip & core.' },
          { day: 'Day 38', workout: 'Peak Phase Conclusion: Light walk and stretching', detail: 'Phase 3 complete!' },
        ]
      },
      {
        day: 'Phase 4: Deload (Days 39–45)',
        task: 'Active Recovery & Neural Reset',
        summary: 'Reduce volume by 50% to allow deep connective tissue and nervous system repair.',
        dailyBreakdown: [
          { day: 'Day 39', workout: 'Deload Push: 3 sets of 8 push-ups + 3 sets of 8 dips (60% effort)', detail: 'Easy, smooth reps.' },
          { day: 'Day 40', workout: 'Deload Pull: 3 sets of 8 rows + 3 sets of 10 supermans', detail: 'Focus on form.' },
          { day: 'Day 41', workout: 'Deload Legs: 3 sets of 12 bodyweight squats + 3 sets of 8 lunges/leg', detail: 'Zero soreness.' },
          { day: 'Day 42', workout: 'Rest Day: 25 min walk and yoga flow', detail: 'Hydrate well.' },
          { day: 'Day 43', workout: 'Deload Full Body: 2 sets of 10 pushups + 10 squats + 30s plank', detail: 'Keep motor patterns primed.' },
          { day: 'Day 44', workout: 'Active Recovery: Foam rolling, hip opening, hamstring stretch', detail: 'Tendon repair.' },
          { day: 'Day 45', workout: 'Rest Day: Sleep 8+ hours and prepare for Realization phase', detail: 'Nervous system fully recharged!' },
        ]
      },
      {
        day: 'Phase 5: Realization (Days 46–50)',
        task: 'Personal Best Testing & Championship',
        summary: 'Set all-time personal records in push-ups, squats, and the 500-rep finale.',
        dailyBreakdown: [
          { day: 'Day 46', workout: 'PR Testing 1: Max unbroken Push-ups + Max unbroken Bodyweight Squats', detail: 'Record your new PRs!' },
          { day: 'Day 47', workout: 'PR Testing 2: Max Plank hold for time + Max Dips unbroken', detail: 'Compare to Day 1 baseline.' },
          { day: 'Day 48', workout: 'Primer Day: 3 sets of 8 pushups + 8 squats + 30s plank', detail: 'Stay loose and focused.' },
          { day: 'Day 49', workout: 'Rest Day: Mental visualization and hydration', detail: 'Final day tomorrow.' },
          { day: 'Day 50', workout: 'The 50-Day 500-Rep Grand Championship: 150 Squats + 150 Push-ups + 100 Dips + 100 Core Reps!', detail: 'Elite Strength Title unlocked! Claim +1,200 XP & Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd50-running',
    duration: 50,
    durationLabel: '50-Day Strength Builder',
    level: 'Intermediate • Medium to Hard',
    category: 'Running',
    title: '50-Day 10K Prep',
    description: 'A 50-day rigorous running schedule designed to prep you for a strong, fast 10K (6.2 miles) finish.',
    icon: '⏱️',
    difficulty: 'Medium to Hard',
    xp: 1100,
    participants: 1400,
    tasks: [
      {
        day: 'Phase 1: Base Building (Days 1–15)',
        task: 'Aerobic Base (35–40 min daily runs)',
        summary: 'Establish weekly mileage and running economy.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '3.0 miles easy jog (conversational pace)', detail: 'Check baseline.' },
          { day: 'Day 2', workout: '3.0 miles easy jog + 4 × 50m strides', detail: 'Smooth stride.' },
          { day: 'Day 3', workout: '3.5 miles steady run on flat course', detail: 'Consistent cadence.' },
          { day: 'Day 4', workout: 'Rest day or 20 min spin', detail: 'Recovery.' },
          { day: 'Day 5', workout: '3.5 miles steady run with 2 hill surges', detail: 'Knee drive.' },
          { day: 'Day 6', workout: '4.0 miles weekend long run', detail: 'Aerobic volume.' },
          { day: 'Day 7', workout: 'Active Recovery: 20 min walk & calf stretch', detail: 'Week 1 complete.' },
          { day: 'Day 8', workout: '3.5 miles steady run', detail: 'Rhythmic breathing.' },
          { day: 'Day 9', workout: '3.0 miles recovery jog + runner core (3×45s planks)', detail: 'Core stability.' },
          { day: 'Day 10', workout: '4.0 miles steady aerobic run', detail: 'Easy effort.' },
          { day: 'Day 11', workout: 'Rest day or 25 min walk', detail: 'Tendon rest.' },
          { day: 'Day 12', workout: '4.0 miles run with 5 × 100m strides', detail: 'Speed priming.' },
          { day: 'Day 13', workout: '4.5 miles long steady run', detail: 'Comfortable pace.' },
          { day: 'Day 14', workout: 'Active Rest: 20 min walk + foam rolling', detail: '2 weeks down.' },
          { day: 'Day 15', workout: '4.0 miles benchmark pace run', detail: 'Phase 1 completed!' },
        ]
      },
      {
        day: 'Phase 2: Speed & Hills (Days 16–30)',
        task: 'Hill Sprints & Threshold Intervals',
        summary: 'Build lactate clearance and leg power with hill intervals.',
        dailyBreakdown: [
          { day: 'Day 16', workout: '1 mile warm-up → 8 × 45s steep hill sprints → 1 mile cool-down', detail: 'Max uphill drive.' },
          { day: 'Day 17', workout: '3.5 miles easy recovery jog', detail: 'Zone 2 heart rate.' },
          { day: 'Day 18', workout: '4.5 miles: 1 mile warm-up → 2.5 miles tempo at 10K pace → 1 mile cool-down', detail: 'Race simulation.' },
          { day: 'Day 19', workout: 'Rest day or 20 min light spin', detail: 'Joint rest.' },
          { day: 'Day 20', workout: '1 mile warm-up → 6 × 800m repeats (90s rest) → 1 mile cool-down', detail: 'Track speed.' },
          { day: 'Day 21', workout: '3.5 miles easy recovery run', detail: 'Flush legs.' },
          { day: 'Day 22', workout: '5.0 miles progressive weekend run (fast final mile)', detail: 'Finishing speed.' },
          { day: 'Day 23', workout: 'Active Rest: 25 min walk & hamstring mobility', detail: 'Recovery.' },
          { day: 'Day 24', workout: '4.0 miles fartlek run (2 min hard / 2 min easy × 8)', detail: 'Fartlek power.' },
          { day: 'Day 25', workout: '3.5 miles recovery jog + 4 strides', detail: 'Stay sharp.' },
          { day: 'Day 26', workout: '1 mile warm-up → 4 × 1200m repeats (2 min rest) → 1 mile cool-down', detail: 'Long intervals.' },
          { day: 'Day 27', workout: 'Rest day + foam roll and hydrate', detail: 'Rest.' },
          { day: 'Day 28', workout: '5.5 miles long steady run', detail: 'Closing in on 6 miles.' },
          { day: 'Day 29', workout: 'Active Recovery: 20 min walk + full stretch', detail: 'Stretch.' },
          { day: 'Day 30', workout: '4.5 miles tempo run (3 miles sustained at race pace)', detail: 'Phase 2 complete! 30 days strong.' },
        ]
      },
      {
        day: 'Phase 3: Volume & Peak (Days 31–45)',
        task: 'Peak Long Runs up to 7–8 Miles',
        summary: 'Over-distance training to make the 10K (6.2 miles) feel comfortable.',
        dailyBreakdown: [
          { day: 'Day 31', workout: '5.0 miles steady aerobic run', detail: 'Effortless pacing.' },
          { day: 'Day 32', workout: '3.5 miles recovery jog', detail: 'Zone 1.' },
          { day: 'Day 33', workout: '1 mile warm-up → 5 × 1000m (1K) repeats at 5K pace → 1 mile cool-down', detail: 'High speed.' },
          { day: 'Day 34', workout: 'Rest day or 25 min walk', detail: 'Rest.' },
          { day: 'Day 35', workout: '5.0 miles run with 6 × 100m strides', detail: 'Turnover.' },
          { day: 'Day 36', workout: '6.5 miles (over 10K distance) long run', detail: 'Peak volume milestone.' },
          { day: 'Day 37', workout: 'Active Rest: 25 min walk + foam rolling', detail: 'Muscle care.' },
          { day: 'Day 38', workout: '4.5 miles tempo run with 20 min threshold', detail: 'Lactate clearance.' },
          { day: 'Day 39', workout: '3.5 miles easy recovery jog', detail: 'Flush.' },
          { day: 'Day 40', workout: '1 mile warm-up → 10 × 400m speed repeats → 1 mile cool-down', detail: 'Peak speed day.' },
          { day: 'Day 41', workout: 'Rest day + runner core workout', detail: 'Core stability.' },
          { day: 'Day 42', workout: '7.5 miles peak long run of the 50-day program', detail: 'Longest run of your life!' },
          { day: 'Day 43', workout: 'Active Recovery: 25 min walk & deep stretch', detail: 'Taper begins.' },
          { day: 'Day 44', workout: '4.0 miles easy aerobic run', detail: 'Light and smooth.' },
          { day: 'Day 45', workout: '3.5 miles easy run with 4 strides', detail: 'Phase 3 complete! Taper time.' },
        ]
      },
      {
        day: 'Phase 4: Taper & Race Day (Days 46–50)',
        task: 'The 50-Day 10K Championship Race',
        summary: 'Taper volume, maintain sharpness, and crush the official 10K race.',
        dailyBreakdown: [
          { day: 'Day 46', workout: '3.0 miles easy shakeout run with 4 × 50m strides', detail: 'Stay bouncy.' },
          { day: 'Day 47', workout: '2.5 miles easy jog', detail: 'Save energy.' },
          { day: 'Day 48', workout: 'Rest day: Hydrate, carb replenish, sleep 8+ hours', detail: 'Prime body.' },
          { day: 'Day 49', workout: '15 min light jog & mental focus', detail: 'Ready for race day.' },
          { day: 'Day 50', workout: 'Official 10K (6.2 Miles) Race Day & Victory Ceremony!', detail: '50-Day 10K conquered! Claim +1,100 XP & Official Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd50-hiit',
    duration: 50,
    durationLabel: '50-Day Strength Builder',
    level: 'Intermediate • Medium to Hard',
    category: 'HIIT',
    title: '50-Day HIIT Mastery',
    description: '50 days of escalating HIIT intensity to maximize cardiovascular capacity and ignite metabolism.',
    icon: '🔥',
    difficulty: 'Hard',
    xp: 1250,
    participants: 720,
    tasks: [
      {
        day: 'Phase 1 (Days 1–10)',
        task: 'Tabata & Work-to-Rest Base (20 min daily)',
        summary: 'Establish anaerobic tolerance with structured Tabata sets.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '4 rounds (30s on / 30s off): Burpees → Mountain Climbers → Squats', detail: 'High intensity.' },
          { day: 'Day 2', workout: '4 rounds (30s on / 30s off): High Knees → Push-ups → Skater Hops', detail: 'Full body.' },
          { day: 'Day 3', workout: 'Active Recovery: 20 min walk + stretching', detail: 'Recovery.' },
          { day: 'Day 4', workout: 'Tabata 16 min: 8 rounds Jump Squats + 8 rounds Pushups (20s on/10s off)', detail: 'True Tabata.' },
          { day: 'Day 5', workout: '4 rounds (40s on / 20s off): Tuck Jumps → Bear Crawls → Bicycle Crunches', detail: 'Cardio core.' },
          { day: 'Day 6', workout: '15 min EMOM: 10 Burpees each minute', detail: 'Fast pace.' },
          { day: 'Day 7', workout: 'Rest Day: Foam rolling and hydration', detail: 'Rest.' },
          { day: 'Day 8', workout: '4 rounds (40s on / 20s off): Star Jumps → Sprawls → Mountain Climbers', detail: 'Explosive.' },
          { day: 'Day 9', workout: '20 min AMRAP: 8 Burpees + 12 Squats + 10 Pushups', detail: 'Score rounds.' },
          { day: 'Day 10', workout: 'Active Recovery: 25 min walk and yoga', detail: 'Phase 1 done (10 days)!' },
        ]
      },
      {
        day: 'Phase 2 (Days 11–20)',
        task: 'Plyometrics & Battle Drills (25 min daily)',
        summary: 'Increase workout duration to 25 minutes with explosive plyometric complexes.',
        dailyBreakdown: [
          { day: 'Day 11', workout: '5 rounds (40s on / 20s off): Jump Lunges → Pushups → Mountain Climbers', detail: '25 min total.' },
          { day: 'Day 12', workout: '20 min Pyramid HIIT: 20s → 40s → 60s → 40s → 20s intervals', detail: 'High lactate tolerance.' },
          { day: 'Day 13', workout: 'Active Recovery: 25 min brisk walk', detail: 'Flush legs.' },
          { day: 'Day 14', workout: '5 rounds (45s on / 15s off): Burpee Broad Jumps → High Knees → Plank Jacks', detail: 'Plyo power.' },
          { day: 'Day 15', workout: 'Tabata Double: 16 min Tabata (4 movements × 8 rounds each)', detail: 'Peak speed.' },
          { day: 'Day 16', workout: '20 min EMOM: 12 Jump Squats + 8 Pushups every minute', detail: 'Density.' },
          { day: 'Day 17', workout: 'Rest Day: Deep tissue massage and recovery', detail: 'Rest.' },
          { day: 'Day 18', workout: '5 rounds (45s on / 15s off): Skater Hops → Sprawls → V-ups', detail: 'Agility.' },
          { day: 'Day 19', workout: '25 min AMRAP Challenge: 10 Burpees + 15 Squats + 10 Dips + 20 Twists', detail: 'Count rounds.' },
          { day: 'Day 20', workout: 'Active Recovery: 25 min walk + stretch', detail: 'Phase 2 complete (20 days)!' },
        ]
      },
      {
        day: 'Phase 3 (Days 21–30)',
        task: 'Every Minute On the Minute (EMOM) Mastery (30 min)',
        summary: '30-minute structured EMOM workouts designed to challenge work capacity.',
        dailyBreakdown: [
          { day: 'Day 21', workout: '24 min EMOM: Min 1: 10 Burpees, Min 2: 15 Jump Squats, Min 3: 20 Climbers, Min 4: 12 Pushups (×6)', detail: 'High pace.' },
          { day: 'Day 22', workout: 'Active Recovery: 25 min easy jog or spin', detail: 'Aerobic flush.' },
          { day: 'Day 23', workout: '5 rounds (50s on / 10s off): Star Jumps → Mountain Climbers → Commandos', detail: 'Maximum density.' },
          { day: 'Day 24', workout: 'Rest Day: Muscle replenishment & sleep', detail: 'Rest.' },
          { day: 'Day 25', workout: '30 min Tabata Championship: 6 exercises × 8 rounds each', detail: 'Cardio peak.' },
          { day: 'Day 26', workout: '25 min Death by Burpees Protocol', detail: 'Mental fortitude.' },
          { day: 'Day 27', workout: 'Active Recovery: 30 min walk & deep stretch', detail: 'Recovery.' },
          { day: 'Day 28', workout: '5 rounds (45s on / 15s off): Jump Lunges → Diamond Pushups → High Knees', detail: 'Power endurance.' },
          { day: 'Day 29', workout: '25 min AMRAP: 12 Burpees + 15 Jump Squats + 12 Pushups + 20 Leg Raises', detail: 'Record score.' },
          { day: 'Day 30', workout: 'Rest Day: Hydrate and rest (30 days completed!)', detail: 'Milestone reached.' },
        ]
      },
      {
        day: 'Phase 4 (Days 31–40)',
        task: 'Pyramid Escalation (35 min)',
        summary: 'Complex ascending and descending intervals with minimal rest.',
        dailyBreakdown: [
          { day: 'Day 31', workout: '30 min Pyramid: 15s → 30s → 45s → 60s → 45s → 30s → 15s (Burpees & Squats)', detail: 'High output.' },
          { day: 'Day 32', workout: 'Active Recovery: 30 min easy jog', detail: 'Aerobic flush.' },
          { day: 'Day 33', workout: '6 rounds (45s on / 15s off): Broad Jumps → High Knees → Sprawls → Plank', detail: 'Heavy volume.' },
          { day: 'Day 34', workout: 'Rest Day: Full body foam roll and stretch', detail: 'Rest.' },
          { day: 'Day 35', workout: '30 min EMOM: 12 Burpees every minute for 30 minutes', detail: 'Ultimate test.' },
          { day: 'Day 36', workout: 'Active Recovery: 25 min walk and yoga', detail: 'Recovery.' },
          { day: 'Day 37', workout: '6 rounds (50s on / 10s off): Jump Squats → Pushups → Mountain Climbers', detail: 'Extreme burn.' },
          { day: 'Day 38', workout: '30 min AMRAP Gauntlet (5 movements × 15 reps each)', detail: 'Record score.' },
          { day: 'Day 39', workout: 'Rest Day: Hydration and muscle repair', detail: 'Rest.' },
          { day: 'Day 40', workout: '30 min Tabata Blitz (6 exercises × 8 rounds)', detail: 'Phase 4 complete (40 days)!' },
        ]
      },
      {
        day: 'Phase 5 (Days 41–50)',
        task: '50-Day HIIT Mastery Championship',
        summary: 'Tapering and the grand 35-minute continuous HIIT crucible.',
        dailyBreakdown: [
          { day: 'Day 41', workout: '25 min moderate HIIT primer: 40s on / 20s off', detail: 'Sharp turnover.' },
          { day: 'Day 42', workout: '25 min easy recovery jog or spin', detail: 'Keep muscles loose.' },
          { day: 'Day 43', workout: '20 min EMOM: 8 Burpees + 10 Squats each min', detail: 'Moderate volume.' },
          { day: 'Day 44', workout: 'Rest Day: Deep tissue massage and hydration', detail: 'Tapering.' },
          { day: 'Day 45', workout: '15 min Tabata speed primer', detail: 'Nervous system priming.' },
          { day: 'Day 46', workout: '20 min easy walk + full-body stretch', detail: 'Rest.' },
          { day: 'Day 47', workout: 'Rest Day: Sleep 8+ hours, replenish glycogen', detail: 'Rest.' },
          { day: 'Day 48', workout: '15 min light shakeout and mobility', detail: 'Mental focus.' },
          { day: 'Day 49', workout: '10 min gentle breathing and alignment flow', detail: 'Ready for final day.' },
          { day: 'Day 50', workout: 'The 50-Day 35-Min Non-Stop Ultimate HIIT Crucible & Medal Ceremony!', detail: '50-Day HIIT Master Title earned! Claim +1,250 XP & Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd50-flexibility',
    duration: 50,
    durationLabel: '50-Day Strength Builder',
    level: 'Intermediate • Medium to Hard',
    category: 'Flexibility',
    title: '50-Day Flexibility & Balance',
    description: 'Master full splits, balance poses, handstands, and total body freedom over 50 structured days.',
    icon: '🧘',
    difficulty: 'Medium',
    xp: 900,
    participants: 560,
    tasks: [
      {
        day: 'Phase 1: Baseline & Spine (Days 1–10)',
        task: 'Baseline Range of Motion & Spinal Health',
        summary: 'Decompress vertebrae, open shoulders, and measure starting flexibility.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '25 min Spine & Neck Decompression: Cat-Cow (15 reps), Child Pose (3 min), Thread-the-needle (2 min/side)', detail: 'Breathe smoothly.' },
          { day: 'Day 2', workout: '25 min Hip Flexor Opening: Low Lunge (2 min/side) + Lizard Pose (2 min/side)', detail: 'Deep hip release.' },
          { day: 'Day 3', workout: '25 min Hamstrings: Seated forward fold + Standing single-leg stretch (60s holds)', detail: 'Hinge from hips.' },
          { day: 'Day 4', workout: '20 min Chest & Shoulders: Doorway stretch + Puppy Pose', detail: 'Open chest.' },
          { day: 'Day 5', workout: '25 min Pigeon Pose & Figure-4 glute stretch', detail: 'Sciatic release.' },
          { day: 'Day 6', workout: '30 min Sun Salutation A & B Series', detail: 'Dynamic flow.' },
          { day: 'Day 7', workout: 'Restorative: 20 min Legs-up-the-wall + breathwork', detail: 'Recovery.' },
          { day: 'Day 8', workout: '25 min Supine twists & Lower back decompression', detail: 'Spine relief.' },
          { day: 'Day 9', workout: '25 min PNF Hamstring contract-relax protocol', detail: 'PNF method.' },
          { day: 'Day 10', workout: '30 min Full Body Vinyasa Flow (Phase 1 complete!)', detail: '10 days done.' },
        ]
      },
      {
        day: 'Phase 2: Balance & Proprioception (Days 11–20)',
        task: 'Single-Leg Balance & Hip Stability',
        summary: 'Combine active joint mobility with single-leg stability poses.',
        dailyBreakdown: [
          { day: 'Day 11', workout: '30 min Tree Pose, Warrior 3, and Dancer Pose balance flow', detail: 'Ankle & glute stability.' },
          { day: 'Day 12', workout: '30 min Half Moon Pose & Eagle Pose hip rotations', detail: 'Hip rotator strength.' },
          { day: 'Day 13', workout: '25 min Deep Frog Pose & Butterfly Pose (3 min holds)', detail: 'Groin opening.' },
          { day: 'Day 14', workout: '30 min Crow Pose (Bakasana) arm balance preparation', detail: 'Wrist and core strength.' },
          { day: 'Day 15', workout: '30 min PNF Hip Flexor & Quad King Arthur Pose', detail: 'Quad lengthening.' },
          { day: 'Day 16', workout: '35 min Power Yoga Flow for core and balance', detail: 'Continuous breath.' },
          { day: 'Day 17', workout: 'Restorative: 20 min Yin Yoga long holds', detail: 'Joint rest.' },
          { day: 'Day 18', workout: '30 min Extended Hand-to-Big-Toe balance & stretch', detail: 'Hamstring & balance.' },
          { day: 'Day 19', workout: '30 min Camel Pose & Bridge Pose backbend mobility', detail: 'Spinal extension.' },
          { day: 'Day 20', workout: '35 min Master Balance Flow (Phase 2 complete!)', detail: '20 days done.' },
        ]
      },
      {
        day: 'Phase 3: Splits & Power Vinyasa (Days 21–35)',
        task: '40-Min Dynamic Vinyasa & Splits Progressions',
        summary: 'Deep daily front and middle split holds supported by breathwork.',
        dailyBreakdown: [
          { day: 'Day 21', workout: '35 min Front Split Supported Holds (3 min per leg)', detail: 'Use yoga blocks.' },
          { day: 'Day 22', workout: '35 min Middle Split & Pancake Stretch', detail: 'Inner thigh mobility.' },
          { day: 'Day 23', workout: '30 min Wheel Pose & Full Spinal Arching', detail: 'Upper back and shoulders.' },
          { day: 'Day 24', workout: '30 min Shoulder Inversion & Handstand Wall Walkups', detail: 'Shoulder stability.' },
          { day: 'Day 25', workout: '40 min Dynamic Power Vinyasa Flow', detail: 'Fluid movement.' },
          { day: 'Day 26', workout: '35 min Deep Pigeon & Cow Face Pose', detail: 'Outer hip release.' },
          { day: 'Day 27', workout: 'Restorative: 25 min Yin Yoga long holds', detail: 'Deep fascial release.' },
          { day: 'Day 28', workout: '40 min Front Split PNF & Deep Holds', detail: 'Significant progress.' },
          { day: 'Day 29', workout: '35 min Side Split & Frog Pose Progression', detail: 'Adductor length.' },
          { day: 'Day 30', workout: '30 min Standing Split & Dancer Pose Mastery', detail: 'Grace and power.' },
          { day: 'Day 31', workout: '40 min Full Body Master Yoga Flow', detail: 'Effortless breathing.' },
          { day: 'Day 32', workout: '35 min Deep Joint Traction & Foam Rolling', detail: 'Tendon health.' },
          { day: 'Day 33', workout: '35 min Front Split Benchmark Assessment', detail: 'Measure progress.' },
          { day: 'Day 34', workout: '35 min Middle Split Benchmark Assessment', detail: 'Compare with Day 1.' },
          { day: 'Day 35', workout: 'Restorative: 25 min Savasana & Meditation (Phase 3 complete!)', detail: '35 days down.' },
        ]
      },
      {
        day: 'Phase 4: Advanced Mastery (Days 36–50)',
        task: 'Full Splits, Crow Pose, & Final Championship',
        summary: 'Full unassisted splits, advanced handstands, and total body freedom.',
        dailyBreakdown: [
          { day: 'Day 36', workout: '40 min Full Front Split Mastery Flow (both legs)', detail: 'Near floor contact.' },
          { day: 'Day 37', workout: '40 min Full Middle Split & Pancake Flow', detail: 'Chest flat on floor.' },
          { day: 'Day 38', workout: '35 min Crow Pose to Headstand / Handstand Practice', detail: 'Arm balance mastery.' },
          { day: 'Day 39', workout: '35 min Full Wheel Pose & Standing Dropbacks', detail: 'Supple spine.' },
          { day: 'Day 40', workout: '40 min Advanced Ashtanga Yoga Series', detail: 'Full sequence.' },
          { day: 'Day 41', workout: 'Restorative: 30 min Yin Yoga long holds', detail: 'Recovery.' },
          { day: 'Day 42', workout: '40 min Full Splits & Deep Backbends Celebration', detail: 'Supreme flexibility.' },
          { day: 'Day 43', workout: '30 min Gentle Alignment & Joint Fluidity Flow', detail: 'Gentle flow.' },
          { day: 'Day 44', workout: '30 min Hip & Hamstring Ease Flow', detail: 'Keep muscles loose.' },
          { day: 'Day 45', workout: '25 min Spinal Decompression & Meditation', detail: 'Rest.' },
          { day: 'Day 46', workout: '25 min Light Dynamic Mobility Warmup', detail: 'Stay primed.' },
          { day: 'Day 47', workout: '20 min Gentle Joint Rotations & Savasana', detail: 'Mental calm.' },
          { day: 'Day 48', workout: '20 min Light Breathwork and Hip Openers', detail: 'Tapering.' },
          { day: 'Day 49', workout: '15 min Gentle Alignment Visualization', detail: 'Ready for final day.' },
          { day: 'Day 50', workout: '50-Day Grand Yoga & Full Splits Mastery Ceremony!', detail: '50-Day Flexibility Mastered! Claim +900 XP & Certificate.' },
        ]
      },
    ],
  },

  /* ============================================================
     60-DAY CHALLENGES (ALL 5 CATEGORIES)
     ============================================================ */
  {
    id: 'd60-cardio',
    duration: 60,
    durationLabel: '60-Day Complete Fitness',
    level: 'Progressive • Easy to Hard',
    category: 'Cardio',
    title: '60-Day Complete Cardio Journey',
    description: '60 days from beginner foundation to confident endurance athlete — a periodized cardio transformation.',
    icon: '🏆',
    difficulty: 'Easy to Hard',
    xp: 1500,
    participants: 2100,
    tasks: [
      {
        day: 'Phase 1: Base Building (Days 1–15)',
        task: '20–30 min Easy Jogs & Aerobic Engine Foundation',
        summary: 'Build mitochondrial density and establish a daily cardio habit.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '20 min brisk walk + 5 min gentle jog', detail: 'Zone 2 aerobic base.' },
          { day: 'Day 2', workout: '25 min light jog at conversational pace', detail: 'Smooth, relaxed strides.' },
          { day: 'Day 3', workout: '25 min brisk walk on incline route', detail: 'Glute and calf conditioning.' },
          { day: 'Day 4', workout: '25 min continuous jog', detail: 'Focus on posture.' },
          { day: 'Day 5', workout: '30 min cycling cross-training', detail: 'Zero impact on knees.' },
          { day: 'Day 6', workout: '30 min steady jog', detail: 'Consistent cadence.' },
          { day: 'Day 7', workout: 'Active Recovery: 20 min walk + full stretch', detail: 'Flush legs.' },
          { day: 'Day 8', workout: '30 min continuous jog with 3 strides', detail: 'Speed priming.' },
          { day: 'Day 9', workout: '25 min recovery jog + core planks', detail: 'Core stability.' },
          { day: 'Day 10', workout: '35 min long slow jog', detail: 'Hydrate well.' },
          { day: 'Day 11', workout: '30 min spin bike or brisk walk', detail: 'Active rest.' },
          { day: 'Day 12', workout: '35 min steady jog on flat trail', detail: 'Smooth rhythm.' },
          { day: 'Day 13', workout: '35 min jog with 4 × 100m strides', detail: 'Leg turnover.' },
          { day: 'Day 14', workout: 'Active Rest: 20 min walk & foam rolling', detail: 'Two weeks complete.' },
          { day: 'Day 15', workout: '35 min continuous benchmark run', detail: 'Phase 1 completed!' },
        ]
      },
      {
        day: 'Phase 2: Build & Tempo (Days 16–30)',
        task: '30–40 min Tempo Runs & Weekend Long Distance',
        summary: 'Introduce lactate threshold pace and progressive distance.',
        dailyBreakdown: [
          { day: 'Day 16', workout: '35 min tempo run (15 min at threshold pace)', detail: 'Hold comfortably hard pace.' },
          { day: 'Day 17', workout: '30 min easy recovery jog', detail: 'Zone 1–2.' },
          { day: 'Day 18', workout: '40 min undulating hills run', detail: 'Drive arms uphill.' },
          { day: 'Day 19', workout: '35 min cycling cross-training', detail: 'Aerobic recovery.' },
          { day: 'Day 20', workout: '40 min tempo run (2 × 10 min hard / 3 min recovery)', detail: 'Lactate clearance.' },
          { day: 'Day 21', workout: '30 min recovery jog + strides', detail: 'Stay bouncy.' },
          { day: 'Day 22', workout: '45 min weekend long slow distance run', detail: 'Building volume.' },
          { day: 'Day 23', workout: 'Active Rest: 25 min walk & foam roll', detail: 'Tendon recovery.' },
          { day: 'Day 24', workout: '40 min fartlek speedplay (2 min fast / 2 min slow × 8)', detail: 'Speed endurance.' },
          { day: 'Day 25', workout: '35 min easy recovery jog', detail: 'Zone 2.' },
          { day: 'Day 26', workout: '45 min tempo run (20 min sustained threshold)', detail: 'Strong aerobic output.' },
          { day: 'Day 27', workout: '35 min spin or recovery walk', detail: 'Joint rest.' },
          { day: 'Day 28', workout: '50 min weekend long run', detail: 'Hydrate properly.' },
          { day: 'Day 29', workout: 'Active Recovery: 20 min walk + stretch', detail: 'Flush.' },
          { day: 'Day 30', workout: '45 min continuous run (Halfway mark of 60 days!)', detail: '30 days conquered!' },
        ]
      },
      {
        day: 'Phase 3: Develop & Intervals (Days 31–45)',
        task: 'Track Intervals (10×200m / 8×400m) & Mid-Week Distance',
        summary: 'Elevate VO2 max and anaerobic stamina with fast track sessions.',
        dailyBreakdown: [
          { day: 'Day 31', workout: '10 min warmup → 10 × 200m sprint repeats (60s rest) → 10 min cool-down', detail: 'Fast leg speed.' },
          { day: 'Day 32', workout: '35 min easy recovery jog', detail: 'Zone 1.' },
          { day: 'Day 33', workout: '45 min mid-week steady endurance run', detail: 'Solid pacing.' },
          { day: 'Day 34', workout: '35 min cycling or swimming', detail: 'Cross training.' },
          { day: 'Day 35', workout: '10 min warmup → 8 × 400m fast intervals (75s rest) → 10 min cool-down', detail: 'Push pace.' },
          { day: 'Day 36', workout: '40 min easy recovery jog + 4 strides', detail: 'Smooth turnover.' },
          { day: 'Day 37', workout: '55 min weekend long distance run', detail: 'Peak weekend volume.' },
          { day: 'Day 38', workout: 'Active Rest: 25 min walk + foam rolling', detail: 'Deep recovery.' },
          { day: 'Day 39', workout: '50 min progressive run (speed up last 15 min)', detail: 'Finish fast.' },
          { day: 'Day 40', workout: '40 min easy recovery run', detail: 'Zone 2.' },
          { day: 'Day 41', workout: '10 min warmup → 5 × 800m repeats (90s rest) → 10 min cool-down', detail: 'Race pace holding.' },
          { day: 'Day 42', workout: '35 min easy spin or walk', detail: 'Joint rest.' },
          { day: 'Day 43', workout: '55 min long steady run', detail: 'High endurance.' },
          { day: 'Day 44', workout: 'Active Recovery: 20 min walk and stretch', detail: 'Stretch.' },
          { day: 'Day 45', workout: '50 min tempo run (Phase 3 complete!)', detail: '45 days done.' },
        ]
      },
      {
        day: 'Phase 4: Peak & Long Runs (Days 46–55)',
        task: '55–60 min Long Runs & Peak Track Quality',
        summary: 'Peak weekly mileage and high-intensity quality workouts.',
        dailyBreakdown: [
          { day: 'Day 46', workout: '55 min continuous steady aerobic run', detail: 'Effortless breathing.' },
          { day: 'Day 47', workout: '40 min easy recovery jog', detail: 'Keep effort low.' },
          { day: 'Day 48', workout: '10 min warmup → 6 × 1000m (1K) repeats at 5K pace → 10 min cool-down', detail: 'Peak speed day.' },
          { day: 'Day 49', workout: '40 min cycling or swimming', detail: 'Active rest.' },
          { day: 'Day 50', workout: '55 min tempo run (25 min sustained at 10K race pace)', detail: 'Threshold peak.' },
          { day: 'Day 51', workout: '40 min easy recovery run + 5 strides', detail: 'Light and sharp.' },
          { day: 'Day 52', workout: '65 min peak long run of the 60-day challenge', detail: 'Longest run achieved!' },
          { day: 'Day 53', workout: 'Active Rest: 30 min walk & foam rolling', detail: 'Taper begins.' },
          { day: 'Day 54', workout: '45 min easy aerobic run', detail: 'Smooth stride.' },
          { day: 'Day 55', workout: '40 min easy run with 4 × 50m strides', detail: 'Phase 4 complete!' },
        ]
      },
      {
        day: 'Phase 5: Taper & Grand Finale (Days 56–60)',
        task: 'The 60-Day Complete Fitness Victory',
        summary: 'Taper volume, rest, and celebrate the 60-day complete fitness transformation.',
        dailyBreakdown: [
          { day: 'Day 56', workout: '30 min easy jog to stay primed', detail: 'Gentle cadence.' },
          { day: 'Day 57', workout: '25 min easy jog + 4 strides', detail: 'Fast, sharp turnover.' },
          { day: 'Day 58', workout: 'Rest Day: Hydrate, foam roll, sleep 8+ hours', detail: 'Full recovery.' },
          { day: 'Day 59', workout: '15 min light shakeout walk & visualization', detail: 'Ready for celebration.' },
          { day: 'Day 60', workout: '60-Day Grand Victory Run & Full Transformation Ceremony!', detail: '60 Days of Fitness conquered! Earn +1,500 XP & Certified Master Badge.' },
        ]
      },
    ],
  },
  {
    id: 'd60-strength',
    duration: 60,
    durationLabel: '60-Day Complete Fitness',
    level: 'Progressive • Easy to Hard',
    category: 'Strength',
    title: '60-Day Complete Strength Build',
    description: 'A full 60-day periodized muscle-building program across Foundation, Overload, Hypertrophy, and Peak Testing.',
    icon: '⚡',
    difficulty: 'Easy to Hard',
    xp: 1600,
    participants: 1450,
    tasks: [
      {
        day: 'Phase 1: Foundation (Days 1–15)',
        task: 'Bodyweight Mastery & Form Perfection',
        summary: 'Establish solid movement mechanics across push-ups, squats, lunges, and planks.',
        dailyBreakdown: [
          { day: 'Day 1', workout: 'Push Day: Push-ups 3×12, Dips 3×12, Incline Push-ups 3×10', detail: '60s rest.' },
          { day: 'Day 2', workout: 'Pull Day: Inverted Rows 3×12, Towel Rows 3×12, Supermans 3×15', detail: 'Scapular retraction.' },
          { day: 'Day 3', workout: 'Leg Day: Squats 3×20, Lunges 3×12/leg, Calf raises 3×25', detail: 'Full depth.' },
          { day: 'Day 4', workout: 'Core: Plank 3×45s, Russian Twists 3×20, Bicycle Crunches 3×20', detail: 'Abdominal stability.' },
          { day: 'Day 5', workout: 'Rest & Mobility: Foam rolling & hamstring stretch', detail: 'Recovery.' },
          { day: 'Day 6', workout: 'Upper Blend: Push-ups 4×12 + Rows 4×12 superset', detail: 'Antagonist pair.' },
          { day: 'Day 7', workout: 'Lower Burn: Glute Bridges 4×25 + Wall Sit 3×45s', detail: 'Endurance.' },
          { day: 'Day 8', workout: 'Push Day: Decline Push-ups 3×10, Dips 4×12', detail: 'Upper chest.' },
          { day: 'Day 9', workout: 'Pull Day: Single-Arm Rows 3×10/arm, Supermans 4×15', detail: 'Unilateral pull.' },
          { day: 'Day 10', workout: 'Leg Day: Jump Squats 3×12, Step-ups 3×10/leg', detail: 'Explosive legs.' },
          { day: 'Day 11', workout: 'Core Fortress: Side Planks 3×30s, Deadbugs 3×12', detail: 'Core.' },
          { day: 'Day 12', workout: 'Full Body Circuit: 3 rounds (15 squats + 12 pushups + 12 rows)', detail: 'Density.' },
          { day: 'Day 13', workout: 'Posterior Chain: Bridges 4×25, Single-leg deadlifts 3×10/leg', detail: 'Hamstrings.' },
          { day: 'Day 14', workout: 'Rest Day: Muscle replenishment', detail: 'Rest.' },
          { day: 'Day 15', workout: '15-Day Foundation Benchmark Test', detail: 'Phase 1 complete!' },
        ]
      },
      {
        day: 'Phase 2: Load & Density (Days 16–30)',
        task: 'Progressive Overload & Density Protocols',
        summary: 'Increase set volume to 4–5 sets and add tempo pauses.',
        dailyBreakdown: [
          { day: 'Day 16', workout: 'Push Volume: Push-ups 4×15, Dips 4×15, Pike Push-ups 4×10', detail: 'Rest 60s.' },
          { day: 'Day 17', workout: 'Pull Volume: Rows 4×15, Towel Curls 4×15, Supermans 4×20', detail: 'Back pump.' },
          { day: 'Day 18', workout: 'Leg Volume: Squats 4×25, Bulgarian Split Squats 4×10/leg', detail: 'Quad burn.' },
          { day: 'Day 19', workout: 'Core Density: Plank 4×60s, V-ups 4×15, Twists 4×25', detail: 'Iron core.' },
          { day: 'Day 20', workout: 'Rest & Mobility: Deep hip flexor & chest stretch', detail: 'Recovery.' },
          { day: 'Day 21', workout: 'Upper Superset: 5 rounds of (12 pushups + 12 rows + 12 dips)', detail: 'Short rest.' },
          { day: 'Day 22', workout: 'Lower Superset: 5 rounds of (15 squats + 10 lunges/leg + 20 calf raises)', detail: 'Leg density.' },
          { day: 'Day 23', workout: 'Arm Specialization: Diamond pushups 4×12, Dips 4×15, Bicep holds 4×30s', detail: 'Arms.' },
          { day: 'Day 24', workout: 'Full Body Power: Clap push-ups 4×8 + Jump Squats 4×12', detail: 'Fast-twitch.' },
          { day: 'Day 25', workout: 'Core & Grip: Hollow body 4×30s + Lying leg raises 4×15', detail: 'Core.' },
          { day: 'Day 26', workout: 'Leg Endurance: 120 Squats + 60 Lunges for time', detail: 'Time trial.' },
          { day: 'Day 27', workout: 'Upper Endurance: 100 Push-ups partitioned in minimal time', detail: 'Log time.' },
          { day: 'Day 28', workout: 'Rest Day: Foam rolling & hydration', detail: 'Rest.' },
          { day: 'Day 29', workout: 'Deload Primer: 3 sets of 10 pushups + 10 squats', detail: 'Keep loose.' },
          { day: 'Day 30', workout: 'Midpoint 30-Day Strength Test (Halfway mark!)', detail: '30 days conquered!' },
        ]
      },
      {
        day: 'Phase 3: Hypertrophy & Complexes (Days 31–45)',
        task: 'Mechanical Drop Sets & High Volume Splits',
        summary: 'Exhaust all motor units with multi-exercise strength complexes.',
        dailyBreakdown: [
          { day: 'Day 31', workout: 'Push Drop Set: Decline pushups (10) → Standard (12) → Knee (15) × 4', detail: 'Total chest burn.' },
          { day: 'Day 32', workout: 'Pull Drop Set: Single-arm rows (10/arm) → Two-arm (15) → Supermans (20) × 4', detail: 'Back thickness.' },
          { day: 'Day 33', workout: 'Leg Drop Set: Jump squats (12) → Standard squats (20) → Wall sit (60s) × 4', detail: 'Leg hypertrophy.' },
          { day: 'Day 34', workout: 'Core Complex: Plank (60s) → Leg raises (15) → Russian twists (30) × 4', detail: 'Core fortress.' },
          { day: 'Day 35', workout: 'Rest & Deep Tissue Recovery: Massage & stretch', detail: 'Recovery.' },
          { day: 'Day 36', workout: 'Giant Set 1: Pushups (15) + Dips (15) + Rows (15) + Squats (25) × 4 rounds', detail: 'Total body pump.' },
          { day: 'Day 37', workout: 'Unilateral Legs: Pistol squat progression 4×6/leg + Step-ups 4×12/leg', detail: 'Single leg power.' },
          { day: 'Day 38', workout: 'Shoulder & Tricep Blast: Pike pushups 5×10, Dips 5×15, Diamond pushups 4×10', detail: 'Upper definition.' },
          { day: 'Day 39', workout: 'Back & Core: Rows 5×15, Supermans 5×20s, Plank-to-pushup 4×12', detail: 'Back & core.' },
          { day: 'Day 40', workout: 'Leg Endurance: 150 bodyweight squats + 50 calf raises', detail: 'Record time.' },
          { day: 'Day 41', workout: 'Rest Day: Muscle replenishment & sleep', detail: 'Rest.' },
          { day: 'Day 42', workout: 'Upper Power: Explosive push-ups 5×8 + Rows 5×12', detail: 'Power output.' },
          { day: 'Day 43', workout: 'Lower Power: Broad jumps 5×6 + Box jumps 5×8', detail: 'Explosive jump.' },
          { day: 'Day 44', workout: 'Core Matrix: V-ups 4×15, Hanging leg raises 4×12, Planks 4×60s', detail: 'Core.' },
          { day: 'Day 45', workout: 'Phase 3 Benchmark Assessment', detail: '45 days done!' },
        ]
      },
      {
        day: 'Phase 4: Peak Intensification (Days 46–55)',
        task: 'Max-Rep Density & 400-Rep Circuits',
        summary: 'Near-maximal power output and high-volume training density.',
        dailyBreakdown: [
          { day: 'Day 46', workout: 'Push Peak: 5 sets of 15 strict push-ups + 15 dips (45s rest)', detail: 'Peak density.' },
          { day: 'Day 47', workout: 'Pull Peak: 5 sets of 15 horizontal rows + 20 supermans', detail: 'Peak pull.' },
          { day: 'Day 48', workout: 'Leg Peak: 5 sets of 30 bodyweight squats + 15 lunges/leg', detail: 'Peak legs.' },
          { day: 'Day 49', workout: 'Core Peak: 5 sets of 60s planks + 20 leg raises', detail: 'Peak core.' },
          { day: 'Day 50', workout: 'Rest & Mobility: Full body foam rolling and joint care', detail: 'Rest.' },
          { day: 'Day 51', workout: 'The 350-Rep Crucible: 100 Squats + 100 Pushups + 75 Rows + 75 Core', detail: 'Timed challenge.' },
          { day: 'Day 52', workout: 'Active Recovery: 25 min walk + hamstring release', detail: 'Flush.' },
          { day: 'Day 53', workout: 'Deload Push: 3 sets of 10 pushups + 10 dips (easy pace)', detail: 'Tapering.' },
          { day: 'Day 54', workout: 'Deload Pull: 3 sets of 10 rows + 10 supermans', detail: 'Keep primed.' },
          { day: 'Day 55', workout: 'Deload Legs: 3 sets of 15 squats + 10 lunges', detail: 'Phase 4 complete!' },
        ]
      },
      {
        day: 'Phase 5: Championship (Days 56–60)',
        task: 'The 60-Day 600-Rep Grand Championship',
        summary: 'Final PR testing and the 600-rep ultimate strength victory ceremony.',
        dailyBreakdown: [
          { day: 'Day 56', workout: 'PR Testing Day 1: Max unbroken Push-ups + Max unbroken Squats', detail: 'Record all-time PRs!' },
          { day: 'Day 57', workout: 'PR Testing Day 2: Max unbroken Dips + Max Plank hold for time', detail: 'Compare with Day 1.' },
          { day: 'Day 58', workout: 'Rest Day: Hydrate, carb replenish, sleep 8+ hours', detail: 'Rest.' },
          { day: 'Day 59', workout: 'Primer Day: 2 sets of 10 pushups + 10 squats + 30s plank', detail: 'Mental focus.' },
          { day: 'Day 60', workout: 'The 60-Day 600-Rep Grand Championship: 200 Squats + 200 Push-ups + 100 Dips + 100 Core Reps!', detail: 'Legendary 60-Day Strength Master Title earned! Claim +1,600 XP & Certified Master Badge.' },
        ]
      },
    ],
  },
  {
    id: 'd60-running',
    duration: 60,
    durationLabel: '60-Day Complete Fitness',
    level: 'Progressive • Easy to Hard',
    category: 'Running',
    title: '60-Day Half-Marathon Journey',
    description: 'Transform into a distance runner with a periodized 60-day half-marathon progressive training plan.',
    icon: '🏅',
    difficulty: 'Hard',
    xp: 1500,
    participants: 900,
    tasks: [
      {
        day: 'Phase 1: Base Mileage (Days 1–15)',
        task: '15–18 Miles Weekly Mileage Base',
        summary: 'Establish consistent running frequency and aerobic foundation.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '3.0 miles easy conversational run', detail: 'Zone 2 aerobic base.' },
          { day: 'Day 2', workout: '3.0 miles easy jog + 4 × 50m strides', detail: 'Smooth stride.' },
          { day: 'Day 3', workout: '3.5 miles steady run on flat course', detail: 'Consistent cadence.' },
          { day: 'Day 4', workout: 'Rest day or 20 min light spin', detail: 'Joint rest.' },
          { day: 'Day 5', workout: '4.0 miles steady run with 2 hill surges', detail: 'Glute & knee drive.' },
          { day: 'Day 6', workout: '4.5 miles weekend long run', detail: 'Weekly volume.' },
          { day: 'Day 7', workout: 'Active Recovery: 20 min walk & calf stretch', detail: 'Week 1 complete.' },
          { day: 'Day 8', workout: '3.5 miles steady run', detail: 'Rhythmic breathing.' },
          { day: 'Day 9', workout: '3.0 miles recovery jog + runner core (3×45s planks)', detail: 'Core stability.' },
          { day: 'Day 10', workout: '4.0 miles steady aerobic run', detail: 'Easy effort.' },
          { day: 'Day 11', workout: 'Rest day or 25 min walk', detail: 'Tendon recovery.' },
          { day: 'Day 12', workout: '4.5 miles run with 5 × 100m strides', detail: 'Speed priming.' },
          { day: 'Day 13', workout: '5.0 miles long steady run', detail: 'Comfortable pace.' },
          { day: 'Day 14', workout: 'Active Rest: 20 min walk + foam rolling', detail: '2 weeks down.' },
          { day: 'Day 15', workout: '4.5 miles benchmark pace run', detail: 'Phase 1 completed!' },
        ]
      },
      {
        day: 'Phase 2: Speed Endurance (Days 16–30)',
        task: 'Mile Repeats & Tempo Runs',
        summary: 'Build lactate clearance and race pace endurance.',
        dailyBreakdown: [
          { day: 'Day 16', workout: '1 mile warm-up → 3 × 1-mile repeats at threshold pace (2 min rest) → 1 mile cool-down', detail: 'Mile repeats.' },
          { day: 'Day 17', workout: '3.5 miles easy recovery jog', detail: 'Zone 2.' },
          { day: 'Day 18', workout: '5.0 miles: 1 mile warm-up → 3 miles continuous tempo → 1 mile cool-down', detail: 'Race simulation.' },
          { day: 'Day 19', workout: 'Rest day or 25 min light spin', detail: 'Joint rest.' },
          { day: 'Day 20', workout: '1 mile warm-up → 6 × 800m repeats (90s rest) → 1 mile cool-down', detail: 'Track speed.' },
          { day: 'Day 21', workout: '4.0 miles easy recovery run', detail: 'Flush legs.' },
          { day: 'Day 22', workout: '6.5 miles progressive weekend run', detail: 'Long distance.' },
          { day: 'Day 23', workout: 'Active Rest: 25 min walk & hamstring mobility', detail: 'Recovery.' },
          { day: 'Day 24', workout: '5.0 miles fartlek run (3 min hard / 2 min easy × 6)', detail: 'Fartlek power.' },
          { day: 'Day 25', workout: '4.0 miles recovery jog + 4 strides', detail: 'Stay sharp.' },
          { day: 'Day 26', workout: '1 mile warm-up → 4 × 1200m repeats (2 min rest) → 1 mile cool-down', detail: 'Long intervals.' },
          { day: 'Day 27', workout: 'Rest day + foam roll and hydrate', detail: 'Rest.' },
          { day: 'Day 28', workout: '7.5 miles long steady run', detail: 'Over 12K distance!' },
          { day: 'Day 29', workout: 'Active Recovery: 20 min walk + full stretch', detail: 'Stretch.' },
          { day: 'Day 30', workout: '5.5 miles tempo run (Halfway mark of 60 days!)', detail: '30 days conquered!' },
        ]
      },
      {
        day: 'Phase 3: Peak Mileage (Days 31–45)',
        task: '22–25+ Miles Weekly Mileage Peak',
        summary: 'Volume expansion and 8–9 mile long endurance runs.',
        dailyBreakdown: [
          { day: 'Day 31', workout: '5.5 miles steady aerobic run', detail: 'Effortless pacing.' },
          { day: 'Day 32', workout: '4.0 miles recovery jog', detail: 'Zone 1.' },
          { day: 'Day 33', workout: '1 mile warm-up → 5 × 1-mile repeats (2 min rest) → 1 mile cool-down', detail: 'High volume speed.' },
          { day: 'Day 34', workout: 'Rest day or 25 min walk', detail: 'Rest.' },
          { day: 'Day 35', workout: '6.0 miles run with 6 × 100m strides', detail: 'Turnover.' },
          { day: 'Day 36', workout: '8.5 miles peak weekend long run', detail: 'Massive distance milestone.' },
          { day: 'Day 37', workout: 'Active Rest: 25 min walk + foam rolling', detail: 'Muscle care.' },
          { day: 'Day 38', workout: '5.5 miles tempo run with 25 min threshold', detail: 'Lactate clearance.' },
          { day: 'Day 39', workout: '4.0 miles easy recovery jog', detail: 'Flush.' },
          { day: 'Day 40', workout: '1 mile warm-up → 10 × 400m speed repeats → 1 mile cool-down', detail: 'Peak speed day.' },
          { day: 'Day 41', workout: 'Rest day + runner core workout', detail: 'Core stability.' },
          { day: 'Day 42', workout: '9.5 miles long endurance run', detail: 'Approaching 10 miles!' },
          { day: 'Day 43', workout: 'Active Recovery: 25 min walk & deep stretch', detail: 'Taper prep.' },
          { day: 'Day 44', workout: '5.0 miles easy aerobic run', detail: 'Light and smooth.' },
          { day: 'Day 45', workout: '4.0 miles easy run with 4 strides', detail: 'Phase 3 complete!' },
        ]
      },
      {
        day: 'Phase 4: Longest Run (Days 46–55)',
        task: '10 to 11-Mile Half-Marathon Simulation',
        summary: 'The ultimate rehearsal run before final taper.',
        dailyBreakdown: [
          { day: 'Day 46', workout: '6.0 miles steady aerobic run', detail: 'Smooth stride.' },
          { day: 'Day 47', workout: '4.0 miles easy recovery jog', detail: 'Zone 1.' },
          { day: 'Day 48', workout: '1 mile warm-up → 4 × 1.5-mile repeats at half-marathon pace → 1 mile cool-down', detail: 'Race pace holding.' },
          { day: 'Day 49', workout: 'Rest day or 25 min light spin', detail: 'Rest.' },
          { day: 'Day 50', workout: '10.5 miles: The Longest Run Simulation (Fueling & pacing rehearsal)', detail: 'Peak milestone of the 60 days!' },
          { day: 'Day 51', workout: 'Active Rest: 30 min walk & foam rolling', detail: 'Taper begins.' },
          { day: 'Day 52', workout: '4.5 miles easy aerobic run', detail: 'Light effort.' },
          { day: 'Day 53', workout: '4.0 miles run with 4 × 50m strides', detail: 'Stay bouncy.' },
          { day: 'Day 54', workout: '3.5 miles easy recovery jog', detail: 'Rest legs.' },
          { day: 'Day 55', workout: 'Rest day + full-body stretch', detail: 'Phase 4 complete!' },
        ]
      },
      {
        day: 'Phase 5: Race Taper & Half-Marathon (Days 56–60)',
        task: 'The 13.1-Mile (21.1 km) Half-Marathon Finish',
        summary: 'Final taper and the official 13.1-mile Half-Marathon victory run!',
        dailyBreakdown: [
          { day: 'Day 56', workout: '3.0 miles easy shakeout run', detail: 'Stay loose.' },
          { day: 'Day 57', workout: '2.5 miles easy jog + 4 strides', detail: 'Fast, sharp turnover.' },
          { day: 'Day 58', workout: 'Rest day: Hydrate, carb replenish, sleep 8+ hours', detail: 'Full replenishment.' },
          { day: 'Day 59', workout: '15 min light walk & mental race strategy', detail: 'Ready for race day.' },
          { day: 'Day 60', workout: 'Official 13.1-Mile (21.1 km) Half-Marathon Victory Run & Celebration!', detail: '60-Day Half-Marathon Conquered! Earn +1,500 XP & Half-Marathon Finisher Certificate.' },
        ]
      },
    ],
  },
  {
    id: 'd60-hiit',
    duration: 60,
    durationLabel: '60-Day Complete Fitness',
    level: 'Progressive • Easy to Hard',
    category: 'HIIT',
    title: '60-Day HIIT Evolution',
    description: '60 days of evolving HIIT formats — moving progressively from beginner circuits to elite athletic conditioning.',
    icon: '🔥',
    difficulty: 'Easy to Hard',
    xp: 1700,
    participants: 1100,
    tasks: [
      {
        day: 'Phase 1: Beginner Circuits (Days 1–15)',
        task: '15 min Simple Bodyweight HIIT Foundations',
        summary: 'Foundational work-to-rest ratios and movement patterns.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '3 rounds (30s on / 30s off): Jumping Jacks → Mountain Climbers → Squats', detail: '15 min.' },
          { day: 'Day 2', workout: '3 rounds (30s on / 30s off): High Knees → Pushups → Skater Hops', detail: 'Core and cardio.' },
          { day: 'Day 3', workout: 'Active Recovery: 20 min walk + stretching', detail: 'Recovery.' },
          { day: 'Day 4', workout: '3 rounds (30s on / 30s off): Burpees → Butt Kicks → Plank Hold', detail: 'Burpees.' },
          { day: 'Day 5', workout: 'Tabata 12 min: 8 rounds sprint in place + 8 rounds pushups', detail: 'Tabata.' },
          { day: 'Day 6', workout: '15 min brisk walk / jog intervals', detail: 'Aerobic.' },
          { day: 'Day 7', workout: 'Rest Day: Foam rolling & hydration', detail: 'Rest.' },
          { day: 'Day 8', workout: '4 rounds (30s on / 30s off): Jump Squats → Mountain Climbers → V-ups', detail: 'Intensity.' },
          { day: 'Day 9', workout: '15 min AMRAP: 8 Burpees + 12 Squats + 10 Pushups', detail: 'Score rounds.' },
          { day: 'Day 10', workout: 'Active Recovery: 25 min walk and yoga', detail: 'Recovery.' },
          { day: 'Day 11', workout: '4 rounds (35s on / 25s off): Star Jumps → Sprawls → Bicycle Crunches', detail: 'Plyo.' },
          { day: 'Day 12', workout: '16 min Tabata Double: High knees & Mountain climbers', detail: 'Speed.' },
          { day: 'Day 13', workout: '15 min EMOM: 8 Burpees each minute', detail: 'Density.' },
          { day: 'Day 14', workout: 'Rest Day: Deep tissue massage', detail: 'Rest.' },
          { day: 'Day 15', workout: '15-Day HIIT Benchmark Assessment', detail: 'Phase 1 complete!' },
        ]
      },
      {
        day: 'Phase 2: Intermediate Tabata (Days 16–30)',
        task: '20 min Multi-Movement Tabata & Jump Rope Drills',
        summary: '20-second all-out efforts with 10-second micro-rests.',
        dailyBreakdown: [
          { day: 'Day 16', workout: '20 min Tabata (5 exercises × 8 rounds): Squat Jumps, Pushups, Climbers, High Knees, Burpees', detail: 'Max speed.' },
          { day: 'Day 17', workout: 'Active Recovery: 25 min easy jog or spin', detail: 'Flush.' },
          { day: 'Day 18', workout: '4 rounds (40s on / 20s off): Skater Hops → Tuck Jumps → Sprawls → Commandos', detail: 'Power.' },
          { day: 'Day 19', workout: 'Rest Day: Foam roll and hydrate', detail: 'Rest.' },
          { day: 'Day 20', workout: '20 min EMOM: 10 Jump Squats + 8 Pushups every minute', detail: 'Pacing.' },
          { day: 'Day 21', workout: '20 min Pyramid HIIT: 20s → 40s → 60s → 40s → 20s intervals', detail: 'Lactate build.' },
          { day: 'Day 22', workout: 'Active Recovery: 30 min walk & stretch', detail: 'Recovery.' },
          { day: 'Day 23', workout: '5 rounds (40s on / 20s off): Burpee Broad Jumps → High Knees → Plank Jacks', detail: 'Plyo.' },
          { day: 'Day 24', workout: '20 min Death by Burpees Protocol', detail: 'Mental grit.' },
          { day: 'Day 25', workout: 'Rest Day: Muscle replenishment', detail: 'Rest.' },
          { day: 'Day 26', workout: '5 rounds (45s on / 15s off): Star Jumps → Sprawls → V-ups', detail: 'Agility.' },
          { day: 'Day 27', workout: '20 min AMRAP: 10 Burpees + 15 Squats + 10 Dips + 20 Twists', detail: 'Count rounds.' },
          { day: 'Day 28', workout: 'Active Recovery: 25 min walk + yoga', detail: 'Recovery.' },
          { day: 'Day 29', workout: '20 min Tabata Championship', detail: 'Speed.' },
          { day: 'Day 30', workout: 'Midpoint 30-Day Benchmark Test (Halfway mark!)', detail: '30 days conquered!' },
        ]
      },
      {
        day: 'Phase 3: Advanced AMRAP (Days 31–45)',
        task: '30 min AMRAP & Sprint Interval Combinations',
        summary: 'High volume endurance mixed with max-effort sprints.',
        dailyBreakdown: [
          { day: 'Day 31', workout: '25 min AMRAP: 10 Burpees + 15 Jump Squats + 20 Mountain Climbers + 10 Pushups', detail: 'Record score.' },
          { day: 'Day 32', workout: 'Active Recovery: 30 min easy jog', detail: 'Aerobic flush.' },
          { day: 'Day 33', workout: '5 rounds (50s on / 10s off): Broad Jumps → High Knees → Sprawls → Plank', detail: 'High density.' },
          { day: 'Day 34', workout: 'Rest Day: Full body foam roll and stretch', detail: 'Rest.' },
          { day: 'Day 35', workout: '30 min EMOM: Min 1: 12 Burpees, Min 2: 15 Squats, Min 3: 20 Climbers (×10)', detail: 'Ultimate test.' },
          { day: 'Day 36', workout: 'Active Recovery: 25 min walk and yoga', detail: 'Recovery.' },
          { day: 'Day 37', workout: '6 rounds (45s on / 15s off): Jump Squats → Pushups → Mountain Climbers', detail: 'Extreme burn.' },
          { day: 'Day 38', workout: '30 min Tabata Blitz (6 exercises × 8 rounds)', detail: 'Peak speed.' },
          { day: 'Day 39', workout: 'Rest Day: Hydration and muscle repair', detail: 'Rest.' },
          { day: 'Day 40', workout: '30 min Pyramid: 15s → 30s → 45s → 60s → 45s → 30s → 15s', detail: 'High output.' },
          { day: 'Day 41', workout: 'Active Recovery: 30 min easy walk', detail: 'Recovery.' },
          { day: 'Day 42', workout: '25 min AMRAP Challenge: 12 Burpees + 15 Jump Squats + 12 Pushups', detail: 'High score.' },
          { day: 'Day 43', workout: '6 rounds (50s on / 10s off): Star Jumps → Sprawls → Bear Crawls', detail: 'Unconventional.' },
          { day: 'Day 44', workout: 'Rest Day: Sleep 8+ hours & nutrition', detail: 'Rest.' },
          { day: 'Day 45', workout: 'Phase 3 Benchmark Assessment', detail: '45 days done!' },
        ]
      },
      {
        day: 'Phase 4: Elite Circuits (Days 46–55)',
        task: '35 min Complex Multi-Movement Max-Effort Protocols',
        summary: 'Olympic-style metabolic conditioning workouts.',
        dailyBreakdown: [
          { day: 'Day 46', workout: '6 rounds (50s on / 10s off): Burpee Broad Jumps → High Knees → Commandos', detail: 'Extreme power.' },
          { day: 'Day 47', workout: 'Active Recovery: 30 min easy spin or jog', detail: 'Flush.' },
          { day: 'Day 48', workout: '30 min EMOM: 12 Burpees every minute for 30 minutes', detail: 'Mental fortitude.' },
          { day: 'Day 49', workout: 'Rest Day: Deep tissue massage', detail: 'Rest.' },
          { day: 'Day 50', workout: '30 min Tabata Championship: 6 exercises × 8 rounds each', detail: 'Max speed.' },
          { day: 'Day 51', workout: 'Active Recovery: 30 min walk & stretch', detail: 'Recovery.' },
          { day: 'Day 52', workout: '30 min AMRAP Ultimate: 15 Burpees + 20 Jump Squats + 15 Pushups + 25 Climbers', detail: 'Peak score.' },
          { day: 'Day 53', workout: 'Deload HIIT: 20 min moderate intervals (30s on / 30s off)', detail: 'Tapering.' },
          { day: 'Day 54', workout: '25 min easy recovery jog + strides', detail: 'Stay sharp.' },
          { day: 'Day 55', workout: 'Rest Day: Foam rolling & hydration', detail: 'Phase 4 complete!' },
        ]
      },
      {
        day: 'Phase 5: Championship (Days 56–60)',
        task: 'The 60-Day 40-Min Final Benchmark',
        summary: 'Final PR testing and the 40-minute championship HIIT gauntlet.',
        dailyBreakdown: [
          { day: 'Day 56', workout: '20 min easy shakeout HIIT primer', detail: 'Light and bouncy.' },
          { day: 'Day 57', workout: '25 min easy walk & stretch', detail: 'Save energy.' },
          { day: 'Day 58', workout: 'Rest Day: Hydrate, replenish glycogen, sleep 8+ hours', detail: 'Rest.' },
          { day: 'Day 59', workout: '15 min light mobility & mental visualization', detail: 'Mental focus.' },
          { day: 'Day 60', workout: 'The 60-Day 40-Min Non-Stop Championship HIIT Crucible & Medal Ceremony!', detail: 'Legendary 60-Day HIIT Master Title earned! Claim +1,700 XP & Certified Master Badge.' },
        ]
      },
    ],
  },
  {
    id: 'd60-flexibility',
    duration: 60,
    durationLabel: '60-Day Complete Fitness',
    level: 'Progressive • Easy to Hard',
    category: 'Flexibility',
    title: '60-Day Total Flexibility Transformation',
    description: '60 days to dramatically transform flexibility, posture, body awareness, and master full splits.',
    icon: '🧘',
    difficulty: 'Easy to Hard',
    xp: 1300,
    participants: 870,
    tasks: [
      {
        day: 'Phase 1: Awakening (Days 1–15)',
        task: '20 min Daily Basic Static & Joint Mobility',
        summary: 'Awaken tight fascia across all major muscle groups.',
        dailyBreakdown: [
          { day: 'Day 1', workout: '20 min Spine & Neck Decompression: Cat-Cow (10 reps), Child Pose (2 min), Thread-the-needle', detail: 'Breathe into tight areas.' },
          { day: 'Day 2', workout: '20 min Hips & Glutes: Pigeon pose (2 min/side) + Butterfly stretch (3 min)', detail: 'Hip capsule release.' },
          { day: 'Day 3', workout: '20 min Hamstrings: Seated forward fold + Standing single-leg stretch', detail: 'Hinge at hips.' },
          { day: 'Day 4', workout: '20 min Chest & Shoulders: Doorway stretch + Puppy pose + Reverse prayer', detail: 'Postural correction.' },
          { day: 'Day 5', workout: '20 min Lower Back & Hips: Supine twists + Figure-4 + Happy Baby', detail: 'Lumbar relief.' },
          { day: 'Day 6', workout: '25 min Full Body Sun Salutation series (6 slow rounds)', detail: 'Dynamic movement.' },
          { day: 'Day 7', workout: 'Restorative: 15 min Legs-up-the-wall + breathwork', detail: 'Week 1 done.' },
          { day: 'Day 8', workout: '25 min Low Lunge & Lizard pose (2 min each leg)', detail: 'Deep hip flexor.' },
          { day: 'Day 9', workout: '25 min PNF Hamstring contract-relax protocol', detail: 'PNF method.' },
          { day: 'Day 10', workout: '20 min Quad King Arthur pose (foot against wall)', detail: 'Quad lengthening.' },
          { day: 'Day 11', workout: '20 min Thoracic Spine: Foam roll extensions + Open-book stretch', detail: 'Upper back.' },
          { day: 'Day 12', workout: '25 min Frog pose & Straddle stretch', detail: 'Groin opening.' },
          { day: 'Day 13', workout: '25 min Downward Dog to Cobra flow + Triangle pose', detail: 'Posterior chain.' },
          { day: 'Day 14', workout: 'Restorative Yin Yoga: 20 min long-hold Dragon pose', detail: 'Two weeks done.' },
          { day: 'Day 15', workout: '25 min Full Body Mobility Benchmark Test', detail: 'Phase 1 complete!' },
        ]
      },
      {
        day: 'Phase 2: Deepening (Days 16–30)',
        task: '30 min PNF Stretching & Foam Rolling Daily',
        summary: 'Target the nervous system to unlock deeper ranges of motion.',
        dailyBreakdown: [
          { day: 'Day 16', workout: '30 min PNF Hamstrings & Calves (contract 5s / relax 25s × 5)', detail: 'Rapid hamstring gains.' },
          { day: 'Day 17', workout: '30 min Deep Hip Flexor & Psoas PNF Routine', detail: 'Release pelvic tilt.' },
          { day: 'Day 18', workout: '25 min Pancake Stretch & Wide-leg seated forward bend', detail: 'Adductors.' },
          { day: 'Day 19', workout: '25 min Puppy Pose & Overhead Lat Openers (90s holds)', detail: 'Scapular mobility.' },
          { day: 'Day 20', workout: '30 min Frog Pose & Butterfly Pose deep holds', detail: 'Inner thighs.' },
          { day: 'Day 21', workout: '30 min Cobra, Camel, and Wheel pose progression', detail: 'Spinal extension.' },
          { day: 'Day 22', workout: 'Restorative: 25 min Yin Yoga long holds', detail: 'Joint rest.' },
          { day: 'Day 23', workout: '30 min Front Split Supported Holds (3 min per leg)', detail: 'Use blocks.' },
          { day: 'Day 24', workout: '30 min Pigeon pose & Cow Face pose for outer hips', detail: 'Outer hips.' },
          { day: 'Day 25', workout: '30 min Standing Split & Warrior 3 balance flow', detail: 'Single leg strength.' },
          { day: 'Day 26', workout: '30 min Wheel Pose & Full Bridge mobility', detail: 'Open heart.' },
          { day: 'Day 27', workout: '35 min Full Body Power Yoga Flow', detail: 'Continuous breath.' },
          { day: 'Day 28', workout: 'Restorative: 20 min Savasana and spinal twists', detail: 'Recovery.' },
          { day: 'Day 29', workout: '30 min Deep Joint Traction & Foam Rolling', detail: 'Fascial care.' },
          { day: 'Day 30', workout: 'Midpoint 30-Day Benchmark Test (Halfway mark!)', detail: '30 days conquered!' },
        ]
      },
      {
        day: 'Phase 3: Flowing (Days 31–45)',
        task: '35 min Intermediate Vinyasa Flows Daily',
        summary: 'Fluid yoga sequences integrating strength with maximum flexibility.',
        dailyBreakdown: [
          { day: 'Day 31', workout: '35 min Front Split Mastery Flow (3 min per leg)', detail: 'Lower hip depth.' },
          { day: 'Day 32', workout: '35 min Middle Split & Pancake Flow', detail: 'Chest to floor.' },
          { day: 'Day 33', workout: '35 min Wheel Pose to Standing Dropback Preparation', detail: 'Spinal suppleness.' },
          { day: 'Day 34', workout: '30 min Crow Pose to Headstand Arm Balance Flow', detail: 'Arm balance.' },
          { day: 'Day 35', workout: '40 min Intermediate Ashtanga Vinyasa Series', detail: 'Dynamic flow.' },
          { day: 'Day 36', workout: '35 min Deep Pigeon & Double Pigeon (Firelog pose)', detail: 'Deep hip rotators.' },
          { day: 'Day 37', workout: 'Restorative: 25 min Yin Yoga long holds', detail: 'Deep release.' },
          { day: 'Day 38', workout: '35 min Front Split PNF & Deep Holds', detail: 'Near floor contact.' },
          { day: 'Day 39', workout: '35 min Side Split & Frog Pose Progression', detail: 'Adductor length.' },
          { day: 'Day 40', workout: '30 min Standing Dancer Pose & King Pigeon prep', detail: 'Full-body grace.' },
          { day: 'Day 41', workout: '40 min Full Body Master Yoga Flow', detail: 'Effortless breath.' },
          { day: 'Day 42', workout: '35 min Deep Joint Traction & Foam Rolling', detail: 'Tendon health.' },
          { day: 'Day 43', workout: '35 min Front Split Benchmark Assessment', detail: 'Measure progress.' },
          { day: 'Day 44', workout: '35 min Middle Split Benchmark Assessment', detail: 'Compare to Day 1.' },
          { day: 'Day 45', workout: 'Phase 3 Benchmark Assessment', detail: '45 days done!' },
        ]
      },
      {
        day: 'Phase 4: Advancing (Days 46–55)',
        task: '40 min Handstand Prep & Advanced Hip Openers',
        summary: 'Advanced inversion mobility and near-floor full splits.',
        dailyBreakdown: [
          { day: 'Day 46', workout: '40 min Full Front Split Mastery Flow (both legs)', detail: 'Full floor contact.' },
          { day: 'Day 47', workout: '40 min Full Middle Split & Pancake Flow', detail: 'Chest flat on floor.' },
          { day: 'Day 48', workout: '35 min Handstand Wall Walkups & Shoulder Mobility', detail: 'Inversion strength.' },
          { day: 'Day 49', workout: '35 min Full Wheel Pose & Standing Dropbacks', detail: 'Supple back.' },
          { day: 'Day 50', workout: '40 min Advanced Ashtanga Yoga Series', detail: 'Full sequence.' },
          { day: 'Day 51', workout: 'Restorative: 30 min Yin Yoga long holds', detail: 'Recovery.' },
          { day: 'Day 52', workout: '40 min Full Splits & Deep Backbends Celebration', detail: 'Supreme mobility.' },
          { day: 'Day 53', workout: '30 min Gentle Alignment & Joint Fluidity Flow', detail: 'Gentle flow.' },
          { day: 'Day 54', workout: '30 min Hip & Hamstring Ease Flow', detail: 'Keep muscles loose.' },
          { day: 'Day 55', workout: 'Phase 4 complete! Ready for championship week.', detail: '55 days done!' },
        ]
      },
      {
        day: 'Phase 5: Mastery & Finale (Days 56–60)',
        task: 'The 60-Day Full Splits & Master Yoga Ceremony',
        summary: 'Final splits testing and master 45-minute celebration yoga flow.',
        dailyBreakdown: [
          { day: 'Day 56', workout: '25 min gentle full body alignment flow', detail: 'Stay primed.' },
          { day: 'Day 57', workout: '25 min hip and hamstring light stretches', detail: 'Easy mobility.' },
          { day: 'Day 58', workout: '20 min spinal decompression & meditation', detail: 'Rest and recover.' },
          { day: 'Day 59', workout: '20 min gentle joint mobility warmup', detail: 'Mental focus.' },
          { day: 'Day 60', workout: '60-Day Master Yoga & Full Splits Grand Ceremony!', detail: 'Legendary 60-Day Flexibility Master Title earned! Claim +1,300 XP & Certified Master Badge.' },
        ]
      },
    ],
  },
];
