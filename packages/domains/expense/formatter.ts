import { Expense } from './types';

const publicFields = ['first_name', 'last_name', 'company_name'];

export function capitalize(word) {
  const str = `${word}`;
  return str[0].toUpperCase() + str.slice(1);
}

export function secureTrim(expense: Expense): string {
  return JSON.stringify(expense, publicFields);
}

export function format(rawExpense): Expense {
  return {
    id: rawExpense.id,
    user_id: rawExpense.user_id,
    merchant_name: rawExpense.merchant_name,
    amount_in_cents: rawExpense.amount_in_cent,
    currency: rawExpense.currency,
    date_created: rawExpense.date_created,
    status: rawExpense.status
  };
}
