import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Kingdom Mandate</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/support">Support</a>
        <a href="/more">More</a>
        <div className="cart">🛒<span className="cart-count">0</span></div>
      </nav>
    </header>
  );
}
