import React from "react";
import { useBills } from "../hooks/useBills";
import { formatCurrency } from "../helpers/formatters";
import { APP_CONFIG } from "../config/appConfig";

export default function Analytics() {
  const { bills } = useBills();
  const totals = APP_CONFIG.categories.reduce((acc, cat) => {
    acc[cat.id] = bills.filter(b => b.category === cat.id).reduce((s, b) => s + b.amount, 0);
    return acc;
  }, {});
  const maxVal = Math.max(...Object.values(totals), 1);
  const totalGeral = Object.values(totals).reduce((a,b) => a+b, 0);

  return (
    <div style={{ background: "var(--card)", padding: "24px", borderRadius: "14px", border: "1px solid var(--border)", backdropFilter: "blur(12px)" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
        <i className="fa-solid fa-chart-pie" style={{ color: "var(--primary)" }}></i>
        Estatísticas por Categoria
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {APP_CONFIG.categories.map(cat => {
          const val = totals[cat.id] || 0;
          const pct = (val / maxVal) * 100;
          const share = totalGeral > 0 ? ((val / totalGeral) * 100).toFixed(1) : 0;
          return (
            <div key={cat.id}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <i className={cat.icon} style={{ color: cat.color }}></i>
                  <span>{cat.label}</span>
                </span>
                <span><strong>{formatCurrency(val)}</strong> <span style={{ color: "var(--text-dim)", marginLeft: "6px" }}>({share}%)</span></span>
              </div>
              <div style={{ height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: cat.color, transition: "width 0.4s" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
