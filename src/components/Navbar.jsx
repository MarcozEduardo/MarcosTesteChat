import React from "react";

export default function Navbar({ tab, setTab }) {
  return (
    <header className="header-nav">
      <div className="logo">
        <i className="fa-solid fa-wallet"></i>
        BILL<span>TRACKER</span>
      </div>
      <div className="nav-tabs">
        <button onClick={() => setTab("dash")} className={`nav-btn ${tab === "dash" ? "active" : ""}`}>
          <i className="fa-solid fa-table-cells-large"></i> Dashboard
        </button>
        <button onClick={() => setTab("stats")} className={`nav-btn ${tab === "stats" ? "active" : ""}`}>
          <i className="fa-solid fa-chart-column"></i> Relatórios
        </button>
        <button onClick={() => setTab("config")} className={`nav-btn ${tab === "config" ? "active" : ""}`}>
          <i className="fa-solid fa-gear"></i> Config
        </button>
      </div>
    </header>
  );
}
