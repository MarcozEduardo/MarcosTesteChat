import React, { useState } from "react";
import { BillProvider } from "./context/BillContext";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";

export default function App() {
  const [tab, setTab] = useState("dash");
  return (
    <BillProvider>
      <div className="container">
        <Navbar tab={tab} setTab={setTab} />
        {tab === "dash" ? <Dashboard /> : <Analytics />}
      </div>
    </BillProvider>
  );
}
