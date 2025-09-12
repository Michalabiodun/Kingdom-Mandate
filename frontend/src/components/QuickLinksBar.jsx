import React from 'react';

const links = [
  "Connect & Engage",
  "Watch Video Playbacks on Kingdom Mandate TV Live!",
  "Morning Prayerline",
  "Book a 1:1 Session",
  "Bible Calendar",
  "Prayerline Playback",
  "Prayer Request",
  "Livestream"
];

export default function QuickLinksBar() {
  return (
    <div className="quick-links">
      {links.map((link, idx) => (
        <button key={idx} className="quick-link-btn">{link}</button>
      ))}
    </div>
  );
}
