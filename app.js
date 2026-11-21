/* ===== DEFAULT DATA FROM EXCEL (5TH SEMESTER) ===== */
const STORAGE_KEY = 'acr_unified_study_data_v1';

const PERIODS = [
  '1st (10:30–11:20)',
  '2nd (11:20–12:10)',
  '3rd (12:10–1:00)',
  '4th (1:40–2:30)',
  '5th (2:30–3:20)',
  '6th (3:20–4:10)'
];

const DEFAULT_DATA = {
  "theme": "dark",
  "activePhase": "final",
  "autoSyncRoutineTeacher": true,
  "routineMeta": {
    "semester": "5th Semester",
    "title": "Class Routine (5th Semester)",
    "effectiveFrom": "Effective from: 16 November 2026 (Monday)"
  },
  "courses": [
    {
      "code": "ELL-3522",
      "title": "Restoration and 18th Century Literature",
      "teacher": "AU",
      "midCount": 0,
      "finalCount": 0,
      "lastLesson": "Not logged yet",
      "homework": "None"
    },
    {
      "code": "ELL-3523",
      "title": "Romantic Poetry",
      "teacher": "SK",
      "midCount": 0,
      "finalCount": 0,
      "lastLesson": "Andrea del Sarto - I mean that I should earn......give you more (2026-11-18)",
      "homework": "None"
    },
    {
      "code": "ELL-3524",
      "title": "Victorian Prose and Poetry",
      "teacher": "SK",
      "midCount": 0,
      "finalCount": 2,
      "lastLesson": "Andrea - Judge all I do and tell you of its worth. (2026-11-21)",
      "homework": "None"
    },
    {
      "code": "ELL-3525",
      "title": "The English Novel from Austen to Hardy",
      "teacher": "ASNU",
      "midCount": 0,
      "finalCount": 0,
      "lastLesson": "Not logged yet",
      "homework": "None"
    },
    {
      "code": "ELL-3526",
      "title": "Western Classics in Translation",
      "teacher": "MM",
      "midCount": 0,
      "finalCount": 0,
      "lastLesson": "Not logged yet",
      "homework": "None"
    },
    {
      "code": "ELL-3527",
      "title": "Basic Sciences",
      "teacher": "DSU",
      "midCount": 0,
      "finalCount": 13,
      "lastLesson": "Not logged yet",
      "homework": "None"
    },
    {
      "code": "GEED-3503",
      "title": "Political Thoughts and Social Behavior",
      "teacher": "MMA",
      "midCount": 0,
      "finalCount": 3,
      "lastLesson": "Polygamy (2026-11-21)",
      "homework": "None",
      "lastUpdated": "Nov 21, 09:43 AM"
    },
    {
      "code": "MDP-3503",
      "title": "Moral Development Program (MDP-3503)",
      "teacher": "MFR",
      "midCount": 0,
      "finalCount": 0,
      "lastLesson": "Not logged yet",
      "homework": "None",
      "lastUpdated": "Nov 20, 06:43 PM"
    }
  ],
  "routine": {
    "Saturday": [
      "ELL-3525 (ASNU)",
      "ELL-3524 (SK)",
      "GEED-3503 (MMA)",
      "ELL-3527 (DSU)",
      "ELL-3527 (DSU)",
      "MDP-3503 (MFR)"
    ],
    "Sunday": [
      "ELL-3525 (ASNU)",
      "ELL-3523 (SK)",
      "GEED-3503 (MMA)",
      "ELL-3526 (MM)",
      "ELL-3524 (SK)",
      ""
    ],
    "Monday": [
      "",
      "ELL-3526 (MM)",
      "ELL-3525 (ASNU)",
      "ELL-3522 (AU)",
      "ELL-3523 (SK)",
      ""
    ],
    "Tuesday": [
      "ELL-3522 (AU)",
      "ELL-3526 (MM)",
      "",
      "ELL-3522 (AU)",
      "ELL-3523 (SK)",
      ""
    ],
    "Wednesday": [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "Thursday": [
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  "teachers": [
    {
      "short": "MM",
      "full": "Md. Morshedul Alam",
      "designation": "Associate Professor"
    },
    {
      "short": "ASNU",
      "full": "Abu Saleh Nizam Uddin",
      "designation": "Associate Professor"
    },
    {
      "short": "SK",
      "full": "Sajjadul Karim",
      "designation": "Assistant Professor"
    },
    {
      "short": "AU",
      "full": "Absar Uddin",
      "designation": "Assistant Professor"
    },
    {
      "short": "MFR",
      "full": "Musfiq",
      "designation": "Lecturer"
    },
    {
      "short": "DSU",
      "full": "Dr. Saif Uddin",
      "designation": "Faculty"
    },
    {
      "short": "MMA",
      "full": "Md. Munirul Alam",
      "designation": "Faculty"
    }
  ],
  "busRegular": [],
  "examRoutine": [
    {
      "col1": "2026-10-03",
      "col2": "Basic Sciences (ELL-3527)",
      "col3": "09:30 AM - 11:00 AM"
    },
    {
      "col1": "2026-10-04",
      "col2": "Restoration and 18th Century Literature (ELL-3522)",
      "col3": "09:30 AM - 11:00 AM"
    },
    {
      "col1": "2026-10-06",
      "col2": "Romantic Poetry (ELL-3523)",
      "col3": "09:30 AM - 11:00 AM"
    },
    {
      "col1": "2026-10-08",
      "col2": "Victorian Prose and Poetry (ELL-3524)",
      "col3": "09:30 AM - 11:00 AM"
    },
    {
      "col1": "2026-10-11",
      "col2": "The English Novel from Austen to Hardy (ELL-3525)",
      "col3": "09:30 AM - 11:00 AM"
    },
    {
      "col1": "2026-10-13",
      "col2": "Western Classics in Translation (ELL-3526)",
      "col3": "09:30 AM - 11:00 AM"
    }
  ],
  "busExam": [
    {
      "col1": "Exam Morning Bus",
      "col2": "08:00 AM",
      "col3": "Exam Days Only"
    }
  ],
  "academicNotes": [
    {
      "col1": "X-Mas-Day",
      "col2": "2026/12/25",
      "col3": "Off-days"
    }
  ],
  "changeHistory": [
    {
      "id": 1795232591904.891,
      "summary": "[Course GEED-3503] Name \"General Education (GEED-3503)\" → \"Political Thoughts and Social Behavior\"",
      "time": "Nov 21, 09:43 AM"
    },
    {
      "id": 1795178616418.2563,
      "summary": "[Course MDP-3503] Name \"Multidisciplinary Course (MDP-3503)\" → \"Moral Development Program (MDP-3503)\"",
      "time": "Nov 20, 06:43 PM"
    },
    {
      "id": 1795178499852.7676,
      "summary": "[Course URED-3503] Removed from active courses",
      "time": "Nov 20, 06:41 PM"
    }
  ],
  "logs": [
    {
      "id": 1795258143329,
      "course": "GEED-3503",
      "date": "2026-11-21",
      "term": "final",
      "status": "held",
      "cause": "",
      "takenLater": true,
      "lesson": "Polygamy",
      "homework": ""
    },
    {
      "id": 1795258092415,
      "course": "ELL-3525",
      "date": "2026-11-21",
      "term": "final",
      "status": "postponed",
      "cause": "Busy",
      "takenLater": false,
      "lesson": "",
      "homework": ""
    },
    {
      "id": 1795258051331,
      "course": "ELL-3524",
      "date": "2026-11-21",
      "term": "final",
      "status": "held",
      "cause": "",
      "takenLater": true,
      "lesson": "Andrea - Judge all I do and tell you of its worth.",
      "homework": ""
    },
    {
      "id": 1795172785358,
      "course": "ELL-3525",
      "date": "2026-11-10",
      "term": "final",
      "status": "postponed",
      "cause": "Due to Conference Work",
      "takenLater": false,
      "lesson": "",
      "homework": ""
    },
    {
      "id": 1795172686461,
      "course": "ELL-3522",
      "date": "2026-11-10",
      "term": "final",
      "status": "postponed",
      "cause": "For Football Match",
      "takenLater": false,
      "lesson": "",
      "homework": ""
    },
    {
      "id": 1795172665951,
      "course": "ELL-3522",
      "date": "2026-11-10",
      "term": "final",
      "status": "postponed",
      "cause": "For Football Match",
      "takenLater": false,
      "lesson": "",
      "homework": ""
    },
    {
      "id": 1795172420718,
      "course": "ELL-3526",
      "date": "2026-11-19",
      "term": "final",
      "status": "postponed",
      "cause": "Was Busy for a Conference",
      "takenLater": false,
      "lesson": "",
      "homework": ""
    },
    {
      "id": 1795172329489,
      "course": "ELL-3522",
      "date": "2026-11-19",
      "term": "final",
      "status": "postponed",
      "cause": "Was Busy in International Conference",
      "takenLater": false,
      "lesson": "",
      "homework": ""
    },
    {
      "id": 1795171799578,
      "course": "ELL-3524",
      "date": "2026-11-18",
      "term": "final",
      "status": "held",
      "cause": "",
      "takenLater": true,
      "lesson": "Andrea del Sarto  - I mean that I should earn more, give you more",
      "homework": ""
    },
    {
      "id": 1795171760471,
      "course": "ELL-3523",
      "date": "2026-11-18",
      "term": "final",
      "status": "held",
      "cause": "",
      "takenLater": true,
      "lesson": "Andrea del Sarto - I mean that I should earn......give you more",
      "homework": ""
    },
    {
      "id": 1795170753742,
      "course": "ELL-3523",
      "date": "2026-11-19",
      "term": "final",
      "status": "held",
      "cause": "",
      "takenLater": true,
      "lesson": "Nightingale - and with thee......forest dim",
      "homework": ""
    },
    {
      "id": 1795170684255,
      "course": "ELL-3523",
      "date": "2026-11-19",
      "term": "final",
      "status": "held",
      "cause": "",
      "takenLater": true,
      "lesson": "Nightingale - and with thee......forest dim",
      "homework": ""
    },
    {
      "id": 1795170613869,
      "course": "ELL-3523",
      "date": "2026-11-19",
      "term": "final",
      "status": "held",
      "cause": "",
      "takenLater": true,
      "lesson": "and with thee fade away into the forest dim - Ode to a",
      "homework": ""
    }
  ],
  "offDays": {
    "2026-11-19": {
      "isYellowOff": false,
      "note": ""
    },
    "2026-11-18": {
      "isYellowOff": false,
      "note": ""
    }
  },
  "syllabus": {
    "ELL-3522": [],
    "ELL-3523": [],
    "ELL-3524": [],
    "ELL-3525": [],
    "ELL-3526": [],
    "ELL-3527": [],
    "GEED-3503": [],
    "MDP-3503": [],
    "URED-3503": []
  },
  "notes": {
    "ELL-3522": []
  }
};

/* ===== STATE MANAGEMENT ===== */
let state = loadState();
let calYear = 2026;
let calMonth = 10; // November (0-indexed: 10)
let selectedCalDate = '2026-11-20';

const editModes = {
  routine: false,
  teachers: false,
  busRegular: false,
  examRoutine: false,
  busExam: false,
  academicNotes: false
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_DATA);
    const parsed = JSON.parse(raw);
    const merged = {
      ...structuredClone(DEFAULT_DATA),
      ...parsed,
      routineMeta: {
        ...structuredClone(DEFAULT_DATA.routineMeta),
        ...(parsed.routineMeta || {})
      }
    };
    if (!merged.routineMeta.semester) {
      const m = (merged.routineMeta.title || '').match(/\(([^)]+)\)/);
      merged.routineMeta.semester = m ? m[1] : '5th Semester';
    }
    return merged;
  } catch (e) {
    return structuredClone(DEFAULT_DATA);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => el.classList.add('hidden'), 2400);
}

