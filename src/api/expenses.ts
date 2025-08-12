import axios from 'axios';
import type { Expense } from '../types/expense';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getExpenses = async (): Promise<Expense[]> => {
  const res = await api.get('/Expense');
  return res.data;
};