import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('expenses')
  getExpenses() {
    return this.appService.getExpenses();
  }

  @Post('addExpense')
  addExpense() {
    return this.appService.addExpense();
  }
}