function nowStamp() {
  return new Date().toLocaleString([], {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function recordChange(summary) {
  if (!Array.isArray(state.changeHistory)) state.changeHistory = [];
  state.changeHistory.unshift({
    id: Date.now() + Math.random(),
    summary,
    time: nowStamp()
  });
  state.changeHistory = state.changeHistory.slice(0, 40);
}

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  registerServiceWorker();
  initDates();
  bindNavigation();
  bindHeaderTools();
  bindTrackerEvents();
  bindScheduleEvents();
  bindCatalogManager();
  bindCalendarEvents();
  bindSyllabusAndNotes();
  renderAll();
});

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
}

function syncSemesterHeaderLabels() {
  const sem = state.routineMeta.semester || '5th Semester';
  state.routineMeta.title = `Class Routine (${sem})`;
  document.getElementById('headerMeta').textContent = `${sem} • ${state.routineMeta.effectiveFrom}`;
  document.getElementById('routineTitle').textContent = state.routineMeta.title;
  document.getElementById('examRoutineTitle').textContent = `${sem} Exam Routine`;

  const semInput = document.getElementById('semesterNameInput');
  const effInput = document.getElementById('routineEffectiveInputCatalog');
  const autoSyncChk = document.getElementById('autoSyncRoutineTeacherCheck');
  if (semInput && document.activeElement !== semInput) semInput.value = sem;
  if (effInput && document.activeElement !== effInput) effInput.value = state.routineMeta.effectiveFrom;
  if (autoSyncChk) autoSyncChk.checked = state.autoSyncRoutineTeacher !== false;
}

function initDates() {
  const todayStr = new Date().toISOString().split('T')[0];
  document.getElementById('checkDate').value = todayStr;
  document.getElementById('logDate').value = todayStr;
  document.getElementById('currentPhase').value = state.activePhase || 'final';
  syncSemesterHeaderLabels();
}

function renderAll() {
  syncSemesterHeaderLabels();
  renderTracker();
  renderSchedules();
  renderCatalogManager();
  renderCalendar();
  populateCourseSelects();
  renderSyllabus();
  renderNotes();
}

/* ===== NAVIGATION ===== */
function activateTabAndSubTab(tabName, subName = null) {
  document.querySelectorAll('.nav-tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === tabName));
  document.querySelectorAll('.tab-panel').forEach((p) => p.classList.toggle('active', p.id === `tab-${tabName}`));

  if (subName) {
    document.querySelectorAll('.sub-tab').forEach((b) => b.classList.toggle('active', b.dataset.sub === subName));
    document.querySelectorAll('.sub-panel').forEach((p) => p.classList.toggle('active', p.id === `sub-${subName}`));
  }
}

function bindNavigation() {
  document.querySelectorAll('.nav-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      activateTabAndSubTab(btn.dataset.tab);
    });
  });

  document.querySelectorAll('.sub-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      activateTabAndSubTab('schedules', btn.dataset.sub);
    });
  });

  document.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.close).classList.add('hidden');
    });
  });
}

