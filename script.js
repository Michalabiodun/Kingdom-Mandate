// Quick Links
const quickLinks = [
  "Connect & Engage",
  "Watch Video Playbacks on Kingdom Mandate TV Live!",
  "Morning Prayerline",
  "Book a 1:1 Session",
  "Bible Calendar",
  "Prayerline Playback",
  "Prayer Request",
  "Livestream"
];

const quickLinksContainer = document.getElementById("quick-links");
quickLinks.forEach(text => {
  const btn = document.createElement("button");
  btn.className = "quick-link-btn";
  btn.textContent = text;
  quickLinksContainer.appendChild(btn);
});

// Feature Grid (Static version)
const features = [
  { title: "Kingdom Mandate TV", date: "Every Sunday" },
  { title: "Morning Prayerline", date: "Weekdays 6AM" },
  { title: "Events", date: "Monthly Gatherings" },
  { title: "Support", date: "Partner with Us" }
];

const featuresContainer = document.getElementById("features");
features.forEach(item => {
  const box = document.createElement("div");
  box.className = "feature-box";
  box.innerHTML = `<h3>${item.title}</h3><p>${item.date}</p>`;
  featuresContainer.appendChild(box);
});
