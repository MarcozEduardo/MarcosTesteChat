export const APP_CONFIG = {
  categories: [
    { id: "moradia", label: "Moradia", icon: "fa-solid fa-house-chimney", color: "#ff7b72" },
    { id: "alimentacao", label: "Alimentação", icon: "fa-solid fa-burger", color: "#7ee787" },
    { id: "lazer", label: "Lazer", icon: "fa-solid fa-clapperboard", color: "#a5d6ff" },
    { id: "saude", label: "Saúde", icon: "fa-solid fa-stethoscope", color: "#ffc629" },
    { id: "transporte", label: "Transporte", icon: "fa-solid fa-car-side", color: "#ff9671" },
    { id: "outros", label: "Outros", icon: "fa-solid fa-tag", color: "#f0f6fc" }
  ]
};

export const THEMES = {
  cyberpunk: {
    id: "cyberpunk",
    name: "Cyberpunk Neon",
    icon: "fa-solid fa-microchip",
    bg: "#090d16",
    bgGradient: "radial-gradient(circle at 50% 0%, #17233f 0%, #090d16 75%)",
    card: "rgba(18, 24, 38, 0.75)",
    primary: "#67e8f9",
    secondary: "#a78bfa",
    success: "#4ade80",
    danger: "#f87171",
    text: "#f8fafc",
    textDim: "#94a3b8",
    border: "rgba(103, 232, 249, 0.2)",
    inputBg: "#111827"
  },
  ocean: {
    id: "ocean",
    name: "Ocean Deep",
    icon: "fa-solid fa-water",
    bg: "#051224",
    bgGradient: "radial-gradient(circle at 50% 0%, #083358 0%, #051224 75%)",
    card: "rgba(15, 42, 71, 0.75)",
    primary: "#22d3ee",
    secondary: "#38bdf8",
    success: "#10b981",
    danger: "#fb7185",
    text: "#e0f2fe",
    textDim: "#94a3b8",
    border: "rgba(34, 211, 238, 0.22)",
    inputBg: "#0b1f39"
  },
  sunset: {
    id: "sunset",
    name: "Sunset Glow",
    icon: "fa-solid fa-sun",
    bg: "#1a0b16",
    bgGradient: "radial-gradient(circle at 50% 0%, #4a1d3a 0%, #1a0b16 75%)",
    card: "rgba(45, 20, 40, 0.75)",
    primary: "#fb923c",
    secondary: "#f472b6",
    success: "#84cc16",
    danger: "#ef4444",
    text: "#fdf2f8",
    textDim: "#f5a1cc",
    border: "rgba(251, 146, 60, 0.25)",
    inputBg: "#2d0c26"
  }
};