/* ===== HEADER: THEME, SLOT CHECKER, COPY REPORT, BACKUP ===== */
function bindHeaderTools() {
  document.getElementById('themeToggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(state.theme);
    saveState();
  });

  document.getElementById('checkSlotBtn').addEventListener('click', checkSlotAvailability);

  document.getElementById('copyReportBtn').addEventListener('click', copyDailyReport);

  document.getElementById('backupBtn').addEventListener('click', () => {
    document.getElementById('backupModal').classList.remove('hidden');
  });

  document.getElementById('exportJsonBtn').addEventListener('click', () => {
    const semSlug = (state.routineMeta.semester || 'Semester').replace(/[^a-zA-Z0-9_-]+/g, '_');
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ACR_${semSlug}_Backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Backup exported!');
  });

  document.getElementById('importJsonInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        state = { ...structuredClone(DEFAULT_DATA), ...imported };
        saveState();
        renderAll();
        document.getElementById('backupModal').classList.add('hidden');
        showToast('Data restored successfully!');
      } catch (err) {
        showToast('Invalid JSON file.');
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('resetDefaultBtn').addEventListener('click', () => {
    if (!confirm('Reset everything back to the default Excel routine?')) return;
    state = structuredClone(DEFAULT_DATA);
    saveState();
    renderAll();
    document.getElementById('backupModal').classList.add('hidden');
    showToast('Reset to default data.');
  });
}

function checkSlotAvailability() {
  const dateStr = document.getElementById('checkDate').value;
  const periodIdx = parseInt(document.getElementById('checkPeriod').value, 10) - 1;
  const resBox = document.getElementById('slotResult');

  if (!dateStr) {
    showToast('Please select a date first.');
    return;
  }

  const dateObj = new Date(dateStr + 'T00:00:00');
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[dateObj.getDay()];
  resBox.className = 'slot-result';

  if (dayName === 'Friday') {
    resBox.classList.add('slot-off');
    resBox.textContent = `OFF DAY: ${dateStr} is Friday (Weekly Holiday).`;
    return;
  }

  if (state.offDays[dateStr]?.isYellowOff) {
    const reason = state.offDays[dateStr].note || 'Marked Holiday';
    resBox.classList.add('slot-off');
    resBox.textContent = `YELLOW OFF-DAY (${dayName}): ${reason}`;
    return;
  }

  const examMatch = state.examRoutine.find((ex) => ex.col1.includes(dateStr));
  if (examMatch) {
    resBox.classList.add('slot-busy');
    resBox.textContent = `EXAM DAY (${dayName}): ${examMatch.col2} [${examMatch.col3}]`;
    return;
  }

  const daySlots = state.routine[dayName] || [];
  const slotClass = daySlots[periodIdx] || '';

  if (slotClass.trim()) {
    resBox.classList.add('slot-busy');
    resBox.textContent = `BUSY (${dayName}, ${PERIODS[periodIdx]}): ${slotClass}`;
  } else {
    resBox.classList.add('slot-free');
    resBox.textContent = `FREE (${dayName}, ${PERIODS[periodIdx]}): No class scheduled!`;
  }
}

function copyDailyReport() {
  const today = new Date().toISOString().split('T')[0];
  const todayLogs = state.logs.filter((l) => l.date === today);
  const sem = state.routineMeta.semester || 'Semester';
  let lines = [`📚 *ACR Class Update — ${sem} (${today})*`, ''];

  if (todayLogs.length > 0) {
    todayLogs.forEach((l) => {
      if (l.status === 'postponed') {
        lines.push(`⏸️ *${l.course}*: Postponed (${l.cause || 'No reason noted'})`);
      } else {
        const tag = l.status === 'makeup' ? ' [Makeup]' : '';
        lines.push(`✅ *${l.course}*${tag}`);
        if (l.lesson) lines.push(`   • Taught: ${l.lesson}`);
        if (l.homework) lines.push(`   • HW: ${l.homework}`);
      }
    });
  } else {
    lines.push('Current Course Status:');
    state.courses.forEach((c) => {
      if (c.lastLesson !== 'Not logged yet' || c.homework !== 'None') {
        lines.push(`• *${c.code}*: ${c.lastLesson} | HW: ${c.homework}`);
      }
    });
  }

  const text = lines.join('\n');
  navigator.clipboard?.writeText(text).then(() => {
    showToast('ACR report copied to clipboard!');
  }).catch(() => {
    prompt('Copy your ACR report:', text);
  });
}

/* ===== TAB 1: COURSE COUNTERS, POSTPONEMENTS & LOGS ===== */
function bindTrackerEvents() {
  document.getElementById('currentPhase').addEventListener('change', (e) => {
    state.activePhase = e.target.value;
    saveState();
    renderTracker();
  });

  document.getElementById('quickOpenEditorBtn')?.addEventListener('click', () => {
    activateTabAndSubTab('schedules', 'manageCatalog');
    document.getElementById('semesterNameInput')?.focus();
  });

  document.getElementById('openLogModalBtn').addEventListener('click', () => {
    document.getElementById('logTerm').value = state.activePhase;
    document.getElementById('logStatus').value = 'held';
    document.getElementById('postponeCauseGroup').classList.add('hidden');
    document.getElementById('lessonHwGroup').classList.remove('hidden');
    document.getElementById('logModal').classList.remove('hidden');
  });

  document.getElementById('logStatus').addEventListener('change', (e) => {
    const isPostponed = e.target.value === 'postponed';
    document.getElementById('postponeCauseGroup').classList.toggle('hidden', !isPostponed);
    document.getElementById('lessonHwGroup').classList.toggle('hidden', isPostponed);
  });

  document.getElementById('logForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const courseCode = document.getElementById('logCourse').value;
    const date = document.getElementById('logDate').value;
    const term = document.getElementById('logTerm').value;
    const status = document.getElementById('logStatus').value;
    const cause = document.getElementById('logCause').value.trim();
    const takenLater = document.getElementById('logTakenLater').checked;
    const lesson = document.getElementById('logLesson').value.trim();
    const homework = document.getElementById('logHomework').value.trim();

    const course = state.courses.find((c) => c.code === courseCode);
    if (!course) return;

    const entry = {
      id: Date.now(),
      course: courseCode,
      date,
      term,
      status,
      cause,
      takenLater: status === 'postponed' ? takenLater : true,
      lesson,
      homework
    };
    state.logs.unshift(entry);

    if (status === 'held' || status === 'makeup' || (status === 'postponed' && takenLater)) {
      if (term === 'mid') course.midCount += 1;
      else course.finalCount += 1;
    }

    if (status !== 'postponed') {
      if (lesson) course.lastLesson = `${lesson} (${date})`;
      if (homework) course.homework = homework;
    }

    saveState();
    renderTracker();
    e.target.reset();
    document.getElementById('logDate').value = date;
    document.getElementById('logModal').classList.add('hidden');
    showToast(`Logged ${courseCode}!`);
  });
}

function adjustCourseCount(code, term, delta) {
  const course = state.courses.find((c) => c.code === code);
  if (!course) return;
  if (term === 'mid') course.midCount = Math.max(0, course.midCount + delta);
  else course.finalCount = Math.max(0, course.finalCount + delta);
  saveState();
  renderTracker();
}

