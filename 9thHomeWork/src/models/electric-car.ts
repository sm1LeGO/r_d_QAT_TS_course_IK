import { Vehicle } from './vehicle';
import { IChargeable } from '../interfaces/index';

export class ElectricCar extends Vehicle implements IChargeable {
    private battery = 80;

    public move(): string {
        if (this.battery <= 0) {
            return `Electric Car ${this.name} cannot move, battery empty!`;
        }
        this.battery -= 10;
        return `Electric Car ${this.name} moves silently at ${this.speed} km/h. Battery left: ${this.battery}%.`;
    }

    public accelerate(): void {
        this.speed += 30;
        console.log(`Electric Car ${this.name} accelerates to ${this.speed} km/h.`);
    }

    public charge(amount: number): void {
        this.battery += amount;
        console.log(`Electric Car ${this.name} charged with ${amount}%. Battery now: ${this.battery}%.`);
    }

    public getBatteryLevel(): number {
        return this.battery;
    }
}
