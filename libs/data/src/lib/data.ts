export function data(): string {
  return 'data';
}

export type ExpenseCategory = 
  'GROCERY' |
  'COMMUTE' |
  'CLOTHES' |
  'SHOES' |
  'HOME' |
  'GIFTS';

export interface Expense {
  uid?: string;
  amount: number;
  category: ExpenseCategory;
  payingAccount: string;
}