function resolvePostponed(logId) {
  const item = state.logs.find((l) => l.id === logId);
  if (!item || item.takenLater) return;
  item.takenLater = true;
  const course = state.courses.find((c) => c.code === item.course);
  if (course) {
    if (item.term === 'mid') course.midCount += 1;
    else course.finalCount += 1;
  }
  saveState();
  renderTracker();
  showToast(`Makeup class counted for ${item.course}!`);
}

function getTeacherFullLabel(shortCode) {
  if (!shortCode) return 'TBA';
  const found = state.teachers.find((t) => t.short.toLowerCase() === shortCode.trim().toLowerCase());
  return found ? `${found.short} (${found.full})` : shortCode;
}

function renderTracker() {
  const pendingBox = document.getElementById('pendingPostponedBox');
  const pending = state.logs.filter((l) => l.status === 'postponed' && !l.takenLater);

  if (pending.length > 0) {
    pendingBox.classList.remove('hidden');
    pendingBox.innerHTML = `<h4>⏸️ Pending Postponed Classes (${pending.length})</h4>` +
      pending.map((p) => `
        <div class="postponed-item">
          <div>
            <strong>${escapeHtml(p.course)}</strong> (${escapeHtml(p.date)}) — <em>${escapeHtml(p.cause || 'Cause not specified')}</em>
          </div>
          <button class="btn-primary btn-xs" onclick="resolvePostponed(${p.id})">Mark Taken</button>
        </div>
      `).join('');
  } else {
    pendingBox.classList.add('hidden');
  }

  const container = document.getElementById('courseCardsContainer');
  container.innerHTML = state.courses.map((c) => {
    const total = c.midCount + c.finalCount;
    const coursePostponed = state.logs.filter((l) => l.course === c.code && l.status === 'postponed');
    const pendingCount = coursePostponed.filter((l) => !l.takenLater).length;

    return `
      <div class="course-card">
        <div class="course-head">
          <div>
            <div class="course-code">${escapeHtml(c.code)}${c.lastUpdated ? `<span class="updated-badge">Updated</span>` : ''}</div>
            <div class="course-title">${escapeHtml(c.title)}</div>
          </div>
          <span class="teacher-badge" title="${escapeHtml(getTeacherFullLabel(c.teacher))}">👤 ${escapeHtml(c.teacher || 'TBA')}</span>
        </div>

        <div class="counter-strip">
          <div class="counter-box">
            <span>Before Mid</span>
            <strong>${c.midCount}</strong>
            <div class="quick-count-btns">
              <button class="btn-secondary btn-xs" onclick="adjustCourseCount('${escapeJsAttr(c.code)}','mid',-1)">-</button>
              <button class="btn-secondary btn-xs" onclick="adjustCourseCount('${escapeJsAttr(c.code)}','mid',1)">+</button>
            </div>
          </div>
          <div class="counter-box">
            <span>Before Final</span>
            <strong>${c.finalCount}</strong>
            <div class="quick-count-btns">
              <button class="btn-secondary btn-xs" onclick="adjustCourseCount('${escapeJsAttr(c.code)}','final',-1)">-</button>
              <button class="btn-secondary btn-xs" onclick="adjustCourseCount('${escapeJsAttr(c.code)}','final',1)">+</button>
            </div>
          </div>
          <div class="counter-box">
            <span>Total Held</span>
            <strong>${total}</strong>
            <span style="margin-top:4px">${pendingCount > 0 ? `⚠️ ${pendingCount} due` : '✅ Synced'}</span>
          </div>
        </div>

        <div class="meta-line"><strong>Last Taught:</strong> ${escapeHtml(c.lastLesson)}</div>
        <div class="meta-line hw"><strong>Homework:</strong> ${escapeHtml(c.homework)}</div>
      </div>
    `;
  }).join('');
}

/* ===== MANAGE COURSES, TEACHERS & SEMESTER CATALOG ===== */
function syncRoutineTeacherForCourse(courseCode, newTeacherShort) {
  if (!state.autoSyncRoutineTeacher || !courseCode || !newTeacherShort) return;
  const escapedCode = courseCode.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`^${escapedCode}(\\s*\\([^)]*\\))?$`, 'i');

  Object.keys(state.routine || {}).forEach((day) => {
    const slots = state.routine[day];
    if (!Array.isArray(slots)) return;
    state.routine[day] = slots.map((slot) => {
      if (!slot || !slot.trim()) return slot;
      if (pattern.test(slot.trim())) {
        return `${courseCode} (${newTeacherShort})`;
      }
      return slot;
    });
  });
}

function bindCatalogManager() {
  document.getElementById('saveSemesterMetaBtn').addEventListener('click', () => {
    const oldSem = state.routineMeta.semester || '5th Semester';
    const newSem = document.getElementById('semesterNameInput').value.trim() || oldSem;
    const newEff = document.getElementById('routineEffectiveInputCatalog').value.trim() || state.routineMeta.effectiveFrom;

    state.routineMeta.semester = newSem;
    state.routineMeta.title = `Class Routine (${newSem})`;
    state.routineMeta.effectiveFrom = newEff;

    if (oldSem !== newSem) {
      recordChange(`Semester renamed: "${oldSem}" → "${newSem}"`);
    }

    saveState();
    syncSemesterHeaderLabels();
    showToast(`Semester updated to ${newSem}!`);
  });

  document.getElementById('autoSyncRoutineTeacherCheck').addEventListener('change', (e) => {
    state.autoSyncRoutineTeacher = e.target.checked;
    saveState();
    showToast(state.autoSyncRoutineTeacher ? 'Auto-sync routine teachers ON' : 'Auto-sync routine teachers OFF');
  });

  // Course Catalog Form (Unique Course Code identifier)
  document.getElementById('courseCatalogForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const code = document.getElementById('catCourseCode').value.trim().toUpperCase();
    const title = document.getElementById('catCourseTitle').value.trim();
    const teacher = (document.getElementById('catCourseTeacher').value.trim() || 'TBA').toUpperCase();

    if (!code || !title) {
      showToast('Course Code and Course Name are required.');
      return;
    }

    const existing = state.courses.find((c) => c.code.toUpperCase() === code);
    if (existing) {
      const changes = [];
      if (existing.title !== title) {
        changes.push(`Name "${existing.title}" → "${title}"`);
        existing.title = title;
      }
      if ((existing.teacher || '') !== teacher) {
        changes.push(`Teacher "${existing.teacher || 'TBA'}" → "${teacher}"`);
        existing.teacher = teacher;
        syncRoutineTeacherForCourse(existing.code, teacher);
      }
      existing.lastUpdated = nowStamp();
      recordChange(`[Course ${existing.code}] ${changes.length ? changes.join(', ') : 'Saved'}`);
      showToast(`Updated course ${existing.code} across tabs!`);
    } else {
      state.courses.push({
        code,
        title,
        teacher,
        midCount: 0,
        finalCount: 0,
        lastLesson: 'Not logged yet',
        homework: 'None',
        lastUpdated: nowStamp()
      });
      if (!state.syllabus[code]) state.syllabus[code] = [];
      recordChange(`[Course ${code}] Added "${title}" (${teacher})`);
      showToast(`Added new course ${code}!`);
    }

    saveState();
    clearCourseCatalogForm();
    renderAll();
  });

  document.getElementById('clearCourseCatalogBtn').addEventListener('click', clearCourseCatalogForm);

  // Teacher Catalog Form (Unique Teacher Short Code identifier)
  document.getElementById('teacherCatalogForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const shortCode = document.getElementById('catTeacherCode').value.trim().toUpperCase();
    const fullName = document.getElementById('catTeacherName').value.trim();
    const designation = document.getElementById('catTeacherDesignation').value.trim() || 'Faculty';

    if (!shortCode || !fullName) {
      showToast('Teacher Code and Full Name are required.');
      return;
    }

    const existing = state.teachers.find((t) => t.short.toUpperCase() === shortCode);
    if (existing) {
      const changes = [];
      if (existing.full !== fullName) {
        changes.push(`Name "${existing.full}" → "${fullName}"`);
        existing.full = fullName;
      }
      if ((existing.designation || '') !== designation) {
        changes.push(`Role "${existing.designation || 'Faculty'}" → "${designation}"`);
        existing.designation = designation;
      }
      existing.lastUpdated = nowStamp();
      recordChange(`[Teacher ${existing.short}] ${changes.length ? changes.join(', ') : 'Saved'}`);
      showToast(`Updated teacher ${existing.short}!`);
    } else {
      state.teachers.push({
        short: shortCode,
        full: fullName,
        designation,
        lastUpdated: nowStamp()
      });
      recordChange(`[Teacher ${shortCode}] Added ${fullName} (${designation})`);
      showToast(`Added teacher ${shortCode}!`);
    }

    saveState();
    clearTeacherCatalogForm();
    renderAll();
  });

  document.getElementById('clearTeacherCatalogBtn').addEventListener('click', clearTeacherCatalogForm);

  document.getElementById('clearChangeLogBtn').addEventListener('click', () => {
    state.changeHistory = [];
    saveState();
    renderCatalogManager();
    showToast('Change history cleared.');
  });
}

