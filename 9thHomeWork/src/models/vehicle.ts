import { IVehicle } from '../interface/index';

export abstract class Vehicle implements IVehicle {
    protected speed = 90;

    public constructor(protected name: string) {}

    public abstract move(): string;

    public accelerate(): void {
        console.log(`${this.name} accelerates to ${this.speed} km/h.`);
    }
}
