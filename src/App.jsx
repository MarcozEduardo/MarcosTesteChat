import React, { useState } from "react";
import { BillProvider } from "./context/BillContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Config from "./pages/Config";

export default function App() {
  const [tab, setTab] = useState("dash");
  return (
    <ThemeProvider>
      <BillProvider>
        <div className="container">
          <Navbar tab={tab} setTab={setTab} />
          {tab === "dash" && <Dashboard />}
          {tab === "stats" && <Analytics />}
          {tab === "config" && <Config />}
        </div>
      </BillProvider>
    </ThemeProvider>
  );
}
