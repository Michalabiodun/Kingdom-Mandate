// --------------------
// Quick Links
// --------------------
const quickLinks = [
  { text: "Prayer Request", link: "./support.html" },
  { text: "Testimonies" },
  { text: "Morning Prayerline" },
  { text: "Book a 1:1 Session", link: "./support.html" }, 
  { text: "Prayerline Playback" },
  { text: "Donate to the ministry" },
  { text: "Livestream" }
];

const quickLinksContainer = document.getElementById("quick-links");
if (quickLinksContainer) {
  quickLinks.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "quick-link-btn";

    if (item.link) {
      // If link exists, wrap button inside an anchor
      btn.textContent = item.text;
      const anchor = document.createElement("a");
      anchor.href = item.link;
      anchor.appendChild(btn);
      quickLinksContainer.appendChild(anchor);
    } else {
      btn.textContent = item.text;
      quickLinksContainer.appendChild(btn);
    }
  });
}


// --------------------
// Feature Grid
// --------------------
const features = [
  { title: "Kingdom Mandate TV", date: "Every Sunday", link: "https://www.youtube.com/" },
  { title: "Morning Prayerline", date: "Weekdays 6AM" },
  { title: "Events", date: "Monthly Gatherings", link: "/events.html" },
  { title: "Support", date: "Partner with Us", link: "/support.html" },
];

const featuresContainer = document.getElementById("features");
if (featuresContainer) {
  features.forEach(item => {
    const box = document.createElement("div");
    box.className = "feature-box";

    // If a link exists, wrap it in <a>
    if (item.link) {
      box.innerHTML = `
        <a href="${item.link}" class="feature-link">
          <h3>${item.title}</h3>
          <p>${item.date}</p>
        </a>
      `;
    } else {
      box.innerHTML = `<h3>${item.title}</h3><p>${item.date}</p>`;
    }

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


// Prayer Request Modal Logic
const prayerModal = document.getElementById('prayerModal');
const openPrayerModal = document.getElementById('openPrayerModal');
const closePrayerModal = document.getElementById('closePrayerModal');

if (openPrayerModal && prayerModal && closePrayerModal) {
  openPrayerModal.addEventListener('click', () => {
    prayerModal.style.display = 'flex';
  });

  closePrayerModal.addEventListener('click', () => {
    prayerModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === prayerModal) {
      prayerModal.style.display = 'none';
    }
  });
}

// Prayer Request character counter
const prayerTextarea = document.querySelector('.prayer-request-form textarea');
const charCount = document.querySelector('.char-count');
if (prayerTextarea && charCount) {
  prayerTextarea.addEventListener('input', () => {
    charCount.textContent = `${prayerTextarea.value.length} / 165`;
  });
}

// Prayer Request submit confirmation
const sendPrayerBtn = document.getElementById('sendPrayerBtn');
if (sendPrayerBtn) {
  sendPrayerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Thank you! Your prayer request has been sent.');
    prayerModal.style.display = 'none';
  });
}


// Reusable Modal Logic
const modalButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

// Open modal
modalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('show');
  });
});

// Close modal on X click
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('show');
    setTimeout(() => btn.closest('.modal').style.display = '', 300);
  });
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => modal.style.display = '', 300);
    }
  });
});

// Prayer Request character counter
const prayerModalTextarea = document.querySelector('#prayerModal textarea');
const prayerCharCount = document.querySelector('#prayerModal .char'-count);
