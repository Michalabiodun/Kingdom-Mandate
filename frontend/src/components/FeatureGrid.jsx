import React from 'react';

const features = [
  "Kingdom Mandate TV",
  "Morning Prayerline",
  "Events",
  "Support"
];

export default function FeatureGrid() {
  return (
    <section className="features">
      {features.map((feature, idx) => (
        <div key={idx} className="feature-box">{feature}</div>
      ))}
    </section>
  );
}
