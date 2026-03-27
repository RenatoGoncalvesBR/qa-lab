import { Page, Locator } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly input: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(text: string) {
    await this.input.fill(text);
    await this.input.press('Enter');
  }

  async removeFirstTodo() {
    await this.todoItems.first().hover();
    await this.page.locator('.destroy').first().click();
  }
}