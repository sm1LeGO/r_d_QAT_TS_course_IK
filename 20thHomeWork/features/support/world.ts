import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';

class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  constructor(options: any) {
    super(options);
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async close() {
    await this.page?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);

export function getWorld(world: any): CustomWorld {
  return world as CustomWorld;
}
