import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Expense } from '@limitless/data';

@Component({
  selector: 'limitless-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  expenses: Array<Expense> = [];

  constructor(private httpClient: HttpClient) {
    this.fetchExpenses();
  }

  private fetchExpenses() {
    this.httpClient.get<Array<Expense>>('/api/expenses')
      .subscribe((_expenses) => {
        this.expenses = _expenses;
      })
  }

  addExpense() {
    this.httpClient.post('/api/addExpense', {})
      .subscribe(() => {
        this.fetchExpenses();
      });
  }
}
