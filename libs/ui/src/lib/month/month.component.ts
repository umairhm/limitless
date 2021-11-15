import { Component, Input, OnInit } from '@angular/core';

import { Expense } from '@limitless/data';

@Component({
  selector: 'limitless-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.less']
})
export class MonthComponent implements OnInit {
  @Input() expenses: Array<Expense> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
