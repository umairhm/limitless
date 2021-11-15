import { Injectable } from '@nestjs/common';

import { Expense } from '@limitless/data';

@Injectable()
export class AppService {
  expenses: Array<Expense> = [
    {
      uid: 'abc-1',
      amount: 20.3,
      category: 'GROCERY',
      payingAccount: 'RBC'
    },
    {
      uid: 'abc-2',
      amount: 54.6,
      category: 'GIFTS',
      payingAccount: 'Walmart'
    }
  ];

  getExpenses(): Array<Expense> {
    return this.expenses;
  }

  addExpense() {
    this.expenses.push({
      uid: '3',
      amount: 25,
      category: 'HOME',
      payingAccount: 'RBC'
    });
  }
}
