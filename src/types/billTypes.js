/**
 * @typedef {Object} Bill
 * @property {string} id
 * @property {string} name
 * @property {number} amount
 * @property {string} dueDate
 * @property {string} category
 * @property {"pending"|"paid"|"overdue"} status
 */
export const BILL_STATUS = { PENDING: "pending", PAID: "paid", OVERDUE: "overdue" };
