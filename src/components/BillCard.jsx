import React from "react";
import { formatCurrency, formatDate, getDaysDiff } from "../helpers/formatters";
import { APP_CONFIG } from "../config/appConfig";

export default function BillCard({ bill, togglePayBill, deleteBill }) {
  const cat = APP_CONFIG.categories.find(c => c.id === bill.category) || { label: "Geral", icon: "fa-solid fa-tag", color: "#fff" };
  const isPaid = bill.status === "paid";
  const isOver = bill.status === "overdue";
  const diff = getDaysDiff(bill.dueDate);

  return (
    <div style={{
      background: "var(--card)", backdropFilter: "blur(12px)", borderRadius: "14px",
      border: isPaid ? "1px solid rgba(74, 222, 128, 0.25)" : (isOver ? "1px solid rgba(248, 113, 113, 0.4)" : "1px solid var(--border)"),
      padding: "20px", display: "flex", flexDirection: "column", gap: "14px",
      transition: "transform 0.15s ease, border-color 0.2s"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, padding: "5px 10px", borderRadius: "12px", background: `${cat.color}22`, color: cat.color, display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <i className={cat.icon}></i> {cat.label}
        </span>
        <button onClick={() => deleteBill(bill.id)} style={{ background: "transparent", border: "none", color: "var(--text-dim)", cursor: "pointer", fontSize: "14px" }}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div>
        <div style={{ fontSize: "17px", fontWeight: 700, textDecoration: isPaid ? "line-through" : "none", color: isPaid ? "var(--text-dim)" : "var(--text)" }}>{bill.name}</div>
        <div style={{ fontSize: "24px", fontWeight: 800, color: "var(--primary)", marginTop: "4px" }}>{formatCurrency(bill.amount)}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "var(--text-dim)", display: "flex", alignItems: "center", gap: "5px" }}>
            <i className="fa-regular fa-calendar"></i> {formatDate(bill.dueDate)}
          </div>
          {!isPaid && <div style={{ fontSize: "12px", fontWeight: 700, color: isOver ? "var(--danger)" : "var(--primary)", marginTop: "3px" }}>{diff.text}</div>}
        </div>
        <button onClick={() => togglePayBill(bill.id)} style={{
          padding: "7px 16px", borderRadius: "6px", border: "none", fontWeight: 700, cursor: "pointer",
          background: isPaid ? "rgba(74, 222, 128, 0.15)" : "var(--secondary)",
          color: isPaid ? "var(--success)" : "#000",
          display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px"
        }}>
          {isPaid ? <><i className="fa-solid fa-check"></i> Pago</> : <><i className="fa-solid fa-money-bill-wave"></i> Pagar</>}
        </button>
      </div>
    </div>
  );
}
