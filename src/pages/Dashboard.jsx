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
  const totalOverdue = bills.filter(b => b.status === "overdue").reduce((a,b) => a + b.amount, 0);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !amount || !dueDate) return;
    addBill({ name, amount: parseFloat(amount), dueDate, category: cat });
    setName(""); setAmount(""); setDueDate("");
  };

  const inputStyle = { flex: 1, minWidth: "130px", padding: "10px 12px", borderRadius: "6px", background: "var(--input-bg)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--text)", fontSize: "14px" };
  const statBox = (label, val, color, iconClass) => (
    <div style={{ background: "var(--card)", padding: "20px", borderRadius: "12px", border: `1px solid ${color === "var(--primary)" ? "var(--border)" : "rgba(255,255,255,0.08)"}`, backdropFilter: "blur(12px)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "11px", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.5px" }}>{label}</div>
        <i className={iconClass} style={{ color: color, fontSize: "18px" }}></i>
      </div>
      <div style={{ fontSize: "26px", fontWeight: 800, color: color, marginTop: "6px" }}>{formatCurrency(val)}</div>
    </div>
  );

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "28px" }}>
        {statBox("Total Pendente", totalPending, "var(--primary)", "fa-solid fa-hourglass-half")}
        {statBox("Total Vencido", totalOverdue, "var(--danger)", "fa-solid fa-triangle-exclamation")}
        {statBox("Total Pago", totalPaid, "var(--success)", "fa-solid fa-circle-check")}
      </div>

      <form onSubmit={handleAdd} style={{ display: "flex", gap: "10px", flexWrap: "wrap", background: "var(--card)", padding: "16px", borderRadius: "12px", border: "1px solid var(--border)", marginBottom: "24px", backdropFilter: "blur(12px)" }}>
        <input required placeholder="Nome da conta..." value={name} onChange={e=>setName(e.target.value)} style={{ ...inputStyle, flex: 2, minWidth: "180px" }} />
        <input required type="number" step="0.01" placeholder="R$ Valor" value={amount} onChange={e=>setAmount(e.target.value)} style={{ ...inputStyle, minWidth: "110px" }} />
        <input required type="date" value={dueDate} onChange={e=>setDueDate(e.target.value)} style={inputStyle} />
        <select value={cat} onChange={e=>setCat(e.target.value)} style={inputStyle}>
          {APP_CONFIG.categories.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
        </select>
        <button type="submit" style={{ padding: "10px 20px", background: "var(--primary)", color: "#000", border: "none", borderRadius: "6px", fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <i className="fa-solid fa-plus"></i> Adicionar
        </button>
      </form>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
        {bills.map(b => <BillCard key={b.id} bill={b} togglePayBill={togglePayBill} deleteBill={deleteBill} />)}
      </div>
    </div>
  );
}
