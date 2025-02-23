import { Vehicle } from './vehicle';
import { IFuelable, IChargeable } from '../interfaces/index';

export class HybridCar extends Vehicle implements IFuelable, IChargeable {
    private fuel = 40;
    private battery = 50;

    public move(): string {
        if (this.fuel > 0) {
            this.fuel -= 5;
            return `Hybrid Car ${this.name} runs on fuel at ${this.speed} km/h. Fuel left: ${this.fuel}L.`;
        } else if (this.battery > 0) {
            this.battery -= 10;
            return `Hybrid Car ${this.name} switches to electric at ${this.speed} km/h. Battery left: ${this.battery}%.`;
        }
        return `Hybrid Car ${this.name} cannot move, out of fuel and battery!`;
    }

    public accelerate(): void {
        this.speed += 15;
        console.log(`Hybrid Car ${this.name} accelerates to ${this.speed} km/h.`);
    }

    public refuel(amount: number): void {
        this.fuel += amount;
        console.log(`Hybrid Car ${this.name} refueled with ${amount}L. Fuel now: ${this.fuel}L.`);
    }

    public getFuelLevel(): number {
        return this.fuel;
    }

    public charge(amount: number): void {
        this.battery += amount;
        console.log(`Hybrid Car ${this.name} charged with ${amount}%. Battery now: ${this.battery}%.`);
    }


    public getBatteryLevel(): number {
        return this.battery;
    }
}