function clearCourseCatalogForm() {
  document.getElementById('catCourseCode').value = '';
  document.getElementById('catCourseTitle').value = '';
  document.getElementById('catCourseTeacher').value = '';
}

function clearTeacherCatalogForm() {
  document.getElementById('catTeacherCode').value = '';
  document.getElementById('catTeacherName').value = '';
  document.getElementById('catTeacherDesignation').value = '';
}

window.loadCourseIntoEditor = function(code) {
  const c = state.courses.find((item) => item.code === code);
  if (!c) return;
  document.getElementById('catCourseCode').value = c.code;
  document.getElementById('catCourseTitle').value = c.title;
  document.getElementById('catCourseTeacher').value = c.teacher || '';
  document.getElementById('catCourseTitle').focus();
  showToast(`Editing ${c.code}`);
};

window.removeCourseByCode = function(code) {
  if (!confirm(`Remove course ${code}? (Your saved logs, syllabus, and notes stay safe in backup.)`)) return;
  state.courses = state.courses.filter((c) => c.code !== code);
  recordChange(`[Course ${code}] Removed from active courses`);
  saveState();
  renderAll();
  showToast(`Removed ${code}`);
};

window.loadTeacherIntoEditor = function(shortCode) {
  const t = state.teachers.find((item) => item.short === shortCode);
  if (!t) return;
  document.getElementById('catTeacherCode').value = t.short;
  document.getElementById('catTeacherName').value = t.full;
  document.getElementById('catTeacherDesignation').value = t.designation || '';
  document.getElementById('catTeacherName').focus();
  showToast(`Editing teacher ${t.short}`);
};

window.removeTeacherByCode = function(shortCode) {
  if (!confirm(`Remove teacher ${shortCode} from the Teacher Registry?`)) return;
  state.teachers = state.teachers.filter((t) => t.short !== shortCode);
  recordChange(`[Teacher ${shortCode}] Removed from teacher list`);
  saveState();
  renderAll();
  showToast(`Removed teacher ${shortCode}`);
};

function renderCatalogManager() {
  // Populate teacher datalist for course form
  const dl = document.getElementById('teacherCodesDatalist');
  if (dl) {
    dl.innerHTML = state.teachers.map((t) => `<option value="${escapeHtml(t.short)}">${escapeHtml(t.full)}</option>`).join('');
  }

  // Course Catalog Table
  const cTbl = document.getElementById('courseCatalogTable');
  if (cTbl) {
    cTbl.innerHTML = `
      <thead>
        <tr>
          <th>Unique Code</th>
          <th>Course Name</th>
          <th>Teacher</th>
          <th>Updated</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${state.courses.length ? state.courses.map((c) => `
          <tr>
            <td><span class="code-pill">${escapeHtml(c.code)}</span></td>
            <td><strong>${escapeHtml(c.title)}</strong></td>
            <td><span class="teacher-badge">${escapeHtml(c.teacher || 'TBA')}</span></td>
            <td class="muted">${escapeHtml(c.lastUpdated || 'Default')}</td>
            <td>
              <div class="action-cell">
                <button class="btn-secondary btn-xs" onclick="loadCourseIntoEditor('${escapeJsAttr(c.code)}')">Edit</button>
                <button class="btn-danger btn-xs" onclick="removeCourseByCode('${escapeJsAttr(c.code)}')">✕</button>
              </div>
            </td>
          </tr>
        `).join('') : `<tr><td colspan="5" class="muted">No courses in registry. Add one above.</td></tr>`}
      </tbody>
    `;
  }

  // Teacher Catalog Table
  const tTbl = document.getElementById('teacherCatalogTable');
  if (tTbl) {
    tTbl.innerHTML = `
      <thead>
        <tr>
          <th>Unique Code</th>
          <th>Full Name</th>
          <th>Designation</th>
          <th>Updated</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${state.teachers.length ? state.teachers.map((t) => `
          <tr>
            <td><span class="code-pill">${escapeHtml(t.short)}</span></td>
            <td><strong>${escapeHtml(t.full)}</strong></td>
            <td>${escapeHtml(t.designation)}</td>
            <td class="muted">${escapeHtml(t.lastUpdated || 'Default')}</td>
            <td>
              <div class="action-cell">
                <button class="btn-secondary btn-xs" onclick="loadTeacherIntoEditor('${escapeJsAttr(t.short)}')">Edit</button>
                <button class="btn-danger btn-xs" onclick="removeTeacherByCode('${escapeJsAttr(t.short)}')">✕</button>
              </div>
            </td>
          </tr>
        `).join('') : `<tr><td colspan="5" class="muted">No teachers in registry. Add one above.</td></tr>`}
      </tbody>
    `;
  }

  // Change History List
  const histEl = document.getElementById('changeHistoryList');
  if (histEl) {
    const items = state.changeHistory || [];
    if (!items.length) {
      histEl.innerHTML = `<li class="muted">No course, teacher, or semester changes logged yet.</li>`;
    } else {
      histEl.innerHTML = items.map((h) => `
        <li>
          <span>${escapeHtml(h.summary)}</span>
          <span class="muted">${escapeHtml(h.time)}</span>
        </li>
      `).join('');
    }
  }
}

