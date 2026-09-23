import React from "react";
import { formatCurrency, formatDate, getDaysDiff } from "../helpers/formatters";
import { APP_CONFIG } from "../config/appConfig";

export default function BillCard({ bill, togglePayBill, deleteBill }) {
  const cat = APP_CONFIG.categories.find(c => c.id === bill.category) || { label: "Geral", icon: "🏷️", color: "#fff" };
  const isPaid = bill.status === "paid";
  const isOver = bill.status === "overdue";
  const diff = getDaysDiff(bill.dueDate);

  return (
    <div style={{
      background: "var(--card)", backdropFilter: "blur(12px)", borderRadius: "14px",
      border: isPaid ? "1px solid rgba(74, 222, 128, 0.2)" : (isOver ? "1px solid rgba(248, 113, 113, 0.4)" : "1px solid var(--border)"),
      padding: "20px", display: "flex", flexDirection: "column", gap: "14px"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, padding: "4px 8px", borderRadius: "12px", background: `${cat.color}20`, color: cat.color }}>
          {cat.icon} {cat.label}
        </span>
        <button onClick={() => deleteBill(bill.id)} style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer" }}>✕</button>
      </div>
      <div>
        <div style={{ fontSize: "17px", fontWeight: 700, textDecoration: isPaid ? "line-through" : "none", color: isPaid ? "#64748b" : "#fff" }}>{bill.name}</div>
        <div style={{ fontSize: "24px", fontWeight: 800, color: "var(--cyan)", marginTop: "4px" }}>{formatCurrency(bill.amount)}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#94a3b8" }}>Vence: {formatDate(bill.dueDate)}</div>
          {!isPaid && <div style={{ fontSize: "12px", fontWeight: 700, color: isOver ? "var(--red)" : "var(--cyan)" }}>{diff.text}</div>}
        </div>
        <button onClick={() => togglePayBill(bill.id)} style={{
          padding: "6px 14px", borderRadius: "6px", border: "none", fontWeight: 700, cursor: "pointer",
          background: isPaid ? "rgba(74, 222, 128, 0.15)" : "var(--purple)",
          color: isPaid ? "var(--green)" : "#000"
        }}>
          {isPaid ? "✓ Pago" : "Pagar"}
        </button>
      </div>
    </div>
  );
}
