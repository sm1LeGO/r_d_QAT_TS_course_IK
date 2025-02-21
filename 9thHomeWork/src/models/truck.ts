import { Vehicle } from './vehicle';
import { IFuelable } from '../interface/index';

export class Truck extends Vehicle implements IFuelable {
    private fuel = 100;

    public move(): string {
        if (this.fuel <= 0) {
            return `Truck ${this.name} cannot move, out of fuel!`;
        }
        this.fuel -= 10;
        return `Truck ${this.name} transports goods. Speed: ${this.speed} km/h. Fuel left: ${this.fuel}L.`;
    }

    public accelerate(): void {
        this.speed -= 10;
        if (this.speed < 0) this.speed = 0;
        console.log(`Truck ${this.name} slows down to ${this.speed} km/h.`);
    }

    public refuel(amount: number): void {
        this.fuel += amount;
        console.log(`Truck ${this.name} refueled with ${amount}L. Fuel now: ${this.fuel}L.`);
    }

    public getFuelLevel(): number {
        return this.fuel;
    }
}
