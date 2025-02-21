import { Vehicle } from "./vehicle";
import { IFuelable } from "../interface/index";

export class Motorcycle extends Vehicle implements IFuelable {
  private fuel: number = 20;

  move(): string {
    if (this.fuel <= 0) {
      return `Motorcycle ${this.name} cannot move, out of fuel!`;
    }
    this.fuel -= 5;
    return `Motorcycle ${this.name} moves at ${this.speed} km/h. Fuel left: ${this.fuel}L.`;
  }

  accelerate(): void {
    this.speed += 50;
    console.log(`Motorcycle ${this.name} accelerates to ${this.speed} km/h.`);
  }

  refuel(amount: number): void {
    this.fuel += amount;
    console.log(`Motorcycle ${this.name} refueled with ${amount}L. Fuel now: ${this.fuel}L.`);
  }

  getFuelLevel(): number {
    return this.fuel;
  }
}
