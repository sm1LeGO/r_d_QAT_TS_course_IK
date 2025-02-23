import { Vehicle } from './vehicle';
import { IFuelable } from '../interfaces/index';

export class Truck extends Vehicle implements IFuelable {
    private fuel = 100;
    public constructor(name: string) {
        super(name, 'Truck');
    }

    public getAcceleration(): number {
        return 5;
    }

    public move(): string {
        if (this.fuel <= 0) {
            return `Truck ${this.name} cannot move, out of fuel!`;
        }
        this.fuel -= 5;
        return `Truck ${this.name} transports goods. Speed: ${this.speed} km/h. Fuel left: ${this.fuel}L.`;
    }

    public refuel(amount: number): void {
        this.fuel += amount;
        console.log(`Truck ${this.name} refueled with ${amount}L. Fuel now: ${this.fuel}L.`);
    }

    public getFuelLevel(): number {
        return this.fuel;
    }
}
