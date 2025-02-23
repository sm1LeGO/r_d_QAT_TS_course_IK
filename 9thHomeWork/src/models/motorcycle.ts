import { Vehicle } from './vehicle';
import { IFuelable } from '../interfaces/index';

export class Motorcycle extends Vehicle implements IFuelable {
    private fuel = 10;

    public move(): string {
        if (this.fuel <= 0) {
            return `Motorcycle ${this.name} cannot move, out of fuel!`;
        }
        this.fuel -= 2;
        return `Motorcycle ${this.name} speeds on the highway at ${this.speed} km/h. Fuel left: ${this.fuel}L.`;
    }

    public accelerate(): void {
        this.speed += 50;
        console.log(`Motorcycle ${this.name} accelerates to ${this.speed} km/h.`);
    }

    public refuel(amount: number): void {
        this.fuel += amount;
        console.log(`Motorcycle ${this.name} refueled with ${amount}L. Fuel now: ${this.fuel}L.`);
    }

    public getFuelLevel(): number {
        return this.fuel;
    }
}