/* ===== TAB 2: SCHEDULES (FULL INLINE GRID EDIT MODE) ===== */
function bindScheduleEvents() {
  const routineBtn = document.getElementById('editRoutineBtn');
  routineBtn.textContent = '✏️ Edit Grid';
  routineBtn.addEventListener('click', () => {
    toggleGridEdit('routine');
  });

  const teacherHeader = document.getElementById('addTeacherBtn').parentElement;
  if (!document.getElementById('editTeachersGridBtn')) {
    const tBtn = document.createElement('button');
    tBtn.id = 'editTeachersGridBtn';
    tBtn.type = 'button';
    tBtn.className = 'btn-secondary btn-sm';
    tBtn.textContent = '✏️ Edit Grid';
    tBtn.addEventListener('click', () => toggleGridEdit('teachers'));
    teacherHeader.insertBefore(tBtn, document.getElementById('addTeacherBtn'));
  }

  const tableConfigs = [
    { key: 'busRegular', tableId: 'busRegularTable' },
    { key: 'examRoutine', tableId: 'examRoutineTable' },
    { key: 'busExam', tableId: 'busExamTable' },
    { key: 'academicNotes', tableId: 'academicNotesTable' }
  ];

  tableConfigs.forEach(({ key, tableId }) => {
    const tbl = document.getElementById(tableId);
    const header = tbl?.closest('.sub-panel')?.querySelector('.panel-header');
    if (header && !document.getElementById(`editGridBtn-${key}`)) {
      const btn = document.createElement('button');
      btn.id = `editGridBtn-${key}`;
      btn.type = 'button';
      btn.className = 'btn-secondary btn-sm';
      btn.textContent = '✏️ Edit Grid';
      btn.addEventListener('click', () => toggleGridEdit(key));
      header.appendChild(btn);
    }
  });

  document.getElementById('addTeacherBtn').addEventListener('click', () => {
    openScheduleRowModal('teachers');
  });

  document.getElementById('scheduleRowForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const target = document.getElementById('scheduleTargetType').value;
    const c1 = document.getElementById('schedCol1').value.trim();
    const c2 = document.getElementById('schedCol2').value.trim();
    const c3 = document.getElementById('schedCol3').value.trim();

    if (target === 'teachers') {
      state.teachers.push({ short: c1.toUpperCase(), full: c2, designation: c3 || 'Faculty', lastUpdated: nowStamp() });
      recordChange(`[Teacher ${c1.toUpperCase()}] Added ${c2}`);
    } else {
      state[target].push({ col1: c1, col2: c2, col3: c3 });
    }

    saveState();
    renderSchedules();
    renderCatalogManager();
    renderCalendar();
    e.target.reset();
    document.getElementById('scheduleRowModal').classList.add('hidden');
    showToast('Entry added!');
  });
}

function toggleGridEdit(key) {
  if (editModes[key]) {
    commitGridEdit(key);
  } else {
    editModes[key] = true;
    renderSchedules();
    showToast('Grid Edit Mode ON — tap any cell directly!');
  }
}

function commitGridEdit(key) {
  if (key === 'routine') {
    const effInput = document.getElementById('inlineEffectiveInput');
    if (effInput) {
      state.routineMeta.effectiveFrom = effInput.value.trim() || state.routineMeta.effectiveFrom;
      syncSemesterHeaderLabels();
    }
    document.querySelectorAll('#classRoutineTable input.grid-cell-input').forEach((inp) => {
      const day = inp.dataset.day;
      const pIdx = parseInt(inp.dataset.period, 10);
      if (!state.routine[day]) state.routine[day] = ['', '', '', '', '', ''];
      state.routine[day][pIdx] = inp.value.trim();
    });
  } else if (key === 'teachers') {
    document.querySelectorAll('#teacherTable tbody tr').forEach((tr, idx) => {
      if (!state.teachers[idx]) return;
      const inputs = tr.querySelectorAll('input.grid-cell-input');
      if (inputs.length >= 3) {
        const prevShort = state.teachers[idx].short;
        const prevFull = state.teachers[idx].full;
        const prevDesig = state.teachers[idx].designation;
        state.teachers[idx].short = inputs[0].value.trim().toUpperCase();
        state.teachers[idx].full = inputs[1].value.trim();
        state.teachers[idx].designation = inputs[2].value.trim();
        if (prevShort !== state.teachers[idx].short || prevFull !== state.teachers[idx].full || prevDesig !== state.teachers[idx].designation) {
          state.teachers[idx].lastUpdated = nowStamp();
          recordChange(`[Teacher ${state.teachers[idx].short}] Updated via routine grid`);
        }
      }
    });
  } else {
    const map = {
      busRegular: 'busRegularTable',
      examRoutine: 'examRoutineTable',
      busExam: 'busExamTable',
      academicNotes: 'academicNotesTable'
    };
    const tId = map[key];
    document.querySelectorAll(`#${tId} tbody tr`).forEach((tr, idx) => {
      if (!state[key][idx]) return;
      const inputs = tr.querySelectorAll('input.grid-cell-input');
      if (inputs.length >= 3) {
        state[key][idx].col1 = inputs[0].value.trim();
        state[key][idx].col2 = inputs[1].value.trim();
        state[key][idx].col3 = inputs[2].value.trim();
      }
    });
  }

  editModes[key] = false;
  saveState();
  renderSchedules();
  renderCatalogManager();
  renderCalendar();
  showToast('Grid changes saved!');
}

window.openScheduleRowModal = function(type) {
  document.getElementById('scheduleTargetType').value = type;
  const configs = {
    busRegular: ['Add Regular Bus', 'Bus / Route Name', 'Departure Time', 'Direction / Notes'],
    examRoutine: ['Add Exam Entry', 'Date (YYYY-MM-DD)', 'Course Title & Code', 'Exam Time'],
    busExam: ['Add Exam Bus', 'Bus / Route Name', 'Time', 'Notes'],
    academicNotes: ['Add Academic Rule / Date', 'Milestone / Rule Title', 'Date or Duration', 'Details (Before/After/Off-days)'],
    teachers: ['Add Teacher', 'Short Form (e.g. SK)', 'Full Name', 'Designation']
  };
  const [title, l1, l2, l3] = configs[type];
  document.getElementById('scheduleModalTitle').textContent = title;
  document.getElementById('schedCol1Label').textContent = l1;
  document.getElementById('schedCol2Label').textContent = l2;
  document.getElementById('schedCol3Label').textContent = l3;
  document.getElementById('scheduleRowModal').classList.remove('hidden');
};

window.deleteScheduleRow = function(type, index) {
  state[type].splice(index, 1);
  saveState();
  renderSchedules();
  renderCatalogManager();
  renderCalendar();
};

function updateEditButtonLabels() {
  const rBtn = document.getElementById('editRoutineBtn');
  if (rBtn) {
    rBtn.textContent = editModes.routine ? '💾 Done Editing' : '✏️ Edit Grid';
    rBtn.className = editModes.routine ? 'btn-primary btn-sm' : 'btn-secondary btn-sm';
  }
  const tBtn = document.getElementById('editTeachersGridBtn');
  if (tBtn) {
    tBtn.textContent = editModes.teachers ? '💾 Done Editing' : '✏️ Edit Grid';
    tBtn.className = editModes.teachers ? 'btn-primary btn-sm' : 'btn-secondary btn-sm';
  }
  ['busRegular', 'examRoutine', 'busExam', 'academicNotes'].forEach((k) => {
    const btn = document.getElementById(`editGridBtn-${k}`);
    if (btn) {
      btn.textContent = editModes[k] ? '💾 Done Editing' : '✏️ Edit Grid';
      btn.className = editModes[k] ? 'btn-primary btn-sm' : 'btn-secondary btn-sm';
    }
  });
}

