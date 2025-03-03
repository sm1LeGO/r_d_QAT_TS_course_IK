import { Vehicle } from './vehicle';
import { IFuelable } from '../interfaces/index';

export class Motorcycle extends Vehicle implements IFuelable {
    private fuel = 10;
    public constructor(name: string) {
        super(name, 'Motorcycle');
    }

    public getAcceleration(): number {
        return 50;
    }

    public move(): string {
        if (this.fuel <= 0) {
            return `Motorcycle ${this.name} cannot move, out of fuel!`;
        }
        this.fuel -= 2;
        return `Motorcycle ${this.name} speeds on the highway at ${this.speed} km/h. Fuel left: ${this.fuel}L.`;
    }


    public refuel(amount: number): void {
        this.fuel += amount;
        console.log(`Motorcycle ${this.name} refueled with ${amount}L. Fuel now: ${this.fuel}L.`);
    }

    public getFuelLevel(): number {
        return this.fuel;
    }
}
