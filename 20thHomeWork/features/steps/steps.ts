import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getWorld } from '../support/world';

Given('the user is on the todo page', async function () {
  const world = getWorld(this);
  await world.page.goto('https://demo.playwright.dev/todomvc');
});

When('the user enters {string} and presses enter', async function (todoText: string) {
  const world = getWorld(this);
  await world.page.locator('.new-todo').fill(todoText);
  await world.page.keyboard.press('Enter');
});

Then('the todo list should contain {string}', async function (todoText: string) {
  const world = getWorld(this);
  const todoItem = world.page.locator('.todo-list li', { hasText: todoText });
  await expect(todoItem).toHaveCount(1);
});

When('the user marks {string} as completed', async function (todoText: string) {
  const world = getWorld(this);
  const item = world.page.locator('.todo-list li', { hasText: todoText });
  const checkbox = item.locator('.toggle');
  await checkbox.check();
});
  
Then('the todo item {string} should be marked as completed', async function (todoText: string) {
  const world = getWorld(this);
  const item = world.page.locator('.todo-list li', { hasText: todoText });
  const classList = await item.getAttribute('class');
  if (!classList?.includes('completed')) {
    throw new Error(`Todo "${todoText}" is not marked as completed`);
  }
});
  
When('the user deletes the todo item {string}', async function (todoText: string) {
  const world = getWorld(this);
  const item = world.page.locator('.todo-list li', { hasText: todoText });
  await item.hover();
  const destroyButton = item.locator('.destroy');
  await destroyButton.click();
});
  
Then('the todo list should not contain {string}', async function (todoText: string) {
  const world = getWorld(this);
  const items = await world.page.locator('.todo-list li').allTextContents();
  if (items.includes(todoText)) {
    throw new Error(`Expected "${todoText}" to be deleted, but it's still in the list`);
  }
});
  