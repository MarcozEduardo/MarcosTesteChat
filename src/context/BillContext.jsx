import React, { createContext, useState, useEffect } from "react";
import { SEED_BILLS } from "../services/seedData";

export const BillContext = createContext();

export const BillProvider = ({ children }) => {
  const [bills, setBills] = useState(() => {
    const saved = localStorage.getItem("bob_bills_tracker");
    return saved ? JSON.parse(saved) : SEED_BILLS;
  });

  useEffect(() => {
    localStorage.setItem("bob_bills_tracker", JSON.stringify(bills));
  }, [bills]);

  const addBill = (b) => {
    const today = new Date().toISOString().split("T")[0];
    const newBill = {
      ...b,
      id: Date.now().toString(),
      status: b.dueDate < today ? "overdue" : "pending"
    };
    setBills(prev => [newBill, ...prev]);
  };

  const deleteBill = (id) => setBills(prev => prev.filter(b => b.id !== id));

  const togglePayBill = (id) => {
    const today = new Date().toISOString().split("T")[0];
    setBills(prev => prev.map(b => {
      if (b.id === id) {
        const isPaid = b.status === "paid";
        const isOver = b.dueDate < today;
        return { ...b, status: isPaid ? (isOver ? "overdue" : "pending") : "paid" };
      }
      return b;
    }));
  };

  return (
    <BillContext.Provider value={{ bills, addBill, deleteBill, togglePayBill }}>
      {children}
    </BillContext.Provider>
  );
};
