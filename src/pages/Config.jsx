import React from "react";
import { useTheme } from "../context/ThemeContext";
import { THEMES } from "../config/appConfig";

export default function Config() {
  const { themeId, setThemeId } = useTheme();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ background: "var(--card)", padding: "24px", borderRadius: "14px", border: "1px solid var(--border)", backdropFilter: "blur(12px)" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "6px", display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="fa-solid fa-palette" style={{ color: "var(--primary)" }}></i>
          Preferências de Tema
        </h2>
        <p style={{ fontSize: "13px", color: "var(--text-dim)", marginBottom: "20px" }}>Escolha a identidade visual que combina com seu estilo. Suas preferências são salvas automaticamente.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {Object.values(THEMES).map(t => {
            const active = t.id === themeId;
            return (
              <button key={t.id} onClick={() => setThemeId(t.id)} style={{
                background: t.bgGradient,
                padding: "20px",
                borderRadius: "12px",
                border: active ? `2px solid ${t.primary}` : "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
                textAlign: "left",
                boxShadow: active ? `0 0 24px ${t.primary}55` : "none",
                transition: "all 0.3s ease",
                color: t.text
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <i className={t.icon} style={{ color: t.primary, fontSize: "22px" }}></i>
                  {active && <span style={{ fontSize: "11px", background: t.primary, color: "#000", padding: "3px 10px", borderRadius: "12px", fontWeight: 700 }}>ATIVO</span>}
                </div>
                <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "12px" }}>{t.name}</div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: t.primary, border: "2px solid rgba(255,255,255,0.15)" }}></span>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: t.secondary, border: "2px solid rgba(255,255,255,0.15)" }}></span>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: t.success, border: "2px solid rgba(255,255,255,0.15)" }}></span>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: t.danger, border: "2px solid rgba(255,255,255,0.15)" }}></span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ background: "var(--card)", padding: "24px", borderRadius: "14px", border: "1px solid var(--border)", backdropFilter: "blur(12px)" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
          <i className="fa-solid fa-circle-info" style={{ color: "var(--primary)" }}></i>
          Sobre o BillTracker
        </h2>
        <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: "1.7" }}>
          Aplicação modular em React + Vite. 11 pastas estruturadas. Persistência de dados local. Deploy contínuo via Vercel + BobArena.
        </p>
      </div>
    </div>
  );
}
