import React from "react";

export default function Navbar({ tab, setTab }) {
  return (
    <header className="header-nav">
      <div className="logo">BILL<span>TRACKER</span></div>
      <div className="nav-tabs">
        <button onClick={() => setTab("dash")} className={`nav-btn ${tab === "dash" ? "active" : ""}`}>Dashboard</button>
        <button onClick={() => setTab("stats")} className={`nav-btn ${tab === "stats" ? "active" : ""}`}>Relatórios</button>
      </div>
    </header>
  );
}