function renderSchedules() {
  updateEditButtonLabels();
  syncSemesterHeaderLabels();

  const effEl = document.getElementById('routineEffective');
  if (editModes.routine) {
    effEl.innerHTML = `<input id="inlineEffectiveInput" class="effective-edit-input" value="${escapeHtml(state.routineMeta.effectiveFrom)}" />`;
  } else {
    effEl.textContent = state.routineMeta.effectiveFrom;
  }

  const subRoutine = document.getElementById('sub-classRoutine');
  subRoutine.classList.toggle('grid-editing', editModes.routine || editModes.teachers);

  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  const rTable = document.getElementById('classRoutineTable');
  rTable.innerHTML = `
    <thead>
      <tr>
        <th>Day</th>
        <th>1st<br><small>10:30–11:20</small></th>
        <th>2nd<br><small>11:20–12:10</small></th>
        <th>3rd<br><small>12:10–1:00</small></th>
        <th class="break-col">BREAK<br><small>1:00–1:40</small></th>
        <th>4th<br><small>1:40–2:30</small></th>
        <th>5th<br><small>2:30–3:20</small></th>
        <th>6th<br><small>3:20–4:10</small></th>
      </tr>
    </thead>
    <tbody>
      ${days.map((d) => {
        const s = state.routine[d] || ['', '', '', '', '', ''];
        const cells = [0, 1, 2, 3, 4, 5].map((pIdx) => {
          const val = s[pIdx] || '';
          if (editModes.routine) {
            return `<td><input type="text" class="grid-cell-input" data-day="${d}" data-period="${pIdx}" value="${escapeHtml(val)}" placeholder="Free" /></td>`;
          }
          return `<td>${escapeHtml(val || '—')}</td>`;
        });
        return `
          <tr>
            <td><strong>${d}</strong></td>
            ${cells[0]}
            ${cells[1]}
            ${cells[2]}
            <td class="break-col">Break</td>
            ${cells[3]}
            ${cells[4]}
            ${cells[5]}
          </tr>
        `;
      }).join('')}
    </tbody>
  `;

  document.getElementById('teacherTable').innerHTML = `
    <thead><tr><th>Short Form</th><th>Full Name</th><th>Designation</th><th></th></tr></thead>
    <tbody>
      ${state.teachers.map((t, idx) => {
        if (editModes.teachers) {
          return `
            <tr>
              <td><input type="text" class="grid-cell-input" value="${escapeHtml(t.short)}" placeholder="Short" /></td>
              <td><input type="text" class="grid-cell-input" value="${escapeHtml(t.full)}" placeholder="Full Name" /></td>
              <td><input type="text" class="grid-cell-input" value="${escapeHtml(t.designation)}" placeholder="Designation" /></td>
              <td><button class="btn-danger btn-xs" onclick="deleteScheduleRow('teachers', ${idx})">✕</button></td>
            </tr>
          `;
        }
        return `
          <tr>
            <td><strong>${escapeHtml(t.short)}</strong></td>
            <td>${escapeHtml(t.full)}</td>
            <td>${escapeHtml(t.designation)}</td>
            <td><button class="btn-danger btn-xs" onclick="deleteScheduleRow('teachers', ${idx})">✕</button></td>
          </tr>
        `;
      }).join('')}
    </tbody>
  `;

  renderGenericTable('busRegularTable', 'busRegular', ['Bus / Route', 'Time', 'Details']);
  renderGenericTable('examRoutineTable', 'examRoutine', ['Date', 'Course Title', 'Time']);
  renderGenericTable('busExamTable', 'busExam', ['Exam Bus', 'Time', 'Notes']);
  renderGenericTable('academicNotesTable', 'academicNotes', ['Rule / Milestone', 'Date / Duration', 'Description']);
}

function renderGenericTable(tableId, stateKey, headers) {
  const rows = state[stateKey] || [];
  const isEditing = !!editModes[stateKey];
  const tbl = document.getElementById(tableId);
  tbl.closest('.sub-panel')?.classList.toggle('grid-editing', isEditing);

  tbl.innerHTML = `
    <thead><tr><th>${headers[0]}</th><th>${headers[1]}</th><th>${headers[2]}</th><th></th></tr></thead>
    <tbody>
      ${rows.length ? rows.map((r, i) => {
        if (isEditing) {
          return `
            <tr>
              <td><input type="text" class="grid-cell-input" value="${escapeHtml(r.col1)}" /></td>
              <td><input type="text" class="grid-cell-input" value="${escapeHtml(r.col2)}" /></td>
              <td><input type="text" class="grid-cell-input" value="${escapeHtml(r.col3 || '')}" /></td>
              <td><button class="btn-danger btn-xs" onclick="deleteScheduleRow('${stateKey}', ${i})">✕</button></td>
            </tr>
          `;
        }
        return `
          <tr>
            <td><strong>${escapeHtml(r.col1)}</strong></td>
            <td>${escapeHtml(r.col2)}</td>
            <td>${escapeHtml(r.col3 || '')}</td>
            <td><button class="btn-danger btn-xs" onclick="deleteScheduleRow('${stateKey}', ${i})">✕</button></td>
          </tr>
        `;
      }).join('') : `<tr><td colspan="4" class="muted">No entries yet. Tap + Add above.</td></tr>`}
    </tbody>
  `;
}

/* ===== TAB 3: CALENDAR WITH YELLOW OFF-DAYS (EXCEPT FRIDAYS) ===== */
function bindCalendarEvents() {
  document.getElementById('prevMonthBtn').addEventListener('click', () => {
    calMonth -= 1;
    if (calMonth < 0) { calMonth = 11; calYear -= 1; }
    renderCalendar();
  });

  document.getElementById('nextMonthBtn').addEventListener('click', () => {
    calMonth += 1;
    if (calMonth > 11) { calMonth = 0; calYear += 1; }
    renderCalendar();
  });

  document.getElementById('toggleYellowOffBtn').addEventListener('click', () => {
    if (!selectedCalDate) return;
    const dObj = new Date(selectedCalDate + 'T00:00:00');
    if (dObj.getDay() === 5) {
      showToast('Fridays are already weekly off-days (not yellow-marked).');
      return;
    }
    const existing = state.offDays[selectedCalDate] || { isYellowOff: false, note: '' };
    existing.isYellowOff = !existing.isYellowOff;
    existing.note = document.getElementById('offDayReasonInput').value.trim();
    state.offDays[selectedCalDate] = existing;
    saveState();
    renderCalendar();
    selectCalendarDate(selectedCalDate);
    showToast(existing.isYellowOff ? 'Marked Yellow Off-Day!' : 'Removed Yellow Off-Day.');
  });

  document.getElementById('saveDateNoteBtn').addEventListener('click', () => {
    if (!selectedCalDate) return;
    const existing = state.offDays[selectedCalDate] || { isYellowOff: false, note: '' };
    existing.note = document.getElementById('offDayReasonInput').value.trim();
    state.offDays[selectedCalDate] = existing;
    saveState();
    renderCalendar();
    selectCalendarDate(selectedCalDate);
    showToast('Date note saved!');
  });
}

