import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('Adicionar tarefa na lista', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo('Estudar Playwright');

  await expect(todoPage.todoItems).toContainText('Estudar ERRADO');
  await todoPage.removeFirstTodo();
  await expect(todoPage.todoItems).toHaveCount(0);
});