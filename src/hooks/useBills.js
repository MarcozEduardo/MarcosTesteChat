import { useContext } from "react";
import { BillContext } from "../context/BillContext";

export const useBills = () => {
  const ctx = useContext(BillContext);
  if (!ctx) throw new Error("useBills deve ser usado dentro de BillProvider");
  return ctx;
};
