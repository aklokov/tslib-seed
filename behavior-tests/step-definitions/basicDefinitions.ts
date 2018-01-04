import { IWorld } from "../support/world";
import { defineSupportCode, StepDefinitions } from "cucumber";

defineSupportCode(function ({ Given, When, Then }: StepDefinitions): void {
  Given(/^I have a given step$/, async function (this: IWorld): Promise<void> {
    console.log("given step works");
  });

  When(/^I go through when step$/, async function (this: IWorld): Promise<void> {
    console.log("when step works");
  });

  Then(/^I can reach then step$/, async function (this: IWorld): Promise<void> {
    console.log("then step works");
  });

});
