import axios from 'axios';
import type { Expense } from '../types/expense';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getExpenses = async (): Promise<Expense[]> => {
  const res = await api.get('/Expense');
  return res.data;
};