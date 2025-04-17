import { Before, After } from '@cucumber/cucumber';
import { getWorld } from './world';

Before(async function () {
  const world = getWorld(this);
  await world.init();
});

After(async function () {
  const world = getWorld(this);
  await world.close();
});
