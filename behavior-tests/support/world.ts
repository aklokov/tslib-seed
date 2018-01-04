import { Storage } from "./storage";

import { defineSupportCode, Hooks } from "cucumber";

export interface IWorld {
  store: Storage;
}

function World(this: IWorld): void {
  this.store = new Storage();
}

defineSupportCode(function ({ setWorldConstructor }: Hooks): void {
  setWorldConstructor(World);
});
