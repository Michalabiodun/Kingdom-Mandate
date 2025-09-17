// --------------------
// Quick Links
// --------------------
const quickLinks = [
  "Connect & Engage",
  "Testimonies",
  "Morning Prayerline",
  "Book a 1:1 Session",
  "Bible Calendar",
  "Prayerline Playback",
  "Prayer Request",
  "Livestream"
];

const quickLinksContainer = document.getElementById("quick-links");
if (quickLinksContainer) {
  quickLinks.forEach(text => {
    const btn = document.createElement("button");
    btn.className = "quick-link-btn";
    btn.textContent = text;
    quickLinksContainer.appendChild(btn);
  });
}

// --------------------
// Feature Grid
// --------------------
const features = [
  { title: "Kingdom Mandate TV", date: "Every Sunday" },
  { title: "Morning Prayerline", date: "Weekdays 6AM" },
  { title: "Events", date: "Monthly Gatherings" },
  { title: "Support", date: "Partner with Us" }
];

const featuresContainer = document.getElementById("features");
if (featuresContainer) {
  features.forEach(item => {
    const box = document.createElement("div");
    box.className = "feature-box";
    box.innerHTML = `<h3>${item.title}</h3><p>${item.date}</p>`;
    featuresContainer.appendChild(box);
  });
}

// --------------------
// Prayer Meetings
// --------------------
const MEETINGS = [
  { title:'Daily Morning Devotional', time:'05:00-05:45', days:[0,1,2,3,4,5,6] },
  { title:'Praying Parents', time:'18:30-19:30', days:[0,1,2,3,4,5,6] },
  { title:'Midnight Prayer', time:'00:00-01:00', days:[0,1,2,3,4,5,6] },
  { title:'Tuesday Prayer Time', time:'21:00-22:00', days:[2] },
  { title:'Thursday Prayer Meeting', time:'20:00-21:00', days:[4] }
];

const pad = n => String(n).padStart(2,'0');
const parseRange = r => {
  const [a,b] = r.split('-');
  const [h1,m1] = a.split(':').map(Number);
  const [h2,m2] = b.split(':').map(Number);
  return { start:h1*60+m1, end:h2*60+m2 };
};
const nowMinutes = () => new Date().getHours()*60 + new Date().getMinutes();
const isNowWithin = r => {
  const {start,end} = parseRange(r);
  const n = nowMinutes();
  return end >= start ? (n >= start && n < end) : (n >= start || n < end);
};
const todayIndex = () => new Date().getDay();
const humanTime = r => {
  const fmt = t => {
    const [H,M] = t.split(':').map(Number);
    const ampm = H >= 12 ? 'PM' : 'AM';
    const h = H % 12 === 0 ? 12 : H % 12;
    return `${h}:${pad(M)} ${ampm}`;
  };
  const [a,b] = r.split('-');
  return `${fmt(a)} – ${fmt(b)}`;
};

function renderMeetings(){
  const container = document.getElementById('meetings');
  if (!container) return;
  container.innerHTML = '';
  const today = todayIndex();
  MEETINGS.forEach(m => {
    const active = m.days.includes(today) && isNowWithin(m.time);
    const div = document.createElement('div');
    div.className = 'meeting' + (active ? ' active' : '');
    div.innerHTML = `
      <div class="meeting-title">${m.title}</div>
      <div class="meeting-time">${humanTime(m.time)}</div>
      ${active ? '<span class="badge-now">Happening now</span>' : ''}
    `;
    container.appendChild(div);
  });
}
renderMeetings();

// --------------------
// Upcoming Conference Notify
// --------------------
const notifyBtn = document.getElementById('notifyBtn');
if (notifyBtn) {
  notifyBtn.addEventListener('click', () => {
    alert('You will be notified when conference details are announced.');
  });
}
