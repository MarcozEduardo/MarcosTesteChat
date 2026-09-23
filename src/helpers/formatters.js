export const formatCurrency = (val) => {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);
};

export const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
};

export const getDaysDiff = (dateStr) => {
  if (!dateStr) return { text: "", status: "normal" };
  const today = new Date();
  today.setHours(0,0,0,0);
  const due = new Date(dateStr + "T00:00:00");
  const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { text: `Atrasada há ${Math.abs(diff)}d`, status: "overdue" };
  if (diff === 0) return { text: "Vence hoje!", status: "critical" };
  if (diff === 1) return { text: "Vence amanhã", status: "warning" };
  return { text: `Vence em ${diff}d`, status: "normal" };
};
