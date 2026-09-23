import React, { useState } from "react";
import { useBills } from "../hooks/useBills";
import BillCard from "../components/BillCard";
import { formatCurrency } from "../helpers/formatters";
import { APP_CONFIG } from "../config/appConfig";

export default function Dashboard() {
  const { bills, togglePayBill, deleteBill, addBill } = useBills();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [cat, setCat] = useState("moradia");

  const pending = bills.filter(b => b.status !== "paid");
  const totalPending = pending.reduce((a,b) => a + b.amount, 0);
  const totalPaid = bills.filter(b => b.status === "paid").reduce((a,b) => a + b.amount, 0);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !amount || !dueDate) return;
    addBill({ name, amount: parseFloat(amount), dueDate, category: cat });
    setName(""); setAmount(""); setDueDate("");
  };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "28px" }}>
        <div style={{ background: "var(--card)", padding: "20px", borderRadius: "12px", border: "1px solid var(--border)" }}>
          <div style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>Total Pendente</div>
          <div style={{ fontSize: "26px", fontWeight: 800, color: "var(--red)", marginTop: "4px" }}>{formatCurrency(totalPending)}</div>
        </div>
        <div style={{ background: "var(--card)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(74, 222, 128, 0.2)" }}>
          <div style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>Total Pago</div>
          <div style={{ fontSize: "26px", fontWeight: 800, color: "var(--green)", marginTop: "4px" }}>{formatCurrency(totalPaid)}</div>
        </div>
      </div>

      <form onSubmit={handleAdd} style={{ display: "flex", gap: "10px", flexWrap: "wrap", background: "var(--card)", padding: "16px", borderRadius: "12px", border: "1px solid var(--border)", marginBottom: "24px" }}>
        <input required placeholder="Nome da conta..." value={name} onChange={e=>setName(e.target.value)} style={{ flex: 2, minWidth: "160px", padding: "10px", borderRadius: "6px", background: "#111827", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }} />
        <input required type="number" step="0.01" placeholder="R$ Valor" value={amount} onChange={e=>setAmount(e.target.value)} style={{ flex: 1, minWidth: "100px", padding: "10px", borderRadius: "6px", background: "#111827", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }} />
        <input required type="date" value={dueDate} onChange={e=>setDueDate(e.target.value)} style={{ flex: 1, minWidth: "130px", padding: "10px", borderRadius: "6px", background: "#111827", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }} />
        <select value={cat} onChange={e=>setCat(e.target.value)} style={{ flex: 1, minWidth: "120px", padding: "10px", borderRadius: "6px", background: "#111827", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
          {APP_CONFIG.categories.map(c => <option key={c.id} value={c.id}>{c.icon} {c.label}</option>)}
        </select>
        <button type="submit" style={{ padding: "10px 20px", background: "var(--cyan)", color: "#000", border: "none", borderRadius: "6px", fontWeight: 700, cursor: "pointer" }}>+ Adicionar</button>
      </form>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
        {bills.map(b => <BillCard key={b.id} bill={b} togglePayBill={togglePayBill} deleteBill={deleteBill} />)}
      </div>
    </div>
  );
}
