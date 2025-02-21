import { IVehicle } from "../interface/index";

export abstract class Vehicle implements IVehicle {
  protected speed: number = 90;

  constructor(protected name: string) {}

  abstract move(): string;

  accelerate(): void {
    console.log(`${this.name} accelerates to ${this.speed} km/h.`);
  }
}
