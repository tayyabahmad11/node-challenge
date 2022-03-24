import { format } from './formatter';
import { readExpenses } from './data/db-expenses';
import { to } from '@nc/utils/async';
import { Expense } from './types';
import { BadRequest, InternalError, NotFound} from '@nc/utils/errors';

export async function getExpenses(expenseId): Promise<Expense> {
  if (!expenseId) {
    throw BadRequest('expense\'s Id property is missing.');
  }

  const [dbError, rawExpense] = await to(readExpenses(expenseId));

  if (dbError) {
    throw InternalError(`Error fetching data from the DB: ${dbError.message}`);
  }

  if (!rawExpense) {
    throw NotFound(`Could not find any expenses with id ${expenseId}`);
  }

  return format(rawExpense);
}