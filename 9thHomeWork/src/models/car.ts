import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
  move(): string {
    return `Electro car ${this.name} speeds on the highway at ${this.speed} km/h.`;
  }

  accelerate(): void {
    this.speed += 35;
    console.log(`${this.name} accelerates to ${this.speed} km/h.`);
  }
}
