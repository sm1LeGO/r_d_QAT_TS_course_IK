import { Vehicle } from './vehicle';
import { IChargeable } from '../interfaces/index';

export class ElectricCar extends Vehicle implements IChargeable {
    private battery = 80;
    public constructor(name: string) {
        super(name, 'Electric Car');
    }
    public getAcceleration(): number {
        return 30;
    }

    public move(): string {
        if (this.battery <= 0) {
            return `Electric Car ${this.name} cannot move, battery empty!`;
        }
        this.battery -= 10;
        return `Electric Car ${this.name} moves silently at ${this.speed} km/h. Battery left: ${this.battery}%.`;
    }


    public charge(amount: number): void {
        this.battery = Math.min(this.battery + amount, 100);
        console.log(`Electric Car ${this.name} charged with ${amount}%. Battery now: ${this.battery}%.`);
    }


    public getBatteryLevel(): number {
        return this.battery;
    }
}
