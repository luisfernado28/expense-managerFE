import { useQuery } from '@tanstack/react-query';
import { getExpenses } from '../api/expenses';
import type { Expense } from '../types/expense';

export function useExpenses() {
  return useQuery<Expense[]>({ queryKey: ['expenses'], queryFn: getExpenses });
}