function renderCalendar() {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  document.getElementById('calMonthLabel').textContent = `${monthNames[calMonth]} ${calYear}`;

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const satStartOffset = (firstDay + 1) % 7;
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  const grid = document.getElementById('calDaysGrid');
  let html = '';

  for (let i = 0; i < satStartOffset; i++) {
    html += `<div class="cal-day empty"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const mm = String(calMonth + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    const dateStr = `${calYear}-${mm}-${dd}`;
    const dObj = new Date(calYear, calMonth, day);
    const isFriday = dObj.getDay() === 5;
    const offInfo = state.offDays[dateStr];
    const isYellowOff = !isFriday && offInfo && offInfo.isYellowOff;
    const exam = state.examRoutine.find((ex) => ex.col1.includes(dateStr));

    let classes = 'cal-day';
    if (isFriday) classes += ' friday';
    if (isYellowOff) classes += ' yellow-off';
    if (exam) classes += ' exam-day';
    if (selectedCalDate === dateStr) classes += ' selected';

    let tag = '';
    if (isFriday) tag = 'Fri';
    else if (exam) tag = 'Exam';
    else if (offInfo?.note) tag = offInfo.note;
    else if (isYellowOff) tag = 'Off';

    html += `
      <div class="${classes}" onclick="selectCalendarDate('${dateStr}')">
        <div class="cal-day-num">${day}</div>
        <div class="cal-tag">${escapeHtml(tag)}</div>
      </div>
    `;
  }

  grid.innerHTML = html;
}

window.selectCalendarDate = function(dateStr) {
  selectedCalDate = dateStr;
  renderCalendar();
  const dObj = new Date(dateStr + 'T00:00:00');
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[dObj.getDay()];
  const isFriday = dObj.getDay() === 5;
  const offInfo = state.offDays[dateStr] || { isYellowOff: false, note: '' };
  const exam = state.examRoutine.find((ex) => ex.col1.includes(dateStr));

  document.getElementById('selectedDateTitle').textContent = `${dateStr} (${dayName})`;
  const infoEl = document.getElementById('selectedDateInfo');
  const actionsEl = document.getElementById('selectedDateActions');

  if (isFriday) {
    infoEl.textContent = 'Friday is a regular weekly off-day (excluded from yellow off-day marking).';
    actionsEl.classList.add('hidden');
  } else {
    let statusMsg = offInfo.isYellowOff ? '🟡 Marked as Yellow Off-Day.' : 'Regular working/academic day.';
    if (exam) statusMsg += ` | 📝 Exam: ${exam.col2}`;
    infoEl.textContent = statusMsg;
    document.getElementById('offDayReasonInput').value = offInfo.note || '';
    actionsEl.classList.remove('hidden');
  }
};

/* ===== TAB 4 & 5: SYLLABUS & COURSE NOTES ===== */
function populateCourseSelects() {
  const options = state.courses.map((c) => `<option value="${escapeHtml(c.code)}">${escapeHtml(c.code)} — ${escapeHtml(c.title)}</option>`).join('');
  ['logCourse', 'syllabusCourseSelect', 'notesCourseSelect'].forEach((id) => {
    const el = document.getElementById(id);
    const prev = el.value;
    el.innerHTML = options;
    if (prev && state.courses.some((c) => c.code === prev)) el.value = prev;
  });
}

function bindSyllabusAndNotes() {
  document.getElementById('syllabusCourseSelect').addEventListener('change', renderSyllabus);
  document.getElementById('notesCourseSelect').addEventListener('change', renderNotes);

  document.getElementById('addSyllabusTopicBtn').addEventListener('click', () => {
    const code = document.getElementById('syllabusCourseSelect').value;
    const input = document.getElementById('syllabusTopicInput');
    const text = input.value.trim();
    if (!text) return;
    if (!state.syllabus[code]) state.syllabus[code] = [];
    state.syllabus[code].push({ text, done: false });
    input.value = '';
    saveState();
    renderSyllabus();
  });

  document.getElementById('saveCourseNoteBtn').addEventListener('click', () => {
    const code = document.getElementById('notesCourseSelect').value;
    const title = document.getElementById('noteTitleInput').value.trim() || 'Untitled Note';
    const body = document.getElementById('noteBodyInput').value.trim();
    if (!body) {
      showToast('Write some note content first.');
      return;
    }
    if (!state.notes[code]) state.notes[code] = [];
    state.notes[code].unshift({
      id: Date.now(),
      title,
      body,
      date: new Date().toLocaleDateString()
    });
    document.getElementById('noteTitleInput').value = '';
    document.getElementById('noteBodyInput').value = '';
    saveState();
    renderNotes();
    showToast('Course note saved!');
  });

  document.getElementById('clearNoteFormBtn').addEventListener('click', () => {
    document.getElementById('noteTitleInput').value = '';
    document.getElementById('noteBodyInput').value = '';
  });
}

window.toggleSyllabusItem = function(code, idx) {
  state.syllabus[code][idx].done = !state.syllabus[code][idx].done;
  saveState();
  renderSyllabus();
};

window.deleteSyllabusItem = function(code, idx) {
  state.syllabus[code].splice(idx, 1);
  saveState();
  renderSyllabus();
};

function renderSyllabus() {
  const code = document.getElementById('syllabusCourseSelect').value || (state.courses[0] && state.courses[0].code) || '';
  const items = state.syllabus[code] || [];
  const list = document.getElementById('syllabusList');
  if (!code) {
    list.innerHTML = `<li class="muted">No course selected.</li>`;
    return;
  }
  if (!items.length) {
    list.innerHTML = `<li class="muted">No syllabus topics added for ${escapeHtml(code)} yet.</li>`;
    return;
  }
  list.innerHTML = items.map((item, idx) => `
    <li class="${item.done ? 'done' : ''}">
      <label>
        <input type="checkbox" ${item.done ? 'checked' : ''} onchange="toggleSyllabusItem('${escapeJsAttr(code)}', ${idx})" />
        <span>${escapeHtml(item.text)}</span>
      </label>
      <button class="btn-danger btn-xs" onclick="deleteSyllabusItem('${escapeJsAttr(code)}', ${idx})">✕</button>
    </li>
  `).join('');
}

window.deleteCourseNote = function(code, id) {
  state.notes[code] = (state.notes[code] || []).filter((n) => n.id !== id);
  saveState();
  renderNotes();
};

function renderNotes() {
  const code = document.getElementById('notesCourseSelect').value || (state.courses[0] && state.courses[0].code) || '';
  const notes = state.notes[code] || [];
  const list = document.getElementById('savedNotesList');
  if (!code) {
    list.innerHTML = `<p class="muted">No course selected.</p>`;
    return;
  }
  if (!notes.length) {
    list.innerHTML = `<p class="muted">No saved notes for ${escapeHtml(code)} yet.</p>`;
    return;
  }
  list.innerHTML = notes.map((n) => `
    <div class="note-card">
      <div class="note-card-head">
        <strong>${escapeHtml(n.title)}</strong>
        <div>
          <span class="muted" style="margin-right:8px">${escapeHtml(n.date)}</span>
          <button class="btn-danger btn-xs" onclick="deleteCourseNote('${escapeJsAttr(code)}', ${n.id})">Delete</button>
        </div>
      </div>
      <p>${escapeHtml(n.body)}</p>
    </div>
  `).join('');
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJsAttr(str) {
  return String(str || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
