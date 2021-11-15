import {
  getCurrentMonthExpenses,
  getAddExpenseButton
} from '../support/app.po';

describe('budget', () => {
  beforeEach(() => cy.visit('/'));

  it('should display expenses and add new expense', () => {
    getCurrentMonthExpenses().should((e) => expect(e.length).equal(2));
    getAddExpenseButton().click();
    getCurrentMonthExpenses().should((e) => expect(e.length).equal(3));
  });
